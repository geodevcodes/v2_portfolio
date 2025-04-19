import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import MobileNavbar from "./components/navbar/MobileNavbar";
import SideBar from "./components/sidebar/Sidebar";
import SessionProviderPage from "./providers/session-provider";
import { getServerSession } from "next-auth";
import { authConfig } from "./api/auth/[...nextauth]/option";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "geodevcodes | Rasheed Olatunde",
  description: "geodevcodes",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authConfig);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderPage>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MobileNavbar />
            <section className="w-full relative flex">
              <SideBar session={session} />
              <main className="w-full pt-20 md:pt-2 max-w-[1150px] overflow-hidden mx-auto xl:max-w-full xl:overflow-x-auto md:ml-[240px] xl:ml-[240px]">
                {children}
                <Footer />
              </main>
            </section>
          </ThemeProvider>
        </SessionProviderPage>
      </body>
    </html>
  );
}
