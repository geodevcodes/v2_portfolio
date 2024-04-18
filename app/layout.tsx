import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import MobileNavbar from "./components/navbar/MobileNavbar";
import SideBar from "./components/sidebar/Sidebar";
import SessionProviderPage from "./providers/session-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "geodevcodes Micro-frontend",
  description: "geodevcodes Micro-frontend Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
              <SideBar />
              <main className="w-full p-2 pt-20 md:pt-2 max-w-[1150px] px-4 mx-auto xl:max-w-full xl:overflow-x-auto md:ml-[240px] xl:ml-[240px]">
                {children}
              </main>
            </section>
          </ThemeProvider>
        </SessionProviderPage>
      </body>
    </html>
  );
}
