"use client";
import { useLayoutEffect, useRef } from "react";

// Measures once per selection/resize; movement itself is a CSS transform.
export function useSlidingIndicator(selected: number, underline = false) {
  const group = useRef<HTMLDivElement>(null);
  const indicator = useRef<HTMLSpanElement>(null);
  useLayoutEffect(() => {
    const parent = group.current;
    const marker = indicator.current;
    if (!parent || !marker) return;
    const measure = () => {
      const target =
        parent.querySelectorAll<HTMLElement>("[data-option]")[selected];
      if (!target) {
        marker.removeAttribute("data-ready");
        return;
      }
      const bounds = parent.getBoundingClientRect();
      const box = target.getBoundingClientRect();
      marker.style.width = `${box.width}px`;
      marker.style.height = underline ? "2px" : `${box.height}px`;
      marker.style.transform = `translate3d(${box.left - bounds.left}px, ${box.top - bounds.top + (underline ? box.height - 2 : 0)}px, 0)`;
      marker.setAttribute("data-ready", "true");
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(parent);
    parent
      .querySelectorAll<HTMLElement>("[data-option]")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [selected, underline]);
  return { group, indicator };
}
