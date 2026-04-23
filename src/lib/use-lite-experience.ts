"use client";

import { useEffect, useState } from "react";

const liteExperienceQuery =
  "(max-width: 900px), (hover: none), (pointer: coarse), (prefers-reduced-motion: reduce)";

export function useLiteExperience() {
  const [isLiteExperience, setIsLiteExperience] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia(liteExperienceQuery);

    const syncPreference = () => {
      setIsLiteExperience(mediaQuery.matches);
    };

    syncPreference();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncPreference);
      return () => mediaQuery.removeEventListener("change", syncPreference);
    }

    mediaQuery.addListener(syncPreference);
    return () => mediaQuery.removeListener(syncPreference);
  }, []);

  return isLiteExperience;
}
