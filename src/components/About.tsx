export default function About() {
  return (
    <section
      id="about"
      className="section container about-layout"
      aria-labelledby="about-title"
      tabIndex={-1}
    >
      <div>
        <p className="eyebrow">
          <span>04</span> BEHIND THE TEST CASES
        </p>
        <h2 id="about-title">
          Curious about products.
          <br />
          Careful with the details.
        </h2>
      </div>
      <div className="about-copy">
        <p>
          I enjoy exploring products, finding overlooked issues, and helping
          teams ship software that works well for users.
        </p>
        <p>
          I work closely with developers and designers, and I care about
          practical, clear defect reporting: what happened, how to reproduce it,
          and why it matters to the person using the product.
        </p>
        <div className="signature">
          <span className="signature-mark" aria-hidden="true">
            HS.
          </span>
          <span>
            Muhammad Hassan Sheikh<span>SQA Engineer · Islamabad</span>
          </span>
        </div>
      </div>
    </section>
  );
}
