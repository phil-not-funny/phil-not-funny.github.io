"use client"

import { Typography } from "@material-tailwind/react";
import React, { ReactNode } from "react";

interface PageHeaderProps {
  children: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children }) => {
  return (
    <Typography
      variant="h1"
      className="mb-5 uppercase tracking-widest text-3xl relative h-[max-content]  w-[max-content] font-mono after:inset-0 after:absolute after:left-full after:ml-1 after:w-[0.125em] after:animate-caret_static after:bg-pink-600"
    >
      {children}
    </Typography>
  );
};

export default PageHeader;
