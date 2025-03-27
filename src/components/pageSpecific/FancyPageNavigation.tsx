"use client";

import { MotionDiv } from "@/components/Motion";
import { Typography } from "@/components/Materials";
import React from "react";
import Link from "next/link";
import {
  FolderIcon,
  InformationCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

interface FancyPageNavigationItemProps {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const FancyPageNavigationItem: React.FC<FancyPageNavigationItemProps> = ({
  title,
  icon,
  href,
}) => {
  return (
    <Link href={href}>
      <MotionDiv
        className="flex h-24 w-24 flex-col items-center justify-center rounded-md bg-neutral-800 text-white transition-colors duration-200 ease-in-out hover:text-pink-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {icon}
        <Typography variant="h6">{title}</Typography>
      </MotionDiv>
    </Link>
  );
};

const FancyPageNavigation: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6">
      <Typography
        variant="h4"
        className="mt-3 max-w-screen-md text-center text-base uppercase tracking-wider text-neutral-300 sm:text-lg"
      >
        Navigate to other pages
      </Typography>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <FancyPageNavigationItem
          title="About"
          href="/about"
          icon={<InformationCircleIcon className="h-8 w-8" />}
        />
        <FancyPageNavigationItem
          title="Projects"
          href="/projects"
          icon={<FolderIcon className="h-8 w-8" />}
        />
        <FancyPageNavigationItem
          title="Contact"
          href="/contact"
          icon={<UserCircleIcon className="h-8 w-8" />}
        />
      </div>
    </div>
  );
};

export default FancyPageNavigation;
