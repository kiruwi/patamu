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
    const servicesSplitDistance = prefersReducedMotion ? 26 : 130;
    const servicesVerticalShift = prefersReducedMotion ? 8 : 28;
    const isDesktop = window.matchMedia("(min-width: 701px)").matches;

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
      if (section.matches(".menu-split, .stay-intro, .suite-cards-scroll")) {
        return;
      }

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

    // Services transition:
    // as the section scrolls out, left and right columns separate and fade,
    // while the following stay-intro fades in.
    const servicesSection = document.querySelector<HTMLElement>(".menu-split");
    const servicesList = servicesSection?.querySelector<HTMLElement>(".menu-list-wrap");
    const servicesImage = servicesSection?.querySelector<HTMLElement>(".menu-photo");
    const stayIntro = document.querySelector<HTMLElement>(".stay-intro");

    if (servicesSection && servicesList && stayIntro) {
      gsap.fromTo(
        servicesList,
        {
          autoAlpha: 0,
          x: prefersReducedMotion ? 0 : -36,
          y: prefersReducedMotion ? 0 : 14,
        },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          duration: prefersReducedMotion ? 0.4 : 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesSection,
            start: "top 82%",
            once: true,
          },
        },
      );

      if (servicesImage) {
        gsap.fromTo(
          servicesImage,
          {
            autoAlpha: 0,
            x: prefersReducedMotion ? 0 : 36,
            y: prefersReducedMotion ? 0 : 14,
          },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            duration: prefersReducedMotion ? 0.4 : 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: servicesSection,
              start: "top 82%",
              once: true,
            },
          },
        );
      }

      if (isDesktop && servicesImage) {
        gsap.set(stayIntro, {
          autoAlpha: 0,
          y: servicesVerticalShift,
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: servicesSection,
              start: "top top",
              end: prefersReducedMotion ? "+=40%" : "+=75%",
              pin: true,
              pinSpacing: false,
              scrub: prefersReducedMotion ? 0.4 : 0.85,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })
          .to(
            servicesList,
            {
              x: -servicesSplitDistance,
              y: -servicesVerticalShift,
              autoAlpha: 0,
              ease: "none",
            },
            0,
          )
          .to(
            servicesImage,
            {
              x: servicesSplitDistance,
              y: servicesVerticalShift,
              autoAlpha: 0,
              ease: "none",
            },
            0,
          )
          .to(
            stayIntro,
            {
              autoAlpha: 1,
              y: 0,
              ease: "none",
            },
            0.15,
          );
      } else {
        gsap.set(stayIntro, {
          autoAlpha: 0,
          y: servicesVerticalShift,
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: stayIntro,
              start: "top 96%",
              end: "top 56%",
              scrub: prefersReducedMotion ? 0.25 : 0.6,
              invalidateOnRefresh: true,
            },
          })
          .to(
            servicesList,
            {
              y: -servicesVerticalShift,
              autoAlpha: 0.2,
              ease: "none",
            },
            0,
          )
          .to(
            stayIntro,
            {
              autoAlpha: 1,
              y: 0,
              ease: "none",
            },
            0,
          );
      }
    }

    // Suites gallery: pin section and drive a right-to-left horizontal track.
    const suitesSection = document.querySelector<HTMLElement>(".suite-cards-scroll");
    const suitesTrack = suitesSection?.querySelector<HTMLElement>(".suite-track");

    if (suitesSection && suitesTrack) {
      const suitesStart = "center center";
      const maxHorizontalShift = () =>
        Math.max(0, suitesTrack.scrollWidth - suitesSection.clientWidth);

      const getScrollDistance = () => {
        const shift = maxHorizontalShift();
        return shift > 0 ? shift + window.innerHeight * 0.35 : 0;
      };

      gsap.set(suitesTrack, {
        x: 0,
      });

      if (maxHorizontalShift() > 0) {
        gsap.to(suitesTrack, {
          x: () => -maxHorizontalShift(),
          ease: "none",
          scrollTrigger: {
            trigger: suitesSection,
            start: suitesStart,
            end: () => `+=${getScrollDistance()}`,
            pin: true,
            scrub: prefersReducedMotion ? 0.45 : 0.95,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    }

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
      gsap.set(diningMedia, {
        scale: prefersReducedMotion ? 1 : 1.06,
        yPercent: prefersReducedMotion ? 0 : 8,
      });

      gsap.to(diningMedia, {
        scale: 1,
        yPercent: prefersReducedMotion ? 0 : -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".full-banner",
          start: "top bottom",
          end: "bottom top",
          scrub: prefersReducedMotion ? 0.35 : 0.9,
          invalidateOnRefresh: true,
        },
      });
    }

    const diningCopy = document.querySelector<HTMLElement>(".full-banner-content");
    if (diningCopy) {
      gsap.fromTo(
        diningCopy,
        {
          autoAlpha: 0,
          y: prefersReducedMotion ? 0 : 24,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: prefersReducedMotion ? 0.4 : 0.68,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".full-banner",
            start: "top 82%",
            once: true,
          },
        },
      );

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

    const refreshTriggers = () => {
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    const refreshOnPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        refreshTriggers();
      }
    };

    window.addEventListener("load", refreshTriggers);
    window.addEventListener("resize", refreshTriggers);
    window.addEventListener("orientationchange", refreshTriggers);
    window.addEventListener("pageshow", refreshOnPageShow);
    void document.fonts?.ready?.then(refreshTriggers);
    refreshTriggers();

    return () => {
      window.removeEventListener("load", refreshTriggers);
      window.removeEventListener("resize", refreshTriggers);
      window.removeEventListener("orientationchange", refreshTriggers);
      window.removeEventListener("pageshow", refreshOnPageShow);
    };
  }, { dependencies: [] });

  return null;
}
