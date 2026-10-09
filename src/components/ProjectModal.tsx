"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
export default function ProjectModal({
  project: initialProject,
}: {
  project: Project;
}) {
  const initialIndex = projects.findIndex((item) => item.id === initialProject.id);
  const [selected, setSelected] = useState(initialIndex);
  const [announcement, setAnnouncement] = useState("");
  const project = projects[selected];
  const dialog = useRef<HTMLDialogElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef("");
  const exitAnimation = useRef<Animation | null>(null);
  useEffect(() => {
    const element = dialog.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finish = () => {
      if (preference.matches) exitAnimation.current?.finish();
    };
    preference.addEventListener("change", finish);
    return () => {
      preference.removeEventListener("change", finish);
      exitAnimation.current?.cancel();
      if (element?.open)
        document.body.style.overflow = previousOverflow.current;
    };
  }, []);
  function close() {
    const element = dialog.current;
    if (!element?.open || exitAnimation.current) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !element.animate
    ) {
      element.close();
      return;
    }
    const currentStyle = getComputedStyle(element);
    const duration =
      parseFloat(currentStyle.getPropertyValue("--motion-state")) || 240;
    const easing = currentStyle.getPropertyValue("--ease").trim();
    element.dataset.closing = "true";
    const animation = element.animate(
      [
        { opacity: currentStyle.opacity, transform: currentStyle.transform },
        { opacity: 0, transform: "translateY(8px)" },
      ],
      { duration, easing, fill: "forwards" },
    );
    exitAnimation.current = animation;
    animation.finished
      .then(() => {
        element.close();
        animation.cancel();
        exitAnimation.current = null;
      })
      .catch(() => {
        exitAnimation.current = null;
      });
  }
  function open() {
    setSelected(initialIndex);
    setAnnouncement("");
    if (body.current) body.current.scrollTop = 0;
    previousOverflow.current = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
  }
  function browse(direction: -1 | 1) {
    const index = (selected + direction + projects.length) % projects.length;
    setSelected(index);
    setAnnouncement(
      `${projects[index].name}. Project ${index + 1} of ${projects.length}.`,
    );
    if (body.current) body.current.scrollTop = 0;
  }
  function cleanup() {
    dialog.current?.removeAttribute("data-closing");
    document.body.style.overflow = previousOverflow.current;
    trigger.current?.focus({ preventScroll: true });
  }
  return (
    <>
      <button
        className="text-action"
        ref={trigger}
        onClick={open}
        aria-haspopup="dialog"
      >
        Explore testing approach
        <ArrowUpRight size={16} aria-hidden="true" />
      </button>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby={`${initialProject.id}-title`}
        onClose={cleanup}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = Array.from(
            event.currentTarget.querySelectorAll<HTMLElement>(
              'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
            ),
          ).filter((element) => element.getClientRects().length > 0);
          const first = controls[0];
          const last = controls.at(-1);
          if (!first) {
            event.preventDefault();
            return;
          }
          if (
            event.shiftKey &&
            (document.activeElement === first ||
              document.activeElement === event.currentTarget)
          ) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const rect = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < rect.left ||
              event.clientX > rect.right ||
              event.clientY < rect.top ||
              event.clientY > rect.bottom
            )
              close();
          }
        }}
      >
        <div className="dialog-top">
          <div>
            <span className="eyebrow">SELECTED WORK / TESTING APPROACH</span>
            <span className="dialog-count">
              0{selected + 1} <span>/ 0{projects.length}</span>
            </span>
          </div>
          <button
            className="icon-button"
            aria-label="Close project details"
            autoFocus
            onClick={close}
          >
            <X size={22} />
          </button>
        </div>
        <div
          className="dialog-body"
          ref={body}
          tabIndex={0}
          role="region"
          aria-label="Project detail content"
        >
          <div className="dialog-content" key={project.id}>
            <h2 id={`${initialProject.id}-title`}>{project.name}</h2>
            <p className="dialog-category">{project.category}</p>
            <p className="dialog-platform">{project.platform}</p>
            <div className="dialog-section">
              <h3>Product context</h3>
              <p>{project.context}</p>
            </div>
            <div className="dialog-section">
              <h3>My role</h3>
              <p>
                {project.role}. My work focused on testing the product and its
                user journeys.
              </p>
            </div>
            <div className="dialog-columns">
              <div className="dialog-section">
                <h3>Verified testing scope</h3>
                <ul>
                  {project.scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="dialog-section">
                <h3>Key user journeys</h3>
                <ul>
                  {project.journeys.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="dialog-section">
              <h3>Testing approach</h3>
              <p>{project.approach}</p>
            </div>
            <div className="illustrative-scenario">
              <span className="mini-label">ILLUSTRATIVE TESTING SCENARIO</span>
              <p>{project.scenario}</p>
              <small>
                An example of how to examine this journey; not a reported defect
                or measured outcome.
              </small>
            </div>
          </div>
        </div>
        <div className="dialog-footer" aria-label="Browse selected projects">
          <button
            className="project-browse"
            onClick={() => browse(-1)}
            aria-label="Previous project"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            <span>
              <small>PREVIOUS PROJECT</small>
              {projects[(selected - 1 + projects.length) % projects.length].name}
            </span>
          </button>
          <button
            className="project-browse"
            onClick={() => browse(1)}
            aria-label="Next project"
          >
            <span>
              <small>NEXT PROJECT</small>
              {projects[(selected + 1) % projects.length].name}
            </span>
            <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
        <p className="sr-only" role="status">
          {announcement}
        </p>
      </dialog>
    </>
  );
}
