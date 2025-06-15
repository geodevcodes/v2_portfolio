"use client";

import { Button } from "@/components/ui/button";
import { VscGithubAlt } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.015 }}
      className="group transform transition-all duration-300 hover:shadow-xl hover:shadow-[#4d5bce]/20 rounded-md border border-slate bg-card"
    >
      <div className="p-3">
        <div className="relative rounded-t-md w-full h-[180px] md:h-[230px] overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <Image
              src={cardImageUrl}
              alt="project banner image"
              fill
              priority
              sizes="(max-width: 500px) 100vw, 700px"
              className="rounded-t-md object-cover"
            />
          </motion.div>
        </div>

        <div className="pt-3">
          <Link
            href={`/projects/${projectId}`}
            className="font-semibold text-sm line-clamp-2 hover:underline text-white"
          >
            {projectTitle}
          </Link>

          <p className="text-muted-foreground text-sm line-clamp-2 mt-1">
            {subTitle}
          </p>

          <div className="flex items-center justify-between mt-4">
            <Button asChild className="bg-[#1c2b3a] hover:bg-[#263849]">
              <Link href={`/projects/${projectId}`} className="text-white">
                View Project
              </Link>
            </Button>

            {githubUrl && (
              <a
                aria-label="github link"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-110"
              >
                <VscGithubAlt fill="#607B96" size={25} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
