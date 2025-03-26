"use client";

import { PropsWithClassNameAndChildren } from "@/types/ComponentTypes";
import { Typography } from "@material-tailwind/react";
import React, { ReactNode } from "react";


const PageHeader: React.FC<PropsWithClassNameAndChildren> = ({ children, className }) => {
  return (
    <Typography
      variant="h1"
      className={`relative mb-5 h-[max-content] w-[max-content] font-mono text-3xl uppercase tracking-widest after:absolute after:inset-0 after:left-full after:ml-1 after:w-[0.125em] after:animate-caret_static after:bg-pink-600 ${className}`}
    >
      {children}
    </Typography>
  );
};

export default PageHeader;
