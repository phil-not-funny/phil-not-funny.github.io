"use client"

import { Avatar, Typography } from "@/components/Materials";
import Link from "next/link";

type ContactListItemProps = {
    title: string;
    username: string;
    href?: string;
    avatar?: string;
    companyBadge: string;
    className?: string;
  }
  
  const ContactListItem: React.FC<ContactListItemProps> = ({
    title,
    username,
    href,
    avatar,
    companyBadge,
    className,
  }) => {
    return (
      <div
        className={`flex flex-row items-center gap-4 shadow-md p-4 rounded-lg w-full flex-grow bg-neutral-700 ${className}`}
      >
        {avatar && (
          <Avatar
            src={avatar}
            alt="avatar"
            className="rounded-full h-16 w-16"
            variant="circular"
          />
        )}
        <div className="flex flex-col justify-center items-start">
          <div className="flex flex-row items-center justify-start space-x-2">
            <Typography variant="h4" className="font-mono">
              {title}
            </Typography>
            <Avatar
              src={companyBadge}
              alt="company"
              className="h-8 w-8 border rounded-full border-neutral-300 bg-white"
            />
          </div>
          {href ? (
            <Link href={href!} target="_blank">
              <Typography variant="paragraph" className="text-neutral-400 italic">
                {username}
              </Typography>
            </Link>
          ) : (
            <Typography variant="paragraph" className="text-neutral-400">
              {username}
            </Typography>
          )}
        </div>
      </div>
    );
  };

  export default ContactListItem;