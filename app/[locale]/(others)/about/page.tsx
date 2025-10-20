import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | geodevcodes",
  description:
    "Experienced Software Developer with 4+ years of expertise in building high-performance web and mobile applications. Skilled in modern technologies and frameworks to deliver scalable, user-focused solutions. Known for strong leadership and the ability to simplify complex technical concepts for cross-functional teams.",
};

export default function About() {
  const t = useTranslations("AboutPage");
  return (
    <main className="px-4 p-2 pb-32 md:pt-16 md:px-6 lg:p-8 lg:pt-20 min-h-screen">
      <section className="flex flex-col-reverse lg:flex-row lg:flex lg:justify-between lg:space-x-5 w-full">
        <div className="font-sans text-md lg:w-[65%]">
          <p className="text-2xl md:text-3xl text-center mt-6 lg:text-left lg:mt-0 lg:text-4xl font-bold mb-2">
            {t("greetings")}
          </p>
          <div className="max-w-[700px]">
            <p className="text-foreground leading-8 ">{t("contentOne")}</p>
            <p className=" mt-10 leading-8">{t("contentTwo")}</p>
          </div>
          <div className="md:flex space-y-4 md:space-y-0 gap-x-4 mt-10">
            <div className="border border-accent-primary w-full p-6 rounded-lg flex items-center gap-x-2 ">
              <Image
                src="/rasheed-img.jpeg"
                alt="Rasheed profile Image"
                width={50}
                height={50}
                sizes="(max-width: 768px) 100vw, 700px"
                priority
                className="object-cover rounded-lg"
              />{" "}
              <div>
                <p className="font-semibold text-sm">@github/olatunde1998</p>
                <p className="text-sm text-muted-foreground">github</p>
              </div>
            </div>
            <div className="border border-accent-primary w-full p-6 rounded-lg flex items-center gap-x-2">
              <Image
                src="/rasheed-img.jpeg"
                alt="Rasheed profile Image"
                width={50}
                height={50}
                sizes="(max-width: 768px) 100vw, 700px"
                priority
                className="object-cover rounded-lg"
              />{" "}
              <div>
                <p className="font-semibold text-sm">
                  @linkedin/olatunderasheed
                </p>
                <p className="text-sm text-muted-foreground">linkedin</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[35%]">
          <Image
            src="/rasheed-img.jpeg"
            alt="Rasheed profile Image"
            width={200}
            height={200}
            sizes="(max-width: 768px) 100vw, 700px"
            priority
            className="object-cover w-full  md:h-[500px] lg:h-fit rounded-3xl"
          />{" "}
        </div>
      </section>
    </main>
  );
}
