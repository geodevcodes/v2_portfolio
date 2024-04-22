import ProjectsCard from "../components/card/ProjectsCard";

export default function Courses() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="w-full items-center font-mono gap-6 text-sm lg:grid p-4 justify-between gap-y-10 grid md:grid-cols-2 xl:grid-cols-3">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </main>
  );
}
