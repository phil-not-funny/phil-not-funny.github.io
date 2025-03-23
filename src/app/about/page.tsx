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
import { List } from "@/components/Materials";

export default function About() {
  return (
    <Fragment>
      <ScrollProgress />
      <PageHead className="mt-0 justify-center">
        <StyledScrollDownSection
          title="About"
          yap={
            <Fragment>
              This page provides insight into who I am as an individual, while
              also showcasing functionality and design of this website and
              <br />
              my entirely fictional franchise and company, "Proxreal".
            </Fragment>
          }
        />
      </PageHead>
      <List className="pb-12">
        <AboutReadSection
          title={
            <Fragment>
              Some words{" "}
              <span className="text-pink-600 uppercase">About Me</span>
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
                className="absolute !right-20 md:flex hidden flex-row -top-1/2 !h-42 !w-auto z-20"
              >
                <img
                  src={"/images/about_me_1.jpg"}
                  alt="Picture of me"
                  className="!h-44 rounded-lg shadow-lg -rotate-[8deg]"
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
                className="absolute !right-12 md:flex hidden flex-row -top-1/2 !h-42 !w-auto z-10 hover:z-30"
              >
                <img
                  src={"/images/about_me_2.jpg"}
                  alt="Picture of me"
                  className="!h-44 rounded-lg !object-cover !object-center shadow-lg rotate-[8deg]"
                />
              </MotionDiv>
            </Fragment>
          }
        />
        <AboutReadSection
          title={
            <Fragment>
              About{" "}
              <span className="text-pink-600 uppercase tracking-wide">
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
                className="hover:underline text-green-400"
              >
                Next.js
              </a>
              ,{" "}
              <a
                target="_blank"
                href="https://tailwindcss.com/"
                className="hover:underline text-teal-400"
              >
                Tailwind CSS
              </a>
              ,{" "}
              <a
                target="_blank"
                href="https://material-tailwind.com/"
                className="hover:underline text-pink-400"
              >
                Material Tailwind
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                href="https://motion.dev"
                className="hover:underline text-yellow-400"
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
                href="https://github.com/phil-not-funny/proxreal-homepage-nextjs"
                className="hover:underline text-slate-500"
              >
                GitHub
              </a>
              .
            </Fragment>
          }
          extra={
            <div className="absolute right-10 -top-10 md:flex flex-row items-center lg:space-x-6 space-x-1 hidden">
              <AboutReadSectionImageBlobs
                href="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub Repo"
                className="right-1/3"
                additionalHref="https://github.com/phil-not-funny/proxreal-homepage-nextjs"
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
          id="what-is-proxreal"
          title={
            <Fragment>
              What is{" "}
              <span className="text-pink-600 uppercase tracking-wide">
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
