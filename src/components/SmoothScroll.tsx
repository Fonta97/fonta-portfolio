"use client";

import { useEffect } from "react";
import Lenis from "lenis";

type SmoothScrollProps = {
  disabled?: boolean;
};

export function SmoothScroll({ disabled = false }: SmoothScrollProps) {
  useEffect(() => {
    if (
      disabled ||
      window.matchMedia("(prefers-reduced-motion: reduce), (hover: none), (pointer: coarse)")
        .matches
    ) {
      return undefined;
    }

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.08,
      wheelMultiplier: 0.92,
      touchMultiplier: 1,
      overscroll: true,
      anchors: {
        offset: -96,
        duration: 1,
      },
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
