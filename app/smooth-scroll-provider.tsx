"use client";

import { useEffect, type ReactNode } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchOrMobile =
      window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(max-width: 700px)").matches;

    // Mobile/touch uses native scrolling to avoid sticky/jumpy behavior
    // with long GSAP scenes in production builds.
    if (prefersReducedMotion || isTouchOrMobile) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    let animationFrame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      animationFrame = window.requestAnimationFrame(raf);
    };

    animationFrame = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
