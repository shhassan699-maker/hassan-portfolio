import { experiences } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import OrganizationLogo from "./OrganizationLogo";
import { GraduationCap } from "lucide-react";
export default function Experience() {
  return (
    <section
      id="experience"
      className="section experience-section"
      aria-label="Experience and education"
      tabIndex={-1}
    >
      <div className="container">
        <SectionHeading
          number="03"
          label="EXPERIENCE"
          title="Learning through real releases."
        />
        <div className="experience-list">
          {experiences.map((item) => (
            <article className="experience-row" key={item.company}>
              <div className="experience-date">
                <span className="timeline-dot" />
                <p>{item.dates}</p>
                <span>Islamabad, Pakistan</span>
                {!item.end && (
                  <span className="current-label">Current role</span>
                )}
              </div>
              <div className="experience-content">
                <OrganizationLogo organization={item.organization} />
                <h3>{item.company}</h3>
                <p className="experience-role">{item.role}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="education">
          <div className="education-label">
            <GraduationCap size={20} aria-hidden="true" />
            <span className="mini-label">EDUCATION</span>
          </div>
          <div>
            <OrganizationLogo organization="iqra" />
            <h3>Iqra University</h3>
            <p>Bachelor of Science in Software Engineering</p>
          </div>
          <p className="education-date">
            February 2021 — February 2025<span>Islamabad, Pakistan</span>
          </p>
        </div>
      </div>
    </section>
  );
}
