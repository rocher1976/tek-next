"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ParallaxHero() {
  const pathname = usePathname();

  useEffect(() => {
    // Parallax effect for hero backgrounds (home + other pages)
    const parallaxSections = Array.from(
      document.querySelectorAll(".hero-mining, .page-hero")
    );
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (parallaxSections.length && !prefersReducedMotion) {
      let ticking = false;

      function updateParallax() {
        const y = window.scrollY * 0.3; // smaller factor = slower movement
        parallaxSections.forEach((el) => {
          // Position center of image at one-third from bottom (66.67%)
          if (y === 0) {
            el.style.backgroundPosition = "center 66.67%";
          } else {
            el.style.backgroundPosition = `center calc(66.67% ${
              y > 0 ? `- ${y}px` : `+ ${Math.abs(y)}px`
            })`;
          }
        });
        ticking = false;
      }

      function onScroll() {
        if (!ticking) {
          window.requestAnimationFrame(updateParallax);
          ticking = true;
        }
      }

      // Initial position and listener
      updateParallax();
      window.addEventListener("scroll", onScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, [pathname]);

  return null;
}

