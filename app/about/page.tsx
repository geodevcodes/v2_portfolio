import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | geodevcodes",
  description: "geodevcodes Micro-frontend Application",
};

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  md:px-6 lg:p-8">
      <section className="flex flex-col-reverse lg:flex-row lg:flex lg:justify-between lg:space-x-5 w-full">
        <div className="font-mono text-sm lg:w-[65%]">
          <p className="text-2xl md:text-3xl text-center mt-6 lg:text-left lg:mt-0 lg:text-4xl font-bold mb-2">
            Hey I&apos;m Rasheed Olatunde <span>✌🏻</span>
          </p>
          <div className="max-w-[700px]">
            <p className="text-foreground leading-8 ">
              I&apos;m a Frontend developer who juggles building User
              Interfaces. I mainly work with ReactJs, Next.js, Vue.js, but
              occasionally, I like to play with Python.
            </p>
            <p className=" mt-10 leading-8">
              When I&apos;m not working, I find peace in exploring the world and
              unwinding through activities like skiing. Traveling and embracing
              the outdoors bring a perfect balance to my life, providing a
              refreshing break from the anomalies in business.
            </p>
          </div>
          <div className="md:flex space-y-4 md:space-y-0 gap-x-4 mt-10">
            <div className="border border-accent-primary w-full p-6 rounded-lg flex items-center gap-x-2 ">
              <Image
                src="/rasheed-img.jpeg"
                alt="Rasheed profile Image"
                width={50}
                height={50}
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
            priority
            className="object-cover w-full  md:h-[500px] lg:h-fit rounded-3xl"
          />{" "}
        </div>
      </section>
    </main>
  );
}
