import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardData {
  projectId: string;
  cardImageUrl: string;
  projectUrl: string;
  projectTitle: string;
  subTitle: string;
}
export default function RecommendCard({
  projectId,
  cardImageUrl,
  projectTitle,
  subTitle,
}: ProjectCardData) {
  return (
    <div>
      <div className="border border-slate rounded-md">
        <div>
          <div className="relative rounded-lg w-full h-[180px] md:h-[250px] xl:h-[350px] 2xl:h-[400px]">
            <Image
              src={cardImageUrl}
              alt="ecommerce prototype image"
              fill
              className="rounded-t-md"
            />
          </div>
          <div className="p-4 lg:p-3">
            <p className="font-semibold text-sm line-clamp-1 md:max-w-sm">
              {projectTitle}
            </p>
            <div className="lg:flex justify-between gap-2 w-full">
              <p className="text-muted-foreground text-sm line-clamp-1">
                {subTitle}
              </p>
              <div>
                <Button asChild className="w-full mt-4 lg:mt-0">
                  <Link href={`/projects/${projectId}`}>Watch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
