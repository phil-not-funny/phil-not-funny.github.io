"use client";

import { Project } from "@/types/LibTypes";
import { WithPageHead } from "../top/PageHead";
import PageHeader from "../low/PageHeader";
import { Typography, Carousel, Avatar } from "../Materials";
import Image from "next/image";
import { MotionDiv } from "../Motion";
import { PropsWithChildren } from "react";
import Link from "next/link";
import BadgeLink from "../low/BadgeLink";

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
          <div>
            <SectionHeading>Versions</SectionHeading>
            <div className="mt-4">
              {project.versions.map((version, index) => (
                <MotionDiv
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex w-full flex-row bg-neutral-800"
                ></MotionDiv>
              ))}
            </div>
          </div>
        )}
        {project.gallery?.length && (
          <div>
            <SectionHeading>Gallery</SectionHeading>
            <Carousel loop autoplay className="mt-4 rounded-xl">
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
