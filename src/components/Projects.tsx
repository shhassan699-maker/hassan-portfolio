import { ArrowDown, ArrowRight } from "lucide-react";
import { projects, additionalProducts } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import ProjectModal from "./ProjectModal";
export default function Projects() {
  return (
    <section
      id="work"
      className="section container"
      aria-label="Selected testing work"
      tabIndex={-1}
    >
      <SectionHeading
        number="01"
        label="SELECTED WORK"
        title="Real products. Thoughtful testing."
        description="A closer look at the journeys I test and the details I pay attention to."
      />
      <div className="project-list">
        {projects.map((project, index) => (
          <article
            key={project.id}
            id={`project-${project.id}`}
            tabIndex={-1}
            aria-labelledby={`project-heading-${project.id}`}
            className={`project-row project-${project.id}`}
          >
            <div className="project-meta">
              <span className="project-number">0{index + 1}</span>
              <span className="mini-label">{project.category}</span>
              <h3 id={`project-heading-${project.id}`}>{project.name}</h3>
              <p>{project.platform}</p>
            </div>
            <div className="project-copy">
              <p className="project-role">{project.role}</p>
              <h4>{project.summary}</h4>
              <p>{project.description}</p>
              <ul className="tags">
                {project.focus.map((focus) => (
                  <li key={focus}>{focus}</li>
                ))}
              </ul>
              <ProjectModal project={project} />
            </div>
            <div
              className="coverage-map"
              aria-label={`${project.name} testing focus`}
            >
              <div className="coverage-top">
                <span className="mini-label">TESTING FOCUS</span>
                <span aria-hidden="true">↗</span>
              </div>
              <div className="coverage-flow">
                {project.map.map((item, i) => (
                  <div className="coverage-step" key={item}>
                    <span className="coverage-node">
                      <span className="node-dot" />
                      {item}
                    </span>
                    {i < 2 &&
                      (project.id === "offerlanded" ? (
                        <ArrowRight size={15} aria-hidden="true" />
                      ) : (
                        <ArrowDown size={15} aria-hidden="true" />
                      ))}
                  </div>
                ))}
              </div>
              <div className="coverage-bottom">
                {project.id === "getchatly"
                  ? "Consistency across models & devices"
                  : project.id === "offerlanded"
                    ? "Two perspectives. One shared journey."
                    : "Reliability with privacy in mind"}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="additional-experience">
        <h3>Additional product experience</h3>
        <div>
          <p>Other applications I’ve tested across web and mobile.</p>
          <ul>
            {additionalProducts.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
