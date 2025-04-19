"use client";
import { projectLinks } from "@/lib/LinkData";
import ProjectsCard from "../components/card/ProjectsCard";
import { Skeleton } from "../components/skeleton/Skeleton";
import { useQuery } from "@tanstack/react-query";
// import { Button } from "@/components/ui/button";
// import { MonitorCheck, Smartphone, } from "lucide-react";
// import Link from "next/link";

interface ProjectLink {
  id: string;
  imageUrl: string;
  projectTitle: string;
  subTitle: string;
  stack: string[];
  repositoryUrl: string;
  projectUrl: string;
  projectFeatures: string[];
}

export default function Projects() {
  const { data: projectLinksData, isLoading } = useQuery<ProjectLink[]>({
    queryKey: ["getProjectApi"],
    queryFn: () => Promise.resolve(projectLinks),
  });

  return (
    <main className="px-4 p-2 md:p-8 min-h-screen mb-6 w-full max-w-7xl">
      <div className="md:flex justify-between items-center pl-3 md:pb-7 mb-8 md:mb-10 border-b border-slate">
        <p className="text-2xl md:text-3xl mb-5 md:mb-0 lg:text-left lg:text-4xl font-bold">
          Projects
        </p>
        {/* <div className="flex gap-x-6 ">
          <Button asChild>
            <Link href="#">
              <Smartphone className="mr-2 h-4 w-4" />
              Mobile App
            </Link>
          </Button>
          <Button
            asChild
            className="bg-muted text-foreground  hover:bg-muted dark:bg-accent dark:text-secondary-foreground"
          >
            <Link href="#">
              <MonitorCheck className="mr-2 h-4 w-4" /> Web App
            </Link>
          </Button>
        </div> */}
      </div>
      <div className="w-full items-center font-sans gap-6 space-y-6 lg:space-y-0 text-sm p-2 justify-between gap-y-10 lg:grid lg:grid-cols-2 xl:grid-cols-3">
        {isLoading
          ? projectLinks.map((_, idx) => (
              <div key={idx}>
                <Skeleton />
              </div>
            ))
          : projectLinksData?.map((item, idx) => (
              <div key={idx}>
                <ProjectsCard
                  projectId={item.id}
                  projectTitle={item.projectTitle}
                  subTitle={item.subTitle}
                  cardImageUrl={item.imageUrl}
                />
              </div>
            ))}
      </div>
    </main>
  );
}
