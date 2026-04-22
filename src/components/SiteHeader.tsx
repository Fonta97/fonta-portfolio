"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  type Ref,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Language, ThemeMode } from "@/lib/site-data";
import { navItems, pageCopy, siteConfig } from "@/lib/site-data";
import styles from "./SiteHeader.module.css";

type SiteHeaderProps = {
  language: Language;
  theme: ThemeMode;
  onLanguageChange: (language: Language) => void;
  onThemeToggle: () => void;
};

type HeaderNavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  mobile?: boolean;
  onNavigate: (href: string) => void;
  linkRef?: Ref<HTMLAnchorElement>;
};

function HeaderNavLink({
  href,
  label,
  isActive,
  mobile = false,
  onNavigate,
  linkRef,
}: HeaderNavLinkProps) {
  return (
    <Link
      ref={linkRef}
      href={href}
      className={mobile ? styles.drawerLink : styles.desktopLink}
      data-active={isActive}
      aria-current={isActive ? "page" : undefined}
      onClick={() => onNavigate(href)}
    >
      <span>{label}</span>
    </Link>
  );
}

type ThemeToggleProps = {
  theme: ThemeMode;
  onToggle: () => void;
  ariaLabel: string;
};

function ThemeToggle({ theme, onToggle, ariaLabel }: ThemeToggleProps) {
  const isLight = theme === "light";

  return (
    <button
      type="button"
      className={styles.themeToggle}
      onClick={onToggle}
      aria-label={ariaLabel}
      aria-pressed={isLight}
    >
      <span className={styles.themeToggleTrack} aria-hidden="true">
        <span
          className={styles.themeToggleThumb}
          data-theme={isLight ? "light" : "dark"}
        >
          <span className={styles.themeSun} />
          <span className={styles.themeMoon} />
        </span>
      </span>
      <span className={styles.themeToggleText} suppressHydrationWarning>
        {isLight ? "Light" : "Dark"}
      </span>
    </button>
  );
}

type LanguageSwitcherProps = {
  language: Language;
  onChange: (language: Language) => void;
  ariaLabel: string;
};

function LanguageSwitcher({
  language,
  onChange,
  ariaLabel,
}: LanguageSwitcherProps) {
  return (
    <div
      className={styles.languageSwitcher}
      role="group"
      aria-label={ariaLabel}
    >
      {(["it", "en"] as const).map((item) => (
        <button
          key={item}
          type="button"
          className={styles.languageButton}
          data-active={language === item}
          aria-pressed={language === item}
          onClick={() => onChange(item)}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader({
  language,
  theme,
  onLanguageChange,
  onThemeToggle,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const copy = pageCopy[language];
  const drawerId = useId();
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstDrawerLinkRef = useRef<HTMLAnchorElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/#work");

  const menuItems = useMemo(
    () =>
      navItems.map((item) => ({
        href: item.href,
        label: item.label[language],
      })),
    [language],
  );

  const syncActiveFromLocation = useCallback(() => {
    if (typeof window === "undefined") return;

    if (pathname !== "/") {
      setActiveHref(pathname.startsWith("/work/") ? "/#work" : "/#contact");
      return;
    }

    const currentHash = window.location.hash || "#work";
    const matchingItem = navItems.find((item) => item.href.endsWith(currentHash));
    setActiveHref(matchingItem?.href ?? "/#work");
  }, [pathname]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(syncActiveFromLocation);
    window.addEventListener("hashchange", syncActiveFromLocation);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", syncActiveFromLocation);
    };
  }, [syncActiveFromLocation]);

  useEffect(() => {
    if (pathname !== "/") {
      return undefined;
    }

    const sections = navItems
      .map((item) => {
        const id = item.href.replace("/#", "");
        return document.getElementById(id);
      })
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        const currentEntry = visibleEntries[0];
        if (!currentEntry) return;

        const currentHref = `/#${currentEntry.target.id}`;
        setActiveHref((previous) =>
          previous === currentHref ? previous : currentHref,
        );
      },
      {
        rootMargin: "-26% 0px -56% 0px",
        threshold: [0.2, 0.4, 0.65],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 880) {
        setIsMenuOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onEscape);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onEscape);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => firstDrawerLinkRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      menuButton?.focus();
    };
  }, [isMenuOpen]);

  const handleNavigate = useCallback((href: string) => {
    setActiveHref(href);
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <header className={styles.root}>
        <div className={styles.shell}>
          <Link href="/" className={styles.brand} aria-label="Homepage">
            {siteConfig.shortName}
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary navigation">
            {menuItems.map((item) => (
              <HeaderNavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={activeHref === item.href}
                onNavigate={handleNavigate}
              />
            ))}
          </nav>

          <div className={styles.desktopControls}>
            <LanguageSwitcher
              language={language}
              onChange={onLanguageChange}
              ariaLabel={copy.languageLabel}
            />
            <ThemeToggle
              theme={theme}
              onToggle={onThemeToggle}
              ariaLabel={copy.themeLabel}
            />
            <Link
              href="/#contact"
              className={styles.cta}
              onClick={() => handleNavigate("/#contact")}
            >
              {copy.headerCta}
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className={styles.menuToggle}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls={drawerId}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className={styles.menuToggleBar} data-open={isMenuOpen} />
            <span className={styles.menuToggleBar} data-open={isMenuOpen} />
            <span className={styles.menuToggleBar} data-open={isMenuOpen} />
          </button>
        </div>
      </header>

      <button
        type="button"
        className={styles.backdrop}
        data-open={isMenuOpen}
        aria-hidden={!isMenuOpen}
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        id={drawerId}
        className={styles.drawer}
        data-open={isMenuOpen}
        aria-hidden={!isMenuOpen}
      >
        <nav className={styles.drawerNav} aria-label="Mobile navigation">
          {menuItems.map((item, index) => (
            <HeaderNavLink
              key={`mobile-${item.href}`}
              href={item.href}
              label={item.label}
              isActive={activeHref === item.href}
              mobile
              onNavigate={handleNavigate}
              linkRef={index === 0 ? firstDrawerLinkRef : undefined}
            />
          ))}
        </nav>

        <div className={styles.drawerControls}>
          <LanguageSwitcher
            language={language}
            onChange={onLanguageChange}
            ariaLabel={copy.languageLabel}
          />
          <ThemeToggle
            theme={theme}
            onToggle={onThemeToggle}
            ariaLabel={copy.themeLabel}
          />
          <Link
            href="/#contact"
            className={styles.cta}
            onClick={() => handleNavigate("/#contact")}
          >
            {copy.headerCta}
          </Link>
        </div>
      </aside>
    </>
  );
}
