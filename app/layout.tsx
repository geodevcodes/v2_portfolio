"use client";
import SessionProviderPage from "@/app/providers/session-provider";
import { ThemeProvider } from "@/app/providers/theme-provider";
import SideBar from "@/app/components/sidebar/Sidebar";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showSidebar = pathname !== "/";
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderPage>
          <ThemeProvider
            attribute="class"
            // defaultTheme="system"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col h-full">
              <Navbar />
              <section className="relative md:overflow-auto">
                {showSidebar && <SideBar />}
                {children}
              </section>
              <Footer />
            </div>
          </ThemeProvider>
        </SessionProviderPage>
      </body>
    </html>
  );
}
