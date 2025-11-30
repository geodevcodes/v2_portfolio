"use client";
import { projectLinks } from "@/lib/LinkData";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { ArrowLeft } from "lucide-react";
import ReactPlayer from "react-player";
import Image from "next/image";

interface ProjectDetailsProps {
  projectSlug?: string;
}

export default function ProjectDetails({ projectSlug }: ProjectDetailsProps) {
  const projectArray = projectLinks || [];
  const project = projectArray.find((item) => item?.slug === projectSlug);
  const router = useRouter();

  return (
    <div className="px-4 p-2 mb-4 pb-20 md:p-8 md:pt-20 lg:mb-0 font-sans min-h-screen w-full max-w-7xl 2xl:max-w-[1440px] 2xl:mx-auto">
      <div
        onClick={() => router.back()}
        className="mb-6 cursor-pointer hover:text-[#014751] dark:hover:text-muted-foreground hover:border-[#014751]  hover:border rounded-2xl flex items-center gap-2 border border-slate-300 dark:border-muted-foreground dark:border-[0.1px] w-fit p-1.5 px-3 text-sm"
      >
        <ArrowLeft size={14} />
        Back to Projects
      </div>
      <div className="font-sans text-sm space-y-10 lg:space-x-6 lg:space-y-0 lg:grid lg:grid-cols-2">
        <div className="col-span-2/3 space-y-6">
          {/* <div>
            <Image
              src={(project?.imageUrl as string) ?? undefined}
              alt="project image"
              width={200}
              height={200}
              sizes="(max-width: 768px) 100vw, 700px"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              className="object-cover rounded-md w-full h-[200px] md:h-[250px] xl:h-[300px] border border-accent-primary"
            />
          </div> */}
          <div className="w-full h-fi h-[250px] md:h-[300px] rounded-md">
            <ReactPlayer
              width="100%"
              slot="media"
              height="100%"
              controls
              src={(project?.videoUrl as string) ?? undefined}
            />
          </div>
          <div className="p-5 border border-accent-primary rounded-md">
            <h3 className="lg:text-3xl font-semibold">
              {project?.projectTitle}
            </h3>
            <p className="text-muted-foreground text-sm mt-2">
              {project?.subTitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-2 gap-y-3 items-center">
              {project?.stack?.map((item, idx) => (
                <span key={idx} className="">
                  <span className="bg-accent dark:bg-accent text-primary p-1 border border-accent-primary dark:border dark:border-primary rounded-sm text-xs">
                    {item}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1/3 space-y-6">
          <div className="border border-accent-primary rounded-md p-5">
            <h3 className="text-xl font-semibold">Tools & Technologies</h3>
            <p className="text-muted-foreground">
              Tools & Frameworks That Made It Happen. Check it out!
            </p>
            <div className="mt-6 space-y-2.5 text-[16px]">
              {project?.projectFeatures?.map((item, idx) => (
                <div key={idx}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 space-x-4">
            <a
              href={project?.repositoryUrl as string}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent-primary rounded-md p-6 h-[115px] text-center"
            >
              <FaGithub size={36} className="mx-auto" />
              <p className="text-lg mt-2.5">Github</p>
            </a>
            <a
              href={project?.projectUrl as string}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent-primary rounded-md p-6 h-[115px] text-center"
            >
              <BiWorld size={36} className="text-red-600 mx-auto" />
              <p className="text-lg mt-2.5">Live Link</p>
            </a>
          </div>
        </div>
      </div>
      <div className="font-sans text-sm space-y-10 lg:space-y-0 gap-6 lg:grid lg:grid-cols-2 my-10">
        {project?.imageUrls?.map((item, idx) => (
          <div key={idx}>
            <Image
              src={(item as string) ?? undefined}
              alt="project image"
              width={200}
              height={200}
              sizes="(max-width: 768px) 100vw, 700px"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              className="rounded-md w-full border border-accent-primary"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
