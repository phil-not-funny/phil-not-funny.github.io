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
      <ChevronDoubleDownIcon className="text-neutral-300 animate-bounce h-8 w-8 rounded-full p-1 mt-10 border border-neutral-300 " />
    </Fragment>
  );
};

export default StyledScrollDownSection;
