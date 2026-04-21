"use client";

import type { ThemeMode } from "@/lib/site-data";

type AnimatedThemeTogglerProps = {
  theme: ThemeMode;
  onToggle: () => void;
  ariaLabel: string;
};

export function AnimatedThemeToggler({
  theme,
  onToggle,
  ariaLabel,
}: AnimatedThemeTogglerProps) {
  const isLight = theme === "light";

  return (
    <button
      type="button"
      className="animated-theme-toggler"
      onClick={onToggle}
      aria-label={ariaLabel}
      aria-pressed={isLight}
    >
      <span className="animated-theme-toggler__track" />
      <span className="animated-theme-toggler__thumb">
        <span className="animated-theme-toggler__sun" data-active={isLight} />
        <span className="animated-theme-toggler__moon" data-active={!isLight} />
      </span>
      <span className="animated-theme-toggler__label">
        {isLight ? "Light" : "Dark"}
      </span>
    </button>
  );
}
