"use client";

import { Typography } from "@material-tailwind/react";
import React, { ReactNode } from "react";

interface PageHeaderProps {
  children: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children }) => {
  return (
    <Typography
      variant="h1"
      className="relative mb-5 h-[max-content] w-[max-content] font-mono text-3xl uppercase tracking-widest after:absolute after:inset-0 after:left-full after:ml-1 after:w-[0.125em] after:animate-caret_static after:bg-pink-600"
    >
      {children}
    </Typography>
  );
};

export default PageHeader;
