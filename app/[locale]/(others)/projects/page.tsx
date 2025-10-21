"use client";
import { categoryOptions, projectLinks } from "@/lib/LinkData";
import ProjectsCard from "@/app/components/card/ProjectsCard";
import { Skeleton } from "@/app/components/skeleton/Skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Filter } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface ProjectLink {
  slug: string;
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
  const [showFilters, setShowFilters] = useState(true);
  const t = useTranslations("ProjectPage");
  const { data: projectLinksData, isLoading } = useQuery<ProjectLink[]>({
    queryKey: ["getProjectApi"],
    queryFn: () => Promise.resolve(projectLinks),
  });

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
    <main className="px-4 pb-20 md:p-8 md:pt-16 min-h-screen mb-6 w-full max-w-7xl bg-background">
      <div className="fixed w-[95%] md:w-[60%] lg:min-w-[70%] xl:min-w-[79%] z-[10] -mt-[18px] md:-mt-[20px] pb-2 md:pb-4 mb-4  border-b border-slate bg-background">
        <div className="flex items-center justify-between pt-2 md:pt-4 px-2.5 md:px-0">
          <p className="text-2xl md:text-3xl lg:text-left lg:text-4xl font-bold">
            {t("title")}
          </p>
          <Button
            asChild
            className="w-[100px]"
            onClick={() => setShowFilters((prev) => !prev)}
          >
            <Link href="#" className="flex items-center justify-center">
              <Filter className="size-4 mr-2" />
              <span className="text-base font-light"> {t("buttonName")}</span>
            </Link>
          </Button>
        </div>
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-3 lg:flex border-t border-slate py-3 gap-3 px-2.5 my-1.5 md:-mb-4 md:gap-4 md:mt-4"
            >
              {categoryOptions.map(({ label, value, icon }) => {
                const IconComponent = icon;
                return (
                  <label
                    key={value}
                    className={`${
                      !selectedCategories.includes(value) && "text-[#8CA5B5]"
                    } flex items-center  gap-2 text-sm `}
                  >
                    <input
                      type="checkbox"
                      value={value}
                      checked={selectedCategories.includes(value)}
                      onChange={() => handleCheckboxChange(value)}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                    />
                    <IconComponent className="text-lg" />
                    {label}
                  </label>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div
        className={`${
          showFilters && "pt-40 lg:pt-32"
        } w-full items-center font-sans pt-20 gap-6 space-y-6 lg:space-y-0 text-sm p-2 justify-between gap-y-10 lg:grid lg:grid-cols-2 xl:grid-cols-3`}
      >
        {isLoading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx}>
                <Skeleton />
              </div>
            ))
          : filteredProjects?.map((item: any, idx: number) => (
              <div key={idx}>
                <ProjectsCard
                  projectSlug={item.slug}
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
