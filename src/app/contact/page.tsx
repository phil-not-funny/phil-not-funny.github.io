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
      <div className="my-24 flex w-full max-w-screen-lg flex-col items-center gap-4 rounded-lg bg-neutral-800 p-4 shadow-lg">
        <Typography
          className="col-span-1 w-full text-center font-mono"
          variant="h4"
        >
          Contact
        </Typography>
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          <ContactListItem
            title="E-Mail"
            username="phil-not-funny@outlook.com"
            href="mailto:phil-not-funny@outlook.com"
            companyBadge="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/1101px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png"
          />
        </div>
        <Typography className="col-span-1 text-center font-mono" variant="h4">
          Social Media
        </Typography>
        <div className="flex w-full flex-col gap-4 lg:flex-row">
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
            avatar="https://media.licdn.com/dms/image/v2/D4E03AQFFR9fGzF1BUQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706184704294?e=1756339200&v=beta&t=nrFoi5jXHyXc6Ma34-O22xWHeNUZoDPZ5Q-frUp6Qn8"
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
      <Typography
        variant="h1"
        className="text-center text-2xl uppercase tracking-wider"
      >
        View my CV
      </Typography>
      <EnlargableImage src={cv.src} alt="CV" className="mt-6" />
      <a href="/downloads/CV_Philip_Schrenk.pdf" download>
        <Button className="mt-2 flex items-center gap-3 bg-pink-700 p-3">
          <ArrowDownTrayIcon className="h-5 w-5" /> Download
        </Button>
      </a>
    </WithPageHead>
  );
}
