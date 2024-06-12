import { NextAuthOptions, User, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github";


export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 18000,
    // maxAge: 30,
  },
  callbacks: {
    async redirect({baseUrl }) {
      return baseUrl;
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
};

export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/");
}

// export function loginIsRequiredClient() {
//   if (typeof window !== "undefined") {
//     const session = useSession();
//     const router = useRouter();
//     if (!session) router.push("/");
//   }
// }