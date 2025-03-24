"use client";

import { Avatar, Typography } from "@/components/Materials";
import Link from "next/link";
import { Fragment } from "react";

type ContactListItemProps = {
  title: string;
  username: string;
  href?: string;
  avatar?: string;
  companyBadge: string;
  className?: string;
};

const ContactListItem: React.FC<ContactListItemProps> = ({
  title,
  username,
  href,
  avatar,
  companyBadge,
  className,
}) => {
  const usernameChild = (
    <Fragment>
      <Typography
        variant="paragraph"
        className={`text-neutral-400 ${href ? "hover:underline" : ""}`}
      >
        {username}
      </Typography>
    </Fragment>
  );

  const mobileChild = (
    <Fragment>
      {avatar && (
        <Avatar
          src={avatar}
          alt="avatar"
          className="h-16 w-16 rounded-full"
          variant="circular"
        />
      )}
      <div className="flex flex-col items-start justify-center">
        <div className="flex flex-row items-center justify-start space-x-2">
          <Typography variant="h4" className="font-mono">
            {title}
          </Typography>
          <Avatar
            src={companyBadge}
            alt="company"
            className="h-8 w-8 rounded-full border border-neutral-300 bg-white"
          />
        </div>
        <Typography variant="paragraph" className="text-neutral-400">
          {username}
        </Typography>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <div
        className={`hidden w-full flex-grow flex-row items-center gap-4 rounded-lg bg-neutral-700 p-4 shadow-md md:flex ${className}`}
      >
        {avatar && (
          <Avatar
            src={avatar}
            alt="avatar"
            className="h-16 w-16 rounded-full"
            variant="circular"
          />
        )}
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-row items-center justify-start space-x-2">
            <Typography variant="h4" className="font-mono">
              {title}
            </Typography>
            <Avatar
              src={companyBadge}
              alt="company"
              className="h-8 w-8 rounded-full border border-neutral-300 bg-white"
            />
          </div>
          {href ? (
            <Link href={href!} target="_blank">
              {usernameChild}
            </Link>
          ) : (
            usernameChild
          )}
        </div>
      </div>

      {href ? (
        <Link
          href={href!}
          target="_blank"
          className={`flex w-full flex-grow flex-row items-center gap-4 rounded-lg bg-neutral-700 p-4 shadow-md md:hidden ${className}`}
        >
          {mobileChild}
        </Link>
      ) : (
        <div
          className={`flex w-full flex-grow flex-row items-center gap-4 rounded-lg bg-neutral-700 p-4 shadow-md md:hidden ${className}`}
        >
          mobileChild
        </div>
      )}
    </Fragment>
  );
};

export default ContactListItem;
