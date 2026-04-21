"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[70] h-[3px] w-full origin-left bg-[linear-gradient(90deg,#7c3aed_0%,#c084fc_48%,#f472b6_100%)] shadow-[0_0_18px_rgba(192,132,252,0.48)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
