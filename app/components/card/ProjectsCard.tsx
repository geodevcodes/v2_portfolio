import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsCard() {
  return (
    <div>
      <div className="border border-slate">
        <div>
          <div className="relative w-full h-[180px] md:h-[200px] lg:h-[250px] xl:h-[300px]">
            <Image src="/sass.webp" alt="ecommerce prototype image" fill />
          </div>
          <div className="p-4 lg:p-3">
            <p className="font-semibold  text-sm">
              Create a SaaS Application with Next.js.14, Stripe, Kinde, Prisma,
              Supabase and...
            </p>
            <div className="lg:flex justify-between gap-2 w-full">
              <p className="text-muted-foreground text-sm">
                Build a SaaS Application using Next.js 14, Stripe, Kinde,
                Prisma, Supabase, and Tailwind! Learn step...
              </p>
              <div>
                <Button asChild className="w-full mt-4 lg:mt-0">
                  <Link href="/about">Watch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
