"use client";

import { Project } from "@/types/LibTypes";
import { WithPageHead } from "../top/PageHead";
import PageHeader from "../low/PageHeader";
import { Typography } from "../Materials";
import Image from "next/image";
import ContactListItem from "./ContactListItem";

interface ProjectDetailedProps {
  project: Project;
}

const ProjectDetailed: React.FC<ProjectDetailedProps> = ({ project }) => {
  return (
    <WithPageHead>
      <Image
        className="mb-4 h-20 !w-auto"
        src={project.cover.src}
        alt={project.cover.alt}
        height={project.cover.renderedHeight}
        width={project.cover.renderedWidth}
      />
      <PageHeader>
        <span className="text-pink-600">Project:</span> {project.title}
      </PageHeader>
      <Typography variant="small" className="uppercase italic">
        {project.type.toString()}
      </Typography>
      <Typography variant="lead" className="max-w-3xl text-center">
        {project.yap}
      </Typography>
      {project.repositoryUrl && (
        <div className="mt-12 flex w-full max-w-2xl items-center">
          <ContactListItem
            href={project.repositoryUrl}
            title="Github Repository"
            username={project.repositoryUrl.substring(
              project.repositoryUrl.indexOf("https://"),
              project.repositoryUrl.length,
            )}
            companyBadge="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            className="flex justify-center"
          />
        </div>
      )}
      {project.extendedYap && (
        <Typography variant="paragraph" className="max-w-3xl text-center">
          {project.extendedYap}
        </Typography>
      )}
    </WithPageHead>
  );
};

export default ProjectDetailed;
