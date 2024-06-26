import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import Link from "next/link";

export default function ProjectsDetailsPage({ params }: { params: any }) {
  return (
    <div className="px-4 p-2 mb-4 md:p-8 lg:mb-0  font-sans min-h-screen ">
      <div className="font-sans text-sm space-y-10 lg:space-x-6 lg:space-y-0 lg:grid lg:grid-cols-2">
        <div className="col-span-2/3 space-y-6">
          <div className="relative h-[150px] md:h-[200px] xl:h-[350px] 2xl:h-[720px]">
            <Image
              src="/sass.webp"
              alt="project image"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover rounded-md"
            />
          </div>
          <div className="p-5 border border-accent-primary rounded-md">
            <h3 className="lg:text-3xl font-semibold">
              Create a SaaS Application with Next.js.14, Stripe, Kinde, Prisma,
              Supabase
            </h3>
            <p className="text-muted-foreground text-sm mt-2">
              Create a modern Portfolio Website with Next.js.14, Tailwind,
              Kinde, Prisma and Supabase! Learn step-by-step and elevate your
              development skills.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-2 gap-y-2 items-center">
              <span className="bg-accent dark:bg-accent text-primary p-1 border border-accent-primary dark:border dark:border-primary rounded-sm text-xs">
                Typescript
              </span>
              <span className="bg-accent dark:bg-accent text-primary p-1 border border-accent-primary dark:border dark:border-primary rounded-sm text-xs">
                Nextjs
              </span>
              <span className="bg-accent dark:bg-accent text-primary p-1 border border-accent-primary dark:border dark:border-primary rounded-sm text-xs">
                Kinde
              </span>
              <span className="bg-accent dark:bg-accent text-primary p-1 border border-accent-primary dark:border dark:border-primary rounded-sm text-xs">
                Sanity
              </span>
              <span className="bg-accent dark:bg-accent text-primary p-1 border border-accent-primary dark:border dark:border-primary rounded-sm text-xs">
                Vercel
              </span>
              <span className="bg-accent dark:bg-accent text-primary p-1 border border-accent-primary dark:border dark:border-primary rounded-sm text-xs">
                Tailwind
              </span>
              <span className="bg-accent dark:bg-accent text-primary p-1 border border-accent-primary dark:border dark:border-primary rounded-sm text-xs">
                Shadcn/UI
              </span>
              <span className="bg-accent dark:bg-accent text-primary p-1 border border-accent-primary dark:border dark:border-primary rounded-sm text-xs">
                Superbase
              </span>
              <span className="bg-accent dark:bg-accent text-primary p-1 border border-accent-primary dark:border dark:border-primary rounded-sm text-xs">
                Prisma
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-1/3 space-y-6">
          <div className="border border-accent-primary rounded-md p-5">
            <h3 className="text-xl font-semibold">What you will learn</h3>
            <p className="text-muted-foreground">
              Learn More about what you will learn in this free video
            </p>
            <div className="mt-6 space-y-2.5 text-[16px]">
              <p>🌐 Next.js App Router</p>
              <p>🔐 Kinde Authentication</p>
              <p>📧 Passwordless Auth</p>
              <p>🔑 OAuth (Google and GitHub)</p>
              <p>💽 Supabase Database</p>
              <p>💨 Prisma Orm</p>
              <p>🥧 Styling with tailwindcss and shadcn UI</p>
              <p>✅ Guestbook Feature</p>
              <p>💵 Store Projects in Sanity</p>
              <p>🐐 Bento Layout</p>
              <p>😶‍🌫️ Deployment to Vercel</p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 space-x-4">
            <Link
              href="#"
              className="border border-accent-primary rounded-md p-6 h-[115px] text-center"
            >
              <FaGithub size={36} className="mx-auto" />
              <p className="text-lg mt-2.5">Github</p>
            </Link>
            <Link
              href="#"
              className="border border-accent-primary rounded-md p-6 h-[115px] text-center"
            >
              <BiWorld size={36} className="text-red-600 mx-auto" />
              <p className="text-lg mt-2.5">YouTube</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
