"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ResumeLink from "./ResumeLink";
import { useSlidingIndicator } from "@/hooks/useSlidingIndicator";
const links = [
  { id: "work", label: "Work" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const pendingNavigation = useRef<string | null>(null);
  const focusFrame = useRef(0);
  const { group, indicator } = useSlidingIndicator(
    links.findIndex((link) => link.id === active),
    true,
  );
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    let frame = 0;
    const update = () => {
      setScrolled(window.scrollY > 12);
      if (
        window.scrollY > 0 &&
        window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 4
      ) {
        pendingNavigation.current = null;
        setActive("contact");
        return;
      }
      if (pendingNavigation.current) {
        const destination = document.getElementById(pendingNavigation.current);
        const top = destination?.getBoundingClientRect().top;
        if (top !== undefined && top >= 0 && top <= 160)
          pendingNavigation.current = null;
        else return;
      }
      const ids = links.filter(({ id }) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= 160;
      });
      setActive(ids.at(-1)?.id ?? "");
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const cancelNavigation = () => {
      pendingNavigation.current = null;
      schedule();
    };
    const cancelOnKey = (event: KeyboardEvent) => {
      if (
        ["PageDown", "PageUp", "Home", "End", "ArrowDown", "ArrowUp"].includes(
          event.key,
        )
      )
        cancelNavigation();
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("wheel", cancelNavigation, { passive: true });
    window.addEventListener("touchstart", cancelNavigation, { passive: true });
    window.addEventListener("keydown", cancelOnKey);
    update();
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(focusFrame.current);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("wheel", cancelNavigation);
      window.removeEventListener("touchstart", cancelNavigation);
      window.removeEventListener("keydown", cancelOnKey);
    };
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeDesktop = () => {
      if (window.innerWidth >= 760) setOpen(false);
    };
    const closeOutside = (event: PointerEvent | FocusEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target))
        setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("focusin", closeOutside);
    window.addEventListener("resize", closeDesktop);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("focusin", closeOutside);
      window.removeEventListener("resize", closeDesktop);
    };
  }, [open]);
  function navigate(id: string) {
    cancelAnimationFrame(focusFrame.current);
    pendingNavigation.current = id;
    setOpen(false);
    setActive(id);
    if (pathname === "/")
      focusFrame.current = requestAnimationFrame(() =>
        document.getElementById(id)?.focus({ preventScroll: true }),
      );
  }
  return (
    <header ref={header} className="site-header" data-scrolled={scrolled}>
      <nav className="container nav-inner" aria-label="Main navigation">
        <Link
          href="/"
          className="identity"
          aria-label="Muhammad Hassan Sheikh, home"
          onClick={() => {
            pendingNavigation.current = null;
            setOpen(false);
          }}
        >
          <span className="monogram">
            HS<span>.</span>
          </span>
          <span className="identity-name">
            Hassan Sheikh<span>SQA Engineer</span>
          </span>
        </Link>
        <div ref={group} className="desktop-links">
          <span
            ref={indicator}
            className="sliding-indicator nav-indicator"
            aria-hidden="true"
          />
          {links.map((link) => (
            <a
              data-option
              key={link.id}
              href={`/#${link.id}`}
              onClick={() => navigate(link.id)}
              aria-current={active === link.id ? "location" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <ResumeLink className="nav-resume">Resume</ResumeLink>
          <button
            ref={menuButton}
            className="icon-button menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            <span className="menu-icon" key={String(open)}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </span>
          </button>
        </div>
        <div
          id="mobile-navigation"
          className="mobile-links"
          hidden={!open}
          aria-hidden={!open}
          inert={!open}
        >
          <p className="mini-label mobile-navigation-label">EXPLORE THE PORTFOLIO</p>
          {links.map((link, index) => (
            <a
              key={link.id}
              href={`/#${link.id}`}
              onClick={() => navigate(link.id)}
              aria-current={active === link.id ? "location" : undefined}
            >
              <span className="mobile-link-number" aria-hidden="true">0{index + 1}</span>
              <span>{link.label}</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
