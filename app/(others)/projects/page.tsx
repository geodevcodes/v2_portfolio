"use client";
import ProjectsCard from "@/app/components/card/ProjectsCard";
import { Skeleton } from "@/app/components/skeleton/Skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { projectLinks } from "@/lib/LinkData";
import { Filter } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface ProjectLink {
  id: string;
  imageUrl: string;
  projectTitle: string;
  subTitle: string;
  stack: string[];
  repositoryUrl: string;
  projectUrl: string;
  projectFeatures: string[];
  category: string[];
}

export default function Projects() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const { data: projectLinksData, isLoading } = useQuery<ProjectLink[]>({
    queryKey: ["getProjectApi"],
    queryFn: () => Promise.resolve(projectLinks),
  });

  const categoryOptions = [
    "AI Integration",
    "Web Application",
    "Progressive Web App",
  ];

  const handleCheckboxChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProjects = selectedCategories.length
    ? projectLinksData?.filter((project: any) =>
        selectedCategories.some((category) =>
          project.category.includes(category)
        )
      )
    : projectLinksData;

  return (
    <main className="px-4 p-2 md:p-8 md:pt-16 min-h-screen mb-6 w-full max-w-7xl">
      <div className="pl-3 pb-3 md:pb-6 mb-8 md:mb-4 border-b border-slate">
        <div className="flex items-center justify-between">
          <p className="text-2xl md:text-3xl  lg:text-left lg:text-4xl font-bold">
            Projects
          </p>
          <div className="flex gap-x-6 ">
            <Button
              asChild
              className="w-[120px]"
              onClick={() => setShowFilters((prev) => !prev)}
            >
              <Link href="#" className="flex items-center justify-center">
                <Filter className=" h-5 w-5 mr-4" />
                <span className="text-base">Filter</span>
              </Link>
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3 mb-4 md:-mb-4 md:flex-row md:gap-4 md:mt-4"
            >
              {categoryOptions.map((category) => (
                <label
                  key={category}
                  className={`${
                    !selectedCategories.includes(category) && "text-[#8CA5B5]"
                  } flex items-center gap-2 text-sm `}
                >
                  <input
                    type="checkbox"
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCheckboxChange(category)}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  {category}
                </label>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="w-full items-center font-sans gap-6 space-y-6 lg:space-y-0 text-sm p-2 justify-between gap-y-10 lg:grid lg:grid-cols-2 xl:grid-cols-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx}>
                <Skeleton />
              </div>
            ))
          : filteredProjects?.map((item: any, idx: number) => (
              <div key={idx}>
                <ProjectsCard
                  projectId={item.id}
                  projectTitle={item.projectTitle}
                  subTitle={item.subTitle}
                  cardImageUrl={item.imageUrl}
                  githubUrl={item.repositoryUrl}
                />
              </div>
            ))}
      </div>
    </main>
  );
}
