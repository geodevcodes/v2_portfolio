import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardData {
  cardImageUrl: string;
  urlLink: string;
}

export default function ProjectsCard({
  cardImageUrl,
  urlLink,
}: ProjectCardData) {
  return (
    <div>
      <div className="border border-slate rounded-md">
        <div>
          <div className="relative rounded-t-md h-[150px] md:h-[200px] 2xl:h-[450px]">
            <Image
              src={cardImageUrl}
              alt="ecommerce prototype image"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 700px"
              className="rounded-t-md object-cover"
            />
          </div>
          <div className="p-3 lg:p-3">
            <p className="font-semibold  text-sm line-clamp-2">
              Create a SaaS Application with Next.js.14, Stripe, Kinde, Prisma,
              Supabase and...
            </p>
            <div className="w-full">
              <p className="text-muted-foreground text-sm">
                Today we are going to create a Digital Marketplace using Next.js
                14, Stripe Connect
              </p>
              <div>
                <Button asChild className="w-full mt-4">
                  <Link
                    href={urlLink}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-white"
                  >
                    View Now
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
