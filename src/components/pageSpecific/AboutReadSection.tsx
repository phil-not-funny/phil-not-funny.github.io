"use client"

import { Tooltip, Typography } from "@/components/Materials";
import { ReactElement } from "react";
import PopIn from "../low/PopIn";
import Link from "next/link";
import { motion as m } from "framer-motion";

type AboutReadSectionProps = {
  title: ReactElement | string | ReactElement[];
  paragraph: ReactElement | string | ReactElement[];
  extra?: ReactElement | string | ReactElement[];
  id?: string;
}

const AboutReadSection: React.FC<AboutReadSectionProps> = ({
  title,
  paragraph,
  extra,
  id,
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen">
      <PopIn>
        <div className="bg-neutral-800 rounded-xl p-10 relative shadow-lg">
          {extra}
          <Typography variant="h3" className="font-mono" id={id}>
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-pretty text-base max-w-screen-lg leading-relaxed text-neutral-300"
          >
            {paragraph}
          </Typography>
        </div>
      </PopIn>
    </div>
  );
};

type AboutReadSectionImageBlobs = {
  href: string;
  additionalHref: string;
  className?: string;
  alt: string;
}

const AboutReadSectionImageBlobs: React.FC<AboutReadSectionImageBlobs> = ({
  href,
  className,
  alt,
  additionalHref,
}) => {
  return (
    <Tooltip
      content={alt}
      placement="top"
      className="bg-neutral-800 rounded-lg p-1"
    >
      <Link target="_blank" href={additionalHref} className="w-fit">
        <m.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.3 }}
          transition={{
            duration: 1,
            scale: { type: "spring", visualDuration: 0.5, bounce: 0.2 },
          }}
          viewport={{ once: true }}
          className={`!h-20 !w-20 z-10 hover:z-20 bg-neutral-100 rounded-full cursor-pointer ${className}`}
        >
          <img
            src={href}
            alt={alt}
            height={100}
            width={100}
            className="!w-full !h-full rounded-full shadow-lg"
          />
        </m.div>
      </Link>
    </Tooltip>
  );
};

export { AboutReadSection, AboutReadSectionImageBlobs };
