"use client";

import { MotionDiv } from "@/components/Motion";
import { Typography } from "@/components/Materials";
import React from "react";

const FancyPageNavigation: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
        <Typography
          variant="h4"
          className="mt-3 max-w-screen-md text-center text-sm text-neutral-300 sm:text-lg uppercase tracking-wider"
        >
          Navigate to other pages
        </Typography>
    </div>
  );
};

export default FancyPageNavigation;
