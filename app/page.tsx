import { Button } from "@/components/ui/button";
import { PersonStanding, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RecommendCard from "./components/card/RecommendCard";
import { projectLinks } from "@/lib/LinkData";

export default function Home() {
  return (
    <main className="md:p-6 font-mono min-h-screen ">
      {/* ====HERO SECTION ===== */}
      <section className="max-w-2xl xl:max-w-3xl">
        <p className="text-3xl font-semibold  lg:text-5xl xl:text-[42px] ">
          Everything related to tech in one places.
        </p>
        <p className="text-muted-foreground my-6">
          Navigate the ever-evolving tech landscape effortlessly with the
          perfect hub to stay informed.
        </p>
        <div className="flex gap-x-6">
          <Button asChild>
            <Link href="/about">
              <PersonStanding className="mr-2 h-4 w-4" />
              About Me
            </Link>
          </Button>
          <Button
            asChild
            className="bg-muted text-foreground  hover:bg-muted dark:bg-accent dark:text-secondary-foreground"
          >
            <Link href="/projects">
              <Video className="mr-2 h-4 w-4" /> Projects
            </Link>
          </Button>
        </div>
      </section>
      {/*========= Recommended ====== */}
      <section className="mt-20">
        <h5 className="my-3">Recommended</h5>
        {/* ===== Card section ==== */}
        <div className="lg:flex gap-x-6 space-y-6 lg:space-y-0">
          {projectLinks &&
            projectLinks
              .filter((item, idx) => idx === 0 || idx === 1)
              .map((item, idx) => (
                <div key={idx} className="">
                  <RecommendCard
                    urlLink={item.href}
                    cardImageUrl={item.imageUrl}
                  />
                </div>
              ))}
        </div>
      </section>
      {/* ====My Stack section ===== */}
      <section>
        <section className="h-fit border border-accent-primary mt-8 p-6">
          <h3 className="font-bold text-xl">My Stack</h3>
          <p className="text-muted-foreground mb-4">
            Software and tools I use on a regular basis.
          </p>
          <div className="justify-between gap-y-10 grid lg:grid-cols-3">
            <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md">
              <Image
                src="/paystack.png"
                alt="Paystack image"
                width={60}
                height={60}
                priority
                className="object-cover rounded-lg w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
              />
              <div>
                <p className="font-semibold">Paystack</p>
                <p className="text-sm text-muted-foreground">
                  Payment Platform
                </p>
              </div>
            </div>

            <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md ">
              <Image
                src="/figma.webp"
                alt="figma image"
                width={60}
                height={60}
                priority
                className="object-cover w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
              />
              <div>
                <p className="font-semibold">Figma</p>
                <p className="text-sm text-muted-foreground">Design Tool</p>
              </div>
            </div>
            <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md ">
              <Image
                src="/tailwind.webp"
                alt="nextjs image"
                width={60}
                height={60}
                priority
                className="object-cover w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
              />
              <div>
                <p className="font-semibold">Tailwind</p>
                <p className="text-sm text-muted-foreground">Styling</p>
              </div>
            </div>
            <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md ">
              <Image
                src="/vscode.webp"
                alt="nextjs image"
                width={60}
                height={60}
                priority
                className="object-cover w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
              />
              <div>
                <p className="font-semibold">Vs Code</p>
                <p className="text-sm text-muted-foreground">
                  Coding Environment
                </p>
              </div>
            </div>
            <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md ">
              <Image
                src="/nextjs.webp"
                alt="nextjs image"
                width={60}
                height={60}
                priority
                className="object-cover w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
              />
              <div>
                <p className="font-semibold">Next.js</p>
                <p className="text-sm text-muted-foreground">React Framework</p>
              </div>
            </div>

            <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md ">
              <Image
                src="/vue.png"
                alt="vuejs image"
                width={60}
                height={60}
                priority
                className="object-cover rounded-lg w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
              />
              <div>
                <p className="font-semibold">Vue.js</p>
                <p className="text-sm text-muted-foreground">Framework</p>
              </div>
            </div>
          </div>
          <div className="h-fit border border-accent-primary mt-8  text-center rounded-md cursor-pointer ">
            <Link
              href="/stack"
              className="block p-3 hover:bg-accent rounded-md"
            >
              View More
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
