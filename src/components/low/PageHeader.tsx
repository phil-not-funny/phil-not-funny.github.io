"use client";

import { PropsWithClassNameAndChildren } from "@/types/ComponentTypes";
import { Typography } from "@material-tailwind/react";
import React from "react";

const PageHeader: React.FC<PropsWithClassNameAndChildren> = ({
  children,
  className,
}) => {
  return (
    <Typography
      variant="h1"
      className={`relative mb-5 h-[max-content] text-center font-mono text-xl uppercase tracking-widest sm:w-[max-content] sm:text-left sm:text-3xl sm:after:absolute sm:after:inset-0 sm:after:left-full sm:after:ml-1 sm:after:w-[0.125em] sm:after:animate-caret_static sm:after:bg-pink-600 ${className}`}
    >
      {children}
    </Typography>
  );
};

export default PageHeader;
