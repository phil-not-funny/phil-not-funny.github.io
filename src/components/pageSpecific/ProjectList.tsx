"use client";

import { projects } from "@/lib/projects";
import { PropsWithClassName } from "@/types/ComponentTypes";
import { Project, ProjectType } from "@/types/LibTypes";
import Image from "next/image";
import { Typography } from "@/components/Materials";
import Link from "next/link";
import { MotionDiv } from "../Motion";

interface ProjectListItemProps {
  project: Project;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({ project }) => {
  return (
    <Link href={"/projects/" + project.slug}>
      <MotionDiv
        className={`flex flex-row items-center gap-3 rounded-md bg-neutral-800 p-2 text-neutral-300 shadow-md shadow-neutral-800/40 transition-colors transition-shadow duration-200 ease-in-out hover:text-${project.designatedClassName || "pink-600"}`}
        whileHover={{ x: 7.5 }}
        whileTap={{ x: -7.5 }}
      >
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          width={project.cover.renderedWidth}
          height={project.cover.renderedHeight}
          className="h-16 w-auto"
        />
        <div className="flex flex-col justify-center">
          <Typography
            variant="h1"
            className="text-2xl uppercase tracking-wider"
          >
            {project.title}
          </Typography>
          <Typography variant="paragraph" className="text-sm !text-neutral-300">
            {project.yap}
          </Typography>
        </div>
      </MotionDiv>
    </Link>
  );
};

const ProjectList: React.FC<PropsWithClassName> = ({ className }) => {
  return (
    <div
      className={`flex w-full max-w-2xl flex-col justify-center gap-3 ${className}`}
    >
      {Object.values(ProjectType).map((value, idx) => (
        <div
          className="flex w-full flex-col justify-center gap-3 p-3"
          key={idx}
        >
          <h1 className="text-center text-xl uppercase tracking-wider">
            {value} Projects
          </h1>
          {projects
            .filter((p) => p.type.toString() === value)
            .map((project) => (
              <ProjectListItem project={project} key={project.slug} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
