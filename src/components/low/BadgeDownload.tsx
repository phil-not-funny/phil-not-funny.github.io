"use client";

import { ProjectVersion } from "@/types/LibTypes";
import { MotionDiv } from "../Motion";
import {
  CalendarIcon,
  CheckBadgeIcon,
  TagIcon,
} from "@heroicons/react/24/solid";
import { Typography } from "../Materials";
import Link from "next/link";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface BadgeDownloadProps {
  version: ProjectVersion;
  span?: boolean;
}

const BadgeDownload: React.FC<BadgeDownloadProps> = ({ version, span }) => {
  const children = (
    <MotionDiv
      key={version.download ? version.version : undefined}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`group relative mt-4 flex w-full items-center bg-neutral-800 ${span ? (!version.download ? "col-span-3" : "" + "rounded-lg") : "rounded-full"}`}
    >
      <div className="flex w-full flex-row items-center gap-2 p-1">
        <ArrowDownCircleIcon className="h-11 w-11 rounded-full text-neutral-300 group-hover:!text-pink-600" />
        <div className="h-full w-full">
          <div
            className={
              span ? "flex w-full flex-row items-center justify-between" : ""
            }
          >
            <div className="flex flex-row items-center gap-2">
              <TagIcon className="h-4 w-4" />
              <span className="font-bold tracking-wide">{version.version}</span>
              -
              <CalendarIcon className="h-4 w-4" />
              <Typography variant="small">{version.releaseDate}</Typography>
            </div>
            {span ? (
              <div className="flex flex-row items-center gap-1 text-pink-600">
                <CheckBadgeIcon className="h-4 w-4" />
                Recommended
              </div>
            ) : null}
          </div>
          {span ? (
            <ul>
              {version.changes?.map((change) => (
                <li key={change.toLowerCase()}>
                  <Typography
                    variant="small"
                    className="flex flex-row items-center"
                  >
                    <ChevronRightIcon className="h-3 w-3" /> {change}
                  </Typography>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </MotionDiv>
  );

  return version.download ? (
    <Link
      key={version.version}
      href={version.download}
      className={span ? "md:col-span-3" : ""}
      download={true}
    >
      {children}
    </Link>
  ) : (
    children
  );
};

export default BadgeDownload;
