import { expertise } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
export default function Skills() {
  return (
    <section
      id="expertise"
      className="section container"
      aria-label="Expertise"
      tabIndex={-1}
    >
      <SectionHeading
        number="02"
        label="EXPERTISE"
        title="Coverage with purpose."
        description="The methods and tools behind a careful, practical approach to quality."
      />
      <div className="expertise-grid">
        {expertise.map((group, i) => (
          <article className="expertise-item" key={group.title}>
            <span className="expertise-index">0{i + 1} /</span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul className="tool-labels">
              {group.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
