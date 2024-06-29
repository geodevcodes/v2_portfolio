import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardData {
  projectId: string;
  cardImageUrl: string;
  projectTitle: string;
  subTitle: string;
}

export default function ProjectsCard({
  projectId,
  cardImageUrl,
  projectTitle,
  subTitle,
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
            <Link
              href={`/projects/${projectId}`}
              className="font-semibold  text-sm line-clamp-2 hover:underline"
            >
              {projectTitle}
            </Link>
            <div className="w-full">
              <p className="text-muted-foreground text-sm  line-clamp-2">
                {subTitle}
              </p>
              <div>
                <Button asChild className="w-full mt-4">
                  <Link href={`/projects/${projectId}`} className="text-white">
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
