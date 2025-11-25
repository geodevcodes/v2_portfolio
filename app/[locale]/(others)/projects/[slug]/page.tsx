import ProjectDetails from "@/app/components/projects/ProjectDetails";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const projectSlug = params?.slug;
  return {
    title: `Project Details - ${projectSlug} | geodevcodes`,
    description: `Explore the detailed overview of the project ${projectSlug} on geodevcodes.`,
    keywords: [
      projectSlug,
      "Rasheed Olatunde",
      "geodevcodes",
      "Software Developer",
      "React Developer",
    ],
  };
}

export default function ProjectsDetailsPage({ params }: { params: any }) {
  const projectSlug = params.slug;
  return (
    <div className="font-sans min-h-screen max-w-7xl">
      <ProjectDetails projectSlug={projectSlug} />
    </div>
  );
}
