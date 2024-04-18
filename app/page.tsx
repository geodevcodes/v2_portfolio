import { Button } from "@/components/ui/button";
import { PersonStanding, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RecommendCard from "./components/card/RecommendCard";

export default function Home() {
  return (
    <main className="md:p-6 font-mono min-h-screen ">
      {/* ====HERO SECTION ===== */}
      <section className="max-w-2xl xl:max-w-3xl">
        <p className="text-sm md:text-3xl font-semibold  lg:text-5xl xl:text-[42px] ">
          Everything related to tech in one place.
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
            <Link href="/courses">
              <Video className="mr-2 h-4 w-4" /> Courses
            </Link>
          </Button>
        </div>
      </section>
      {/*========= Recommended ====== */}
      <section className="mt-20">
        <h5 className="my-3">Recommended </h5>
        {/* ===== Card section ==== */}
        <div className="lg:flex gap-x-6 space-y-6 lg:space-y-0">
          <RecommendCard />
          <RecommendCard />
        </div>
      </section>
      {/* ====My Stack section ===== */}
      <section>
        <section className="h-fit border border-accent-primary mt-8 p-6">
          <h3 className="font-bold text-xl">My Stack</h3>
          <p className="text-muted-foreground mb-4">
            Software and tools I use on a regular basis.
          </p>
          <div className="justify-between gap-y-10 grid md:grid-cols-2 lg:grid-cols-3">
            <div className="h-fit flex gap-x-2 items-center">
              <Image
                src="/chrome.webp"
                alt="nextjs image"
                width={60}
                height={60}
                priority
                className="object-cover"
              />
              <div>
                <p className="font-semibold">Chrome</p>
                <p className="text-sm text-muted-foreground">Framework</p>
              </div>
            </div>

            <div className="h-fit flex gap-x-2 items-center">
              <Image
                src="/figma.webp"
                alt="nextjs image"
                width={60}
                height={60}
                priority
                className="object-cover"
              />
              <div>
                <p className="font-semibold">Next.js</p>
                <p className="text-sm text-muted-foreground">Framework</p>
              </div>
            </div>
            <div className="h-fit flex gap-x-2 items-center">
              <Image
                src="/tailwind.webp"
                alt="nextjs image"
                width={60}
                height={60}
                priority
                className="object-cover"
              />
              <div>
                <p className="font-semibold">Tailwind</p>
                <p className="text-sm text-muted-foreground">Framework</p>
              </div>
            </div>
            <div className="h-fit flex gap-x-2 items-center">
              <Image
                src="/vscode.webp"
                alt="nextjs image"
                width={60}
                height={60}
                priority
                className="object-cover"
              />
              <div>
                <p className="font-semibold">Vs Code</p>
                <p className="text-sm text-muted-foreground">Framework</p>
              </div>
            </div>
            <div className="h-fit flex gap-x-2 items-center">
              <Image
                src="/nextjs.webp"
                alt="nextjs image"
                width={60}
                height={60}
                priority
                className="object-cover"
              />
              <div>
                <p className="font-semibold">Next.js</p>
                <p className="text-sm text-muted-foreground">Framework</p>
              </div>
            </div>

            <div className="h-fit flex gap-x-2 items-center">
              <Image
                src="/nextjs.webp"
                alt="nextjs image"
                width={60}
                height={60}
                priority
                className="object-cover"
              />
              <div>
                <p className="font-semibold">Next.js</p>
                <p className="text-sm text-muted-foreground">Framework</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
