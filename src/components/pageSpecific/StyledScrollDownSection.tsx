"use client";

import { Fragment, ReactElement } from "react";
import PageHeader from "../low/PageHeader";
import { Typography } from "@/components/Materials";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

type StyledScrollDownSectionProps = {
  title: string;
  yap: string | ReactElement;
};

const StyledScrollDownSection: React.FC<StyledScrollDownSectionProps> = ({
  title,
  yap,
}) => {
  return (
    <Fragment>
      <PageHeader>{title}</PageHeader>
      <Typography variant="lead" className="text-center">
        {yap}
      </Typography>
      <div className="m-0 mt-10 flex animate-bounce items-center justify-center rounded-full border border-pink-500 p-1 text-pink-600">
        <ChevronDoubleDownIcon className="h-7 w-7 p-1" />
        <div className="font-semibold uppercase tracking-wider">
          Scroll Down
        </div>
        <ChevronDoubleDownIcon className="h-7 w-7 p-1" />
      </div>
    </Fragment>
  );
};

export default StyledScrollDownSection;
