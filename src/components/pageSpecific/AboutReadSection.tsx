"use client";

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
};

const AboutReadSection: React.FC<AboutReadSectionProps> = ({
  title,
  paragraph,
  extra,
  id,
}) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <PopIn>
        <div className="relative rounded-xl bg-neutral-800 p-10 shadow-lg">
          {extra}
          <Typography variant="h3" className="font-mono" id={id}>
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="max-w-screen-lg text-pretty text-base leading-relaxed text-neutral-300"
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
};

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
      className="rounded-lg bg-neutral-800 p-1"
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
          className={`z-10 !h-20 !w-20 cursor-pointer rounded-full bg-neutral-100 hover:z-20 ${className}`}
        >
          <img
            src={href}
            alt={alt}
            height={100}
            width={100}
            className="!h-full !w-full rounded-full shadow-lg"
          />
        </m.div>
      </Link>
    </Tooltip>
  );
};

export { AboutReadSection, AboutReadSectionImageBlobs };
