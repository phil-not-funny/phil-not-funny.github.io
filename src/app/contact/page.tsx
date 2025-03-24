/* eslint-disable react/no-unescaped-entities */

import PageHeader from "@/components/low/PageHeader";
import { WithPageHead } from "@/components/top/PageHead";
import { Typography } from "@/components/Materials";
import React from "react";
import ContactListItem from "@/components/pageSpecific/ContactListItem";
import EnlargableImage from "@/components/low/EnlargeableImage";
import cv from "../../../public/images/CV_Philip_Schrenk.png";
import { Button } from "@/components/Materials";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  return (
    <WithPageHead>
      <PageHeader>Contact</PageHeader>
      <Typography variant="lead" className="text-center">
        Here, you'll find several ways to get in touch with me, including links
        to my social media profiles.
      </Typography>
      <div className="rounded-lg shadow-lg bg-neutral-800 max-w-screen-lg w-full flex flex-col items-center gap-4 my-24 p-4">
        <Typography
          className="col-span-1 font-mono text-center w-full"
          variant="h4"
        >
          Contact
        </Typography>
        <div className="flex lg:flex-row flex-col gap-4 w-full">
          <ContactListItem
            title="E-Mail"
            username="phil-not-funny@outlook.com"
            href="mailto:phil-not-funny@outlook.com"
            companyBadge="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/1101px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png"
          />
        </div>
        <Typography className="col-span-1 font-mono text-center" variant="h4">
          Social Media
        </Typography>
        <div className="flex lg:flex-row flex-col gap-4 w-full">
          <ContactListItem
            title="GitHub"
            username="phil-not-funny"
            href="https://github.com/phil-not-funny"
            avatar="https://avatars.githubusercontent.com/u/77935424?v=4"
            companyBadge="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          />
          <ContactListItem 
            title="LinkedIn"
            username="Philip Schrenk"
            companyBadge="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png"
            href="https://www.linkedin.com/in/philipschrenk75/"
            avatar="https://media.licdn.com/dms/image/v2/D4E03AQFFR9fGzF1BUQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706184704294?e=1747872000&v=beta&t=V2f1qzzdcAk3-zN8fA-_lnnddoLypmMtFO8ZlM0tG50"
          />
          <ContactListItem
            title="Stack Overflow"
            username="phil-not-funny"
            href="https://stackoverflow.com/users/15899862/phil-not-funny"
            avatar="https://www.gravatar.com/avatar/8cdf654472167b2b3de281836464f116?s=256&d=identicon&r=PG&f=y&so-version=2"
            companyBadge="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/2048px-Stack_Overflow_icon.svg.png"
          />
        </div>
      </div>
      <Typography variant="h1" className="text-center tracking-wider text-2xl uppercase">
      View my CV
      </Typography>
      <EnlargableImage src={cv.src} alt="CV" className="mt-6" />
      <a href="/downloads/CV_Philip_Schrenk.pdf" download><Button className="p-3 mt-2 bg-pink-700 flex items-center gap-3" ><ArrowDownTrayIcon className="h-5 w-5" /> Download</Button></a>
    </WithPageHead>
  );
}
