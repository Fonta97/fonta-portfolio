"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SitePreloader.module.css";

const MIN_VISIBLE_MS = 1050;
const EXIT_DURATION_MS = 620;
const FALLBACK_RELEASE_MS = 2200;

type PreloaderPhase = "enter" | "exit" | "hidden";

export function SitePreloader() {
  const [phase, setPhase] = useState<PreloaderPhase>("enter");
  const startedAtRef = useRef<number>(0);

  useEffect(() => {
    if (phase === "hidden") {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [phase]);

  useEffect(() => {
    let cancelled = false;
    let released = false;
    let releaseTimer: number | undefined;
    let exitTimer: number | undefined;
    let fallbackTimer: number | undefined;

    const start = performance.now();
    startedAtRef.current = start;

    const release = () => {
      if (cancelled || released) {
        return;
      }

      released = true;
      const elapsed = performance.now() - startedAtRef.current;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);

      releaseTimer = window.setTimeout(() => {
        if (cancelled) {
          return;
        }

        setPhase("exit");

        exitTimer = window.setTimeout(() => {
          if (!cancelled) {
            setPhase("hidden");
          }
        }, EXIT_DURATION_MS);
      }, remaining);
    };

    if (document.readyState === "complete") {
      release();
    } else {
      window.addEventListener("load", release, { once: true });
    }

    fallbackTimer = window.setTimeout(release, FALLBACK_RELEASE_MS);

    return () => {
      cancelled = true;
      window.removeEventListener("load", release);
      if (releaseTimer) {
        window.clearTimeout(releaseTimer);
      }
      if (exitTimer) {
        window.clearTimeout(exitTimer);
      }
      if (fallbackTimer) {
        window.clearTimeout(fallbackTimer);
      }
    };
  }, []);

  if (phase === "hidden") {
    return null;
  }

  return (
    <div
      className={[styles.preloader, phase === "exit" ? styles.preloaderExit : ""]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      <div className={styles.backdrop} />
      <div className={styles.grid} />
      <div className={styles.orb} />
      <div className={styles.panel}>
        <div className={styles.header}>
          <span className={styles.brand}>AF</span>
          <div className={styles.pulse} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className={styles.copy}>
          <span className={styles.label}>INITIALIZING EXPERIENCE</span>
          <h2>Systems, interfaces, delivery.</h2>
          <p>Loading the portfolio shell and visual layers.</p>
        </div>

        <div className={styles.progress} aria-hidden="true">
          <span className={styles.progressTrack} />
          <span className={styles.progressGlow} />
        </div>

        <div className={styles.meta}>
          <span>FULL STACK</span>
          <span>AI</span>
          <span>PREMIUM WEB</span>
        </div>
      </div>
    </div>
  );
}
