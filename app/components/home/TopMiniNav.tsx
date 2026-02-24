"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import SiteLogo from "./SiteLogo";

const THEME_STORAGE_KEY = "patamu-theme";

type ThemeMode = "dark" | "light";

const navLinks = [
  { href: "#welcome", label: "Welcome" },
  { href: "#restaurant", label: "Restaurant" },
  { href: "#accommodation", label: "Stay" },
  { href: "#contact", label: "Contact" },
];

export default function TopMiniNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const navRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const floatingControlsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMounted(true);

    const root = document.documentElement;
    const initialTheme: ThemeMode = root.dataset.theme === "light" ? "light" : "dark";
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        navRef.current?.contains(target) ||
        panelRef.current?.contains(target) ||
        floatingControlsRef.current?.contains(target)
      ) {
        return;
      }

      setIsOpen(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage failures (private mode/restrictions).
    }
  }, [theme, isMounted]);

  const switchTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  const nextThemeLabel = theme === "light" ? "Dark" : "Light";
  const nextThemeAriaLabel = theme === "light" ? "Switch to dark mode" : "Switch to light mode";

  return (
    <>
      <nav className={`top-mini-nav${isOpen ? " is-open" : ""}`} aria-label="Primary" ref={navRef}>
        <div className="top-mini-nav__controls">
          <button
            className="top-mini-nav__theme-toggle"
            type="button"
            aria-label={nextThemeAriaLabel}
            aria-pressed={theme === "light"}
            onClick={switchTheme}
          >
            <span className="top-mini-nav__text">{nextThemeLabel}</span>
          </button>

          <button
            className={`top-mini-nav__toggle top-mini-nav__toggle--anchor${isOpen ? " is-open" : ""}`}
            type="button"
            aria-expanded={isOpen}
            aria-controls="top-mini-nav-links"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="sr-only">{isOpen ? "Close navigation menu" : "Open navigation menu"}</span>
            <span className="top-mini-nav__icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="top-mini-nav__text">Menu</span>
          </button>
        </div>
      </nav>

      {isMounted &&
        isOpen &&
        createPortal(
          <>
            <div className="top-mini-nav__floating-controls" ref={floatingControlsRef}>
              <button
                className="top-mini-nav__theme-toggle top-mini-nav__theme-toggle--floating"
                type="button"
                aria-label={nextThemeAriaLabel}
                aria-pressed={theme === "light"}
                onClick={switchTheme}
              >
                <span className="top-mini-nav__text">{nextThemeLabel}</span>
              </button>

              <button
                className="top-mini-nav__toggle top-mini-nav__toggle--floating is-open"
                type="button"
                aria-expanded={isOpen}
                aria-controls="top-mini-nav-links"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close navigation menu</span>
                <span className="top-mini-nav__icon" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                <span className="top-mini-nav__text">Menu</span>
              </button>
            </div>

            <div
              className="top-mini-nav__panel is-open"
              id="top-mini-nav-links"
              role="dialog"
              aria-modal="true"
              ref={panelRef}
            >
              <section className="top-mini-nav__left image-chef">
                <SiteLogo className="top-mini-nav__logo top-mini-nav__logo--left" />
                <ul className="top-mini-nav__links">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} onClick={() => setIsOpen(false)}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="top-mini-nav__right">
                <address>
                  Karatu Town
                  <br />
                  Arusha Region
                  <br />
                  Tanzania
                </address>
                <a href="tel:+255620600100">+255 620 600 100</a>
                <a href="mailto:reservations@patamurestaurants.com">reservations@patamurestaurants.com</a>

                <div className="top-mini-nav__social" aria-label="Social links">
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                    Instagram
                  </a>
                  <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                    YouTube
                  </a>
                  <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                    Facebook
                  </a>
                  <a href="mailto:reservations@patamurestaurants.com" aria-label="Email">
                    Email
                  </a>
                </div>

                <a className="top-mini-nav__cta" href="#contact" onClick={() => setIsOpen(false)}>
                  Reserve A Table
                </a>
              </section>
            </div>
          </>,
          document.body,
        )}
    </>
  );
}
