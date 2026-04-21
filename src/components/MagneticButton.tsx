"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { useState } from "react";

type MagneticButtonProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function MagneticButton({
  children,
  className = "",
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const base = "magnetic-button";
  const styles = `magnetic-button--${variant}`;

  return (
    <motion.a
      {...props}
      className={`${base} ${styles} ${className}`}
      animate={shouldReduceMotion ? undefined : position}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
      onMouseMove={(event) => {
        if (shouldReduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        setPosition({
          x: (event.clientX - rect.left - rect.width / 2) * 0.12,
          y: (event.clientY - rect.top - rect.height / 2) * 0.18,
        });
      }}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
    >
      {children}
    </motion.a>
  );
}
