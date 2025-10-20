import SideBar from "@/app/components/sidebar/Sidebar";
import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
  title:
    "Rasheed Olatunde - Software Developer | React & Next.js | Nest.js Expert",
  description:
    "Experienced Software Developer with 4+ years of expertise in building high-performance web and mobile applications. Skilled in modern technologies and frameworks to deliver scalable, user-focused solutions. Known for strong leadership and the ability to simplify complex technical concepts for cross-functional teams.",
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
