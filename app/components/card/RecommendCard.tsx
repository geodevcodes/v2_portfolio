import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardData {
  cardImageUrl: string;
  urlLink: string;
}
export default function RecommendCard({
  cardImageUrl,
  urlLink,
}: ProjectCardData) {
  return (
    <div>
      <div className="border border-slate">
        <div>
          <div className="relative w-full h-[180px] md:h-[250px] xl:h-[350px] 2xl:h-[400px]">
            <Image src={cardImageUrl} alt="ecommerce prototype image" fill />
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
                  <Link
                    href={urlLink}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Watch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
