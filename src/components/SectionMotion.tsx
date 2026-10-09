"use client";
import { useEffect } from "react";
export default function SectionMotion() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const setup = () => {
      observer?.disconnect();
      if (preference.matches) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).style.setProperty(
                "--reveal-order",
                String(Math.min(index, 2)),
              );
              entry.target.classList.add("section-entered");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.02, rootMargin: "0px 0px 48px 0px" },
      );
      document
        .querySelectorAll(
          ".section-heading, .project-row, .expertise-item, .experience-row, .about-layout, .demo-intro",
        )
        .forEach((element) => observer?.observe(element));
    };
    setup();
    preference.addEventListener("change", setup);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", setup);
    };
  }, []);
  return null;
}
