"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomeAnimations() {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const outlineDrift = prefersReducedMotion ? 10 : 18;
    const outlineScrub = prefersReducedMotion ? 0.55 : 0.9;
    const bannerTextDrift = prefersReducedMotion ? 28 : 92;
    const bannerTextScrub = prefersReducedMotion ? 0.6 : 1.05;

    const intro = gsap.timeline({
      defaults: { ease: prefersReducedMotion ? "power1.out" : "power3.out" },
    });

    intro.from(".hero-image", {
      autoAlpha: 0,
      y: prefersReducedMotion ? 0 : 20,
      duration: prefersReducedMotion ? 0.42 : 0.7,
    });

    intro.from(
      ".hero-content h1, .hero-content p:not(.hero-symbols), .hero-symbols",
      {
        autoAlpha: 0,
        y: prefersReducedMotion ? 0 : 18,
        duration: prefersReducedMotion ? 0.36 : 0.52,
        stagger: 0.08,
      },
      "-=0.3",
    );

    // Keep nav free of transform so its fixed-position full-screen menu remains anchored to viewport.
    intro.from(
      ".top-mini-nav",
      {
        autoAlpha: 0,
        duration: prefersReducedMotion ? 0.32 : 0.45,
      },
      "-=0.25",
    );

    gsap.utils.toArray<HTMLElement>(".reveal").forEach((section) => {
      gsap.from(section, {
        autoAlpha: 0,
        y: prefersReducedMotion ? 0 : 30,
        duration: prefersReducedMotion ? 0.45 : 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 84%",
          once: true,
        },
      });
    });

    // Keep heavier parallax off for reduced-motion users.
    if (!prefersReducedMotion) {
      // Feature-side chips keep the pronounced asymmetric parallax.
      const featureLeft = document.querySelector<HTMLElement>(".feature-chip.image-sign");
      if (featureLeft) {
        gsap.set(featureLeft, {
          y: 60,
          scale: 1.16,
        });

        gsap.to(featureLeft, {
          y: -180,
          ease: "none",
          scrollTrigger: {
            trigger: ".feature-row",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
            invalidateOnRefresh: true,
          },
        });
      }

      const featureRight = document.querySelector<HTMLElement>(".feature-chip.image-lamp");
      if (featureRight) {
        gsap.set(featureRight, {
          y: 120,
          scale: 1.2,
        });

        gsap.to(featureRight, {
          y: -260,
          ease: "none",
          scrollTrigger: {
            trigger: ".feature-row",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.55,
            invalidateOnRefresh: true,
          },
        });
      }

    }

    // Lunch section: keep image static; move text over it.
    const diningMedia = document.querySelector<HTMLElement>(".full-banner-media.image-dining");
    if (diningMedia) {
      gsap.set(diningMedia, { clearProps: "transform" });
    }

    const diningCopy = document.querySelector<HTMLElement>(".full-banner-content");
    if (diningCopy) {
      gsap.set(diningCopy, { y: bannerTextDrift * 0.55 });

      gsap.to(diningCopy, {
        y: -bannerTextDrift,
        ease: "none",
        scrollTrigger: {
          trigger: ".full-banner",
          start: "top bottom",
          end: "bottom top",
          scrub: bannerTextScrub,
          invalidateOnRefresh: true,
        },
      });
    }

    // Dual marquee motion for each outline band:
    // top line goes left, bottom line goes right on scroll down (reverses on scroll up).
    gsap.utils.toArray<HTMLElement>(".outline-band-dual").forEach((band) => {
      const top = band.querySelector<HTMLElement>(".outline-top");
      const bottom = band.querySelector<HTMLElement>(".outline-bottom");

      if (!top || !bottom) {
        return;
      }

      gsap.to(top, {
        xPercent: -outlineDrift,
        ease: "none",
        scrollTrigger: {
          trigger: band,
          start: "top bottom",
          end: "bottom top",
          scrub: outlineScrub,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(bottom, {
        xPercent: outlineDrift,
        ease: "none",
        scrollTrigger: {
          trigger: band,
          start: "top bottom",
          end: "bottom top",
          scrub: outlineScrub,
          invalidateOnRefresh: true,
        },
      });
    });

    const refreshTriggers = () => ScrollTrigger.refresh();
    window.addEventListener("load", refreshTriggers);
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("load", refreshTriggers);
    };
  });

  return null;
}
