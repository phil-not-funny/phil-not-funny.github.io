"use client";

import Link from "next/link";
import { Typography, Avatar } from "../Materials";
import { MotionDiv } from "../Motion";

interface BadgeLinkProps {
  href: string;
  title: string;
  yap: string;
  avatarSrc: string;
}

const BadgeLink: React.FC<BadgeLinkProps> = ({
  href,
  title,
  yap,
  avatarSrc,
}) => {
  return (
    <Link href={href} className="w-full max-w-2xl" target="_blank">
      <MotionDiv
        className="relative mt-4 flex w-full items-center rounded-full border border-neutral-600 transition-colors duration-200 hover:border-pink-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="flex flex-row items-center gap-2">
          <Avatar
            src={avatarSrc}
            className="h-10 w-10 border border-white bg-white"
          />
          <div className="h-full">
            <Typography
              variant="small"
              className="absolute top-0 -ml-2 -translate-y-1/2 bg-neutral-900 px-2"
            >
              {title}
            </Typography>
            <Typography variant="paragraph">{yap}</Typography>
          </div>
        </div>
      </MotionDiv>
    </Link>
  );
};

export default BadgeLink;
