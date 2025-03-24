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
      <div className="mt-10 text-pink-600 animate-bounce rounded-full p-1 m-0 border border-pink-500 flex justify-center items-center">
        <ChevronDoubleDownIcon className=" h-7 w-7 p-1" />
        <div className="font-semibold uppercase tracking-wider">Scroll Down</div>
        <ChevronDoubleDownIcon className=" h-7 w-7 p-1" />
      </div>
    </Fragment>
  );
};

export default StyledScrollDownSection;
