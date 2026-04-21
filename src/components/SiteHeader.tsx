"use client";

import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/AnimatedThemeToggler";
import BorderGlow from "@/components/BorderGlow";
import FlowingMenu from "@/components/FlowingMenu";
import type { Language, ThemeMode } from "@/lib/site-data";
import { navItems, pageCopy, siteConfig } from "@/lib/site-data";

type SiteHeaderProps = {
  language: Language;
  theme: ThemeMode;
  onLanguageToggle: () => void;
  onThemeToggle: () => void;
};

export function SiteHeader({
  language,
  theme,
  onLanguageToggle,
  onThemeToggle,
}: SiteHeaderProps) {
  const copy = pageCopy[language];
  const menuItems = navItems.map((item, index) => ({
    link: item.href,
    text: item.label[language],
    image: [
      "/assets/stock-commerce.jpg",
      "/assets/stock-ai-workspace.jpg",
      "/assets/stock-systems-dashboard.jpg",
      "/assets/alessandro-fonta-2026.jpg",
      "/assets/case-studies/hib-office.jpg",
    ][index],
  }));
  const headerBg = theme === "dark" ? "#050308" : "#f4efff";
  const headerMarqueeBg = theme === "dark" ? "#c084fc" : "#7c3aed";
  const headerMarqueeText = theme === "dark" ? "#120517" : "#f8f5ff";
  const headerText = theme === "dark" ? "#f5f5f5" : "#120517";
  const headerBorder = theme === "dark" ? "rgba(255,255,255,0.18)" : "rgba(20,10,33,0.18)";

  return (
    <header className="site-header">
      <Link href="/" className="site-header__brand" aria-label="Homepage">
        {siteConfig.shortName}
      </Link>
      <div className="site-header__nav" aria-label="Primary navigation">
        <FlowingMenu
          className="flowing-menu--header"
          items={menuItems}
          speed={18}
          textColor={headerText}
          bgColor={headerBg}
          marqueeBgColor={headerMarqueeBg}
          marqueeTextColor={headerMarqueeText}
          borderColor={headerBorder}
        />
      </div>
      <div className="site-header__controls">
        <BorderGlow
          className="ui-glow ui-glow--header-control"
          edgeSensitivity={24}
          glowColor="274 88 78"
          backgroundColor={theme === "dark" ? "#09070f" : "#ffffff"}
          borderRadius={12}
          glowRadius={20}
          colors={["#8b5cf6", "#c084fc", "#f472b6"]}
          fillOpacity={0.18}
        >
          <button
            type="button"
            className="site-header__toggle"
            onClick={onLanguageToggle}
            aria-label={copy.languageLabel}
          >
            {language === "it" ? "EN" : "IT"}
          </button>
        </BorderGlow>
        <BorderGlow
          className="ui-glow ui-glow--header-control"
          edgeSensitivity={24}
          glowColor="274 88 78"
          backgroundColor={theme === "dark" ? "#09070f" : "#ffffff"}
          borderRadius={12}
          glowRadius={20}
          colors={["#8b5cf6", "#c084fc", "#f472b6"]}
          fillOpacity={0.18}
        >
          <AnimatedThemeToggler
            theme={theme}
            onToggle={onThemeToggle}
            ariaLabel={copy.themeLabel}
          />
        </BorderGlow>
        <BorderGlow
          className="ui-glow ui-glow--header-control ui-glow--header-cta"
          edgeSensitivity={24}
          glowColor="274 88 78"
          backgroundColor={theme === "dark" ? "#09070f" : "#ffffff"}
          borderRadius={12}
          glowRadius={20}
          colors={["#8b5cf6", "#c084fc", "#f472b6"]}
          fillOpacity={0.18}
        >
          <Link href="/#contact" className="site-header__cta">
            {copy.headerCta}
          </Link>
        </BorderGlow>
      </div>
    </header>
  );
}
