import SideBar from "@/app/components/sidebar/Sidebar";
import type { Metadata } from "next";
import "../../globals.css";

const imageUrl = `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`;
const APP_NAME = "geodevcodes";
const APP_DEFAULT_TITLE =
  "Rasheed Olatunde - Software Developer | React & Next.js | Nest.js Expert";
const APP_TITLE_TEMPLATE = "%s | geodevcodes";
const APP_DESCRIPTION =
  "Experienced Software Developer with 4+ years of expertise in building high-performance web and mobile applications. Skilled in modern technologies and frameworks to deliver scalable, user-focused solutions. Known for strong leadership and the ability to simplify complex technical concepts for cross-functional teams.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
  formatDetection: {
    telephone: false,
  },
  keywords: [
    "Rasheed Olatunde",
    "geodevcodes",
    "Software Developer",
    "React Developer",
    "Next.js Developer",
    "Nest.js Developer",
    "Web Developer",
    "Mobile Developer",
    "React-Native Developer",
    "Full-Stack Developer",
    "JavaScript",
    "TypeScript",
    "Frontend Development",
    "Backend Development",
    "Web Applications",
    "Mobile Applications",
    "Tech Blog",
  ],
  openGraph: {
    siteName: APP_NAME,
    locale: "en_US",
    type: "website",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: [imageUrl],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    site: "@geodevcodes",
    creator: "@geodevcodes",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <>
      <SideBar locale={locale} />
      <section className="w-full relative flex">
        <main className="w-full pt-20 md:pt-2 max-w-[1150px] overflow-hidden mx-auto xl:max-w-full xl:overflow-x-auto md:ml-[240px] xl:ml-[240px]">
          {children}
        </main>
      </section>
    </>
  );
}
