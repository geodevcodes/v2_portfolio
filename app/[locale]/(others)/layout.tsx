import type { Metadata } from "next";
import "../../globals.css";
import SideBar from "@/app/components/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "geodevcodes | Rasheed Olatunde",
  description: "geodevcodes",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideBar />
      <section className="w-full relative flex">
        <main className="w-full pt-20 md:pt-2 max-w-[1150px] overflow-hidden mx-auto xl:max-w-full xl:overflow-x-auto md:ml-[240px] xl:ml-[240px]">
          {children}
        </main>
      </section>
    </>
  );
}
