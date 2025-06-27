/* eslint-disable react/no-unescaped-entities */

import DecoratedLink from "@/components/low/DecoratedLink";
import ScrollProgress from "@/components/low/ScrollProgress";
import { PageHead } from "@/components/top/PageHead";
import { MotionDiv } from "@/components/Motion";
import React, { Fragment } from "react";
import {
  AboutReadSection,
  AboutReadSectionImageBlobs,
} from "@/components/pageSpecific/AboutReadSection";
import StyledScrollDownSection from "@/components/pageSpecific/StyledScrollDownSection";
import { Button, List } from "@/components/Materials";
import { EyeIcon } from "@heroicons/react/24/outline";

export default function About() {
  return (
    <Fragment>
      <ScrollProgress />
      <PageHead className="mt-0 justify-center">
        <StyledScrollDownSection
          title="About"
          yap={`This page provides insight into who I am as an individual, while
              also showcasing functionality and design of this website and
              my entirely fictional franchise and company, "Proxreal".`}
        />
      </PageHead>
      <List className="pb-12">
        <AboutReadSection
          title={
            <Fragment>
              Some words{" "}
              <span className="uppercase text-pink-600">About Me</span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              My name is <strong>Philip Schrenk</strong>, and I am from the
              Austrian city of <strong>Vienna</strong>. <br /> Growing up, I've
              always been passionate about programming, software engineering,
              and creating things in general. Keep reading to find out about my
              past and ongoing projects and passions. You can find me on
              basically all{" "}
              <DecoratedLink href={"/contact"}>
                major dev platforms
              </DecoratedLink>
              .
            </Fragment>
          }
          extra={
            <Fragment>
              <MotionDiv
                initial={{ opacity: 0, scale: 0.7 }}
                whileHover={{ scale: 1.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  scale: { type: "spring", visualDuration: 0.5, bounce: 0.2 },
                }}
                viewport={{ once: true }}
                className="!h-42 absolute !right-20 -top-1/2 z-20 hidden !w-auto flex-row md:flex"
              >
                <img
                  src={"/images/about_me_1.jpg"}
                  alt="Picture of me"
                  className="!h-44 -rotate-[8deg] rounded-lg shadow-lg"
                />
              </MotionDiv>
              <MotionDiv
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.3 }}
                transition={{
                  duration: 1,
                  scale: { type: "spring", visualDuration: 0.5, bounce: 0.2 },
                }}
                viewport={{ once: true }}
                className="!h-42 absolute !right-12 -top-1/2 z-10 hidden !w-auto flex-row hover:z-30 md:flex"
              >
                <img
                  src={"/images/about_me_2.jpg"}
                  alt="Picture of me"
                  className="!h-44 rotate-[8deg] rounded-lg !object-cover !object-center shadow-lg"
                />
              </MotionDiv>
            </Fragment>
          }
        />
        <AboutReadSection
          title={
            <Fragment>
              About{" "}
              <span className="uppercase tracking-wide text-pink-600">
                This Page
              </span>
            </Fragment>
          }
          paragraph={
            <Fragment>
              This page is made with{" "}
              <a
                target="_blank"
                href="https://nextjs.org/"
                className="text-green-400 hover:underline"
              >
                Next.js
              </a>
              ,{" "}
              <a
                target="_blank"
                href="https://tailwindcss.com/"
                className="text-teal-400 hover:underline"
              >
                Tailwind CSS
              </a>
              ,{" "}
              <a
                target="_blank"
                href="https://material-tailwind.com/"
                className="text-pink-400 hover:underline"
              >
                Material Tailwind
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                href="https://motion.dev"
                className="text-yellow-400 hover:underline"
              >
                Framer Motion
              </a>
              .<br />
              Working with these over multiple years has thought me expertise in
              Frontend design and development.
              <br />
              All of the code is open-source and can be found on{" "}
              <a
                target="_blank"
                href="https://github.com/phil-not-funny/phil-not-funny.github.io"
                className="text-slate-500 hover:underline"
              >
                GitHub
              </a>
              .
            </Fragment>
          }
          extra={
            <div className="absolute -top-10 right-10 hidden flex-row items-center space-x-1 md:flex lg:space-x-6">
              <AboutReadSectionImageBlobs
                href="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub Repo"
                className="right-1/3"
                additionalHref="https://github.com/phil-not-funny/phil-not-funny.github.io"
              />
              <div className="realtive flex flex-row -space-x-10">
                <AboutReadSectionImageBlobs
                  href="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
                  alt="NextJs"
                  className="shrink-0 grow-0"
                  additionalHref="https://nextjs.org/"
                />
                <AboutReadSectionImageBlobs
                  href="https://files.raycast.com/83afy69l6wjib1zd62gya59tpc76"
                  alt="TailwindCss"
                  className="shrink-0 grow-0"
                  additionalHref="https://tailwindcss.com/"
                />
                <AboutReadSectionImageBlobs
                  href="https://www.material-tailwind.com/image/logo-mt.png"
                  alt="Material Tailwind"
                  className="shrink-0 grow-0"
                  additionalHref="https://material-tailwind.com/"
                />
                <AboutReadSectionImageBlobs
                  href="https://user-images.githubusercontent.com/7850794/164965509-2a8dc49e-2ed7-4243-a2c9-481b03bbc31a.png"
                  alt="Framer-Motion"
                  className="shrink-0 grow-0"
                  additionalHref="https://motion.dev"
                />
              </div>
            </div>
          }
        />
        <AboutReadSection
          title={
            <Fragment>
              My <span className="uppercase text-pink-600">Diploma Thesis</span>{" "}
              (in german)
            </Fragment>
          }
          paragraph={
            <Fragment>
              In 2025, I completed my diploma thesis at the{" "}
              <a
                target="_blank"
                className="text-red-400 hover:underline"
                href="https://www.spengergasse.at"
              >
                HTL Spengergasse
              </a>{" "}
              which was all about creating a videocall webapp using AWS Chime
              and AWS Lambda
              <br /> that would transcribe and summarize the meeting.
              <br />
              It was a group project with 3 other developers, but I basically
              wrote all of the frontend code myself, using Typescript and
              Nextjs.
            </Fragment>
          }
          extra={
            <div className="absolute bottom-0 right-0 flex w-full translate-y-1/2 justify-center">
              <a href="/downloads/IoE_Videocall.pdf" target="_blank">
                <Button className="mt-2 flex items-center gap-3 bg-pink-700 p-3">
                  <EyeIcon className="h-5 w-5" /> View the paper
                </Button>
              </a>
            </div>
          }
        />
        <AboutReadSection
          id="what-is-proxreal"
          title={
            <Fragment>
              What is{" "}
              <span className="uppercase tracking-wide text-pink-600">
                Proxreal
              </span>
              ?
            </Fragment>
          }
          paragraph={`Proxreal is, as mentioned earlier, a completely fictional company or
      franchise—though I'm not entirely sure what to call it. The name
      came about a few years ago when I set out to create a series of
      quality-of-life desktop apps, adding "Prox" to each application's
      name simply because "it sounded cool." The idea stuck with me over
      time, and now Proxreal has evolved into something more, complete
      with its own design identity: sleek black and bold dark pink.`}
        />
      </List>
    </Fragment>
  );
}
