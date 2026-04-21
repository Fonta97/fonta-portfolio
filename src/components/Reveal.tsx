"use client";

import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
  y?: number;
};

export function Reveal({ children, className, delay = 0, immediate = false, y = 42 }: RevealProps) {
  const style = {
    "--reveal-delay": `${delay * 1000}ms`,
    "--reveal-y": `${y}px`,
  } as CSSProperties;

  if (immediate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={["reveal-scroll", className].filter(Boolean).join(" ")} style={style}>
      {children}
    </div>
  );
}
