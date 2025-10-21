import { Conversation } from "@/app/components/chatbot/Conversation";
import SessionProviderPage from "@/app/providers/session-provider";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import { getMessages } from "next-intl/server";
import { routing } from "../../i18n/routing";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
// import { getLangDir } from "rtl-detect";

const inter = Inter({ subsets: ["latin"] });

export const proudly = localFont({
  src: "../../fonts/proudly/Proudly.ttf",
  display: "swap",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const messages = await getMessages();
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  //   const direction = getLangDir(locale);
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <SessionProviderPage>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <div className="flex flex-col h-full">
                <Navbar locale={locale} />
                <section className="relative md:overflow-auto">
                  {children}
                </section>
                <Footer />
                <Conversation />
              </div>
            </ThemeProvider>
          </SessionProviderPage>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
