import GithubProvider from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import NextAuth from "next-auth";
import axios from "axios";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      authorization: {
        params: {
          scope: "read:user user:email",
        },
      },
      async profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email:
            profile.email ||
            `${profile.id}+${profile.login}@users.noreply.github.com`,
          image: profile.avatar_url,
          _id: "",
          role: "User",
          token: "",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 3600, //1hour
  },

  callbacks: {
    async jwt({ token, user, account, profile }) {
      // Initial sign in
      if (account && user) {
        // Handle Google provider
        if (account.provider === "google") {
          try {
            const response = await axios.post(
              `${process.env.NEXT_PUBLIC_BASEURL}/auth/google-login`,
              {
                email: profile?.email || user.email,
                name: profile?.name || user.name,
                picture: profile?.picture || user.image,
                googleId: profile?.sub,
              }
            );

            const savedUser = response.data?.data;

            return {
              ...token,
              _id: savedUser._id,
              role: savedUser.role,
              email: savedUser.email,
              token: response.data.token,
            };
          } catch (error) {
            console.error("Error saving Google user to DB:", error);
            return token;
          }
        }

        // Handle GitHub provider
        if (account.provider === "github") {
          try {
            const email =
              user.email ||
              `${profile?.id}+${profile?.login}@users.noreply.github.com`;

            const response = await axios.post(
              `${process.env.NEXT_PUBLIC_BASEURL}/auth/github-login`,
              {
                email,
                name: profile?.name || profile?.login || user.name,
                picture: profile?.avatar_url || user.image,
                githubId: profile?.id?.toString(),
              }
            );

            if (response.data?.data) {
              return {
                ...token,
                _id: response.data.data._id,
                role: response.data.data.role,
                email: response.data.data.email,
                token: response.data.token,
              };
            }
          } catch (error) {
            console.error("Error saving GitHub user to DB:", error);
            return token;
          }
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user._id = token._id as string;
        session.user.role = token.role as string;
        session.user.token = token.token as string;
      }
      return session;
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return `${baseUrl}${url}`;
    },
  },

  pages: {
    signIn: "/",
    error: "/not-found",
  },
});