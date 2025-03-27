"use client";

import { Project } from "@/types/LibTypes";
import { WithPageHead } from "../top/PageHead";
import PageHeader from "../low/PageHeader";
import { Typography, Carousel } from "../Materials";
import Image from "next/image";
import { PropsWithChildren } from "react";
import BadgeLink from "../low/BadgeLink";
import BadgeDownload from "../low/BadgeDownload";

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
        <BadgeLink
          avatarSrc="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          href={project.repositoryUrl}
          title="Github Repository"
          yap={project.repositoryUrl.replace("https://", "")}
        />
      )}
      <div className="mt-12 flex max-w-screen-lg flex-col items-center gap-12">
        {project.extendedYap && (
          <div>
            <SectionHeading>About</SectionHeading>
            <Typography
              variant="paragraph"
              className="max-w-3xl text-center text-lg"
            >
              {project.extendedYap}
            </Typography>
          </div>
        )}
        {project.versions?.length && (
          <div className="w-full max-w-3xl">
            <SectionHeading>Versions</SectionHeading>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 items-center ">
              {project.versions.map((version, index) => (
                <BadgeDownload
                  version={version}
                  span={index === 0}
                  key={index}
                />
              ))}
            </div>
            {project.repositoryReleases && (
              <Typography variant="small" className="text-center uppercase mt-4 italic">
                More versions on Github
              </Typography>
            )}
          </div>
        )}
        {project.gallery?.length && (
          <div>
            <SectionHeading>Gallery</SectionHeading>
            <Carousel loop autoplay className="mt-4 w-auto max-h-[70vh] rounded-xl">
              {project.gallery.map((galleryImage, index) => (
                <Image
                  key={index}
                  src={galleryImage.src}
                  alt={galleryImage.alt}
                  height={galleryImage.renderedHeight}
                  width={galleryImage.renderedWidth}
                  className="!h-full !w-full object-cover object-center"
                />
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </WithPageHead>
  );
};

const SectionHeading: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography
      variant="h1"
      className="text-center text-xl uppercase tracking-wider"
    >
      {children}
    </Typography>
  );
};

export default ProjectDetailed;
