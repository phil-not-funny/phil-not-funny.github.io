"use client";

import { Fragment } from "react";
import { MotionDiv } from "@/components/Motion";
import { Typography } from "@/components/Materials";

const WelcomeMessage: React.FC = () => {
  return (
    <Fragment>
      <Typography
        variant="h1"
        className="relative w-[max-content] font-mono text-xl before:absolute before:inset-0 before:animate-typewriter before:bg-zinc-900 after:absolute after:inset-0 after:ml-1 after:w-[0.125em] after:animate-caret after:bg-neutral-300 sm:text-2xl"
      >
        <span className="text-pink-700">Proxreal</span> by Philip Schrenk
      </Typography>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ delay: 3, duration: 2, ease: "easeInOut" }}
      >
        <Typography
          variant="lead"
          className="mt-3 max-w-screen-md text-center text-sm text-neutral-300 sm:text-lg"
        >
          This portfolio website contains information about my projects, linked
          accounts and contact information.
        </Typography>
      </MotionDiv>
    </Fragment>
  );
};

export default WelcomeMessage;
