"use client";
import { projectLinks } from "@/lib/LinkData";
import ProjectsCard from "../components/card/ProjectsCard";
import { Skeleton } from "../components/skeleton/Skeleton";
import { useQuery } from "@tanstack/react-query";


interface ProjectLink  {
  id: string;
  imageUrl: string;
  projectTitle: string;
  subTitle: string;
  stack: string[];
  repositoryUrl: string;
  projectUrl: string;
  projectFeatures: string[];
};

export default function Projects() {
  
  const { data: projectLinksData, isLoading } = useQuery<ProjectLink[]>({
    queryKey: ["getProjectApi"],
    queryFn: () => Promise.resolve(projectLinks),
  });

  return (
    <main className="px-4 p-2 md:p-8 min-h-screen mb-6">
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
