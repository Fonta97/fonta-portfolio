"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
        offset: -110,
        duration: 1.1,
      },
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
