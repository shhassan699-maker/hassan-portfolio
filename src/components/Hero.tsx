import { ArrowUpRight, MapPin } from "lucide-react";
import ResumeLink from "./ResumeLink";
import Workflow from "./Workflow";
import { projects } from "@/data/portfolio";
export default function Hero() {
  return (
    <section id="home" className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-label">
          <span className="label-line" /> MUHAMMAD HASSAN SHEIKH · SQA ENGINEER
        </p>
        <h1 id="hero-title">
          Software quality,
          <br />
          examined from
          <br />
          <span>every angle.</span>
        </h1>
        <p className="hero-description">
          I’m Muhammad Hassan Sheikh, an SQA Engineer testing web, mobile, APIs,
          and AI-driven experiences. I turn complex user journeys into clear
          test coverage and actionable bug reports.
        </p>
        <div className="hero-actions">
          <a href="#work" className="button button-primary">
            View selected work
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <ResumeLink />
        </div>
        <p className="location">
          <MapPin size={14} aria-hidden="true" />
          Islamabad, Pakistan
        </p>
      </div>
      <div className="hero-aside">
        <Workflow />
        <p className="aside-caption">
          <span>01 — 04</span> A considered approach, from first exploration to
          final verification.
        </p>
      </div>
      <div className="hero-bottom">
        <div className="work-preview-label">
          <span className="mini-label">SELECTED TESTING WORK</span>
          <p>Three products. Different quality challenges.</p>
        </div>
        <nav className="work-preview-links" aria-label="Jump to a featured project">
          {projects.map((project, index) => (
            <a href={`#project-${project.id}`} key={project.id}>
              <span className="mini-label">0{index + 1}</span>
              <span>{project.name}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
