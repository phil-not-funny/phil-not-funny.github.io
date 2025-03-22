"use client"

import { motion as m, useScroll } from "framer-motion";
import { PropsWithChildren, useEffect } from "react";

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    console.log(scrollYProgress);
  }, );

  return (
    <m.div
    style={{scaleX: scrollYProgress}}
      className={`bg-pink-600 h-1 fixed top-0 left-0 z-50 w-full`}
    ></m.div>
  );
};

export default ScrollProgress;
