"use client";

import { useEffect, useState } from "react";
import type { Language, ThemeMode } from "@/lib/site-data";

const languageKey = "fonta-language";
const themeKey = "fonta-theme";

function isLanguage(value: string | null): value is Language {
  return value === "it" || value === "en";
}

function isTheme(value: string | null): value is ThemeMode {
  return value === "dark" || value === "light";
}

export function useExperienceSettings() {
  const [language, setLanguage] = useState<Language>("it");
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const storedLanguage = window.localStorage.getItem(languageKey);
      const storedTheme = window.localStorage.getItem(themeKey);
      const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";

      if (isLanguage(storedLanguage)) {
        setLanguage(storedLanguage);
      }

      setTheme(isTheme(storedTheme) ? storedTheme : preferredTheme);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(languageKey, language);
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(themeKey, theme);
  }, [theme]);

  return {
    language,
    setLanguage,
    theme,
    setTheme,
    toggleLanguage: () => setLanguage((current) => (current === "it" ? "en" : "it")),
    toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
  };
}
