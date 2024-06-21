import { projectLinks } from "@/lib/LinkData";
import ProjectsCard from "../components/card/ProjectsCard";

export default function Projects() {
  return (
    <main className="px-4 p-2 md:p-8 min-h-screen mb-6">
      <div className="w-full items-center font-sans gap-6 text-sm p-2 justify-between gap-y-10 grid lg:grid-cols-2 xl:grid-cols-3">
        {projectLinks &&
          projectLinks.map((item, idx) => (
            <div key={idx}>
              <ProjectsCard urlLink={item.href} cardImageUrl={item.imageUrl} />
            </div>
          ))}
      </div>
    </main>
  );
}
