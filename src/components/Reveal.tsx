"use client";

import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
  noBlur?: boolean;
  y?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  immediate = false,
  noBlur = false,
  y = 42,
}: RevealProps) {
  const style = {
    "--reveal-delay": `${delay * 1000}ms`,
    "--reveal-y": `${y}px`,
  } as CSSProperties;

  if (immediate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={["reveal-scroll", noBlur ? "reveal-scroll--soft" : "", className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}
