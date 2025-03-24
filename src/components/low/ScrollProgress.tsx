"use client";

import { motion as m, useScroll } from "framer-motion";
import { useEffect } from "react";

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    console.log(scrollYProgress);
  });

  return (
    <m.div
      style={{ scaleX: scrollYProgress }}
      className={`fixed left-0 top-0 z-50 h-1 w-full bg-pink-600`}
    ></m.div>
  );
};

export default ScrollProgress;
