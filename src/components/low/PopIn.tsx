"use client"

import { PropsWithChildren } from "react";
import { motion as m } from "framer-motion";

interface Props extends PropsWithChildren {
  className?: string;
}

const PopIn: React.FC<Props> = ({ children, className }) => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        scale: { type: "spring", visualDuration: 0.5, bounce: 0.2 },
      }}
      className={className}
    >
      {children}
    </m.div>
  );
};

export default PopIn;
