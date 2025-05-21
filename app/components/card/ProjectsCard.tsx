import { Button } from "@/components/ui/button";
import { VscGithubAlt } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardData {
  projectId: string;
  cardImageUrl: string;
  projectTitle: string;
  subTitle: string;
  githubUrl: string;
}

export default function ProjectsCard({
  projectId,
  cardImageUrl,
  projectTitle,
  subTitle,
  githubUrl,
}: ProjectCardData) {
  return (
    <div>
      <div className="border border-slate rounded-md">
        <div className="p-3">
          <div className="relative rounded-t-md w-full h-[180px] md:h-[230px]">
            <Image
              src={cardImageUrl}
              alt="project banner image"
              fill
              priority
              sizes="(max-width: 500px) 100vw, 700px"
              className="rounded-t-md w-full object-con h-[180px md:h-[250px"
            />
          </div>
          <div className="pt-3">
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
              <div className="flex items-center justify-between">
                <Button asChild className="w-fit mt-4 bg-[#1c2b3a]">
                  <Link href={`/projects/${projectId}`} className="text-white">
                    View Project
                  </Link>
                </Button>
                {githubUrl ? (
                  <a
                    aria-label="github link"
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <VscGithubAlt fill="#607B96" size={25} />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
