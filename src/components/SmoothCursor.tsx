"use client";

import { useEffect, useRef } from "react";
import type { ThemeMode } from "@/lib/site-data";

type SmoothCursorProps = {
  theme: ThemeMode;
};

export function SmoothCursor({ theme }: SmoothCursorProps) {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let trailX = mouseX;
    let trailY = mouseY;
    let rafId = 0;

    const cursor = cursorRef.current;
    const dot = dotRef.current;

    if (!cursor || !dot) return;

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.opacity = "1";
      cursor.style.opacity = "1";
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      cursor.style.opacity = "0";
    };

    const render = () => {
      trailX += (mouseX - trailX) * 0.14;
      trailY += (mouseY - trailY) * 0.14;

      cursor.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      rafId = window.requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseleave", onLeave);
    rafId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="smooth-cursor"
        data-theme={theme}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="smooth-cursor-dot"
        data-theme={theme}
      />
    </>
  );
}
