"use client";
import { useState } from "react";
import { ArrowUpRight, Braces, RotateCcw } from "lucide-react";
import { scenarios } from "@/data/portfolio";
import { useSlidingIndicator } from "@/hooks/useSlidingIndicator";
import StatePanels from "./StatePanels";
export default function QADemo() {
  const [selected, setSelected] = useState(0);
  const [feedback, setFeedback] = useState("");
  const { group, indicator } = useSlidingIndicator(selected);
  function reset() {
    setSelected(0);
    setFeedback("Scenario reset to Valid input.");
  }
  return (
    <section className="demo-section" aria-labelledby="demo-title">
      <div className="container demo-layout">
        <div className="demo-intro">
          <p className="eyebrow">
            <Braces size={17} aria-hidden="true" /> A LITTLE QA THINKING
          </p>
          <h2 id="demo-title">
            One journey.
            <br />
            Different conditions.
          </h2>
          <p>
            A good test looks beyond what happens when everything goes right.
            Explore a QA scenario and see what I’d check.
          </p>
          <span className="demo-badge">Illustrative demo</span>
          <p className="demo-disclaimer">
            A checkout example, with suggested checks. No orders, payments, or
            tests are executed.
          </p>
        </div>
        <div className="scenario-panel">
          <div className="scenario-top">
            <span>Explore a QA scenario</span>
            <span className="mini-label">CHECKOUT / 01</span>
          </div>
          <div
            ref={group}
            className="scenario-options"
            role="group"
            aria-label="Select a checkout test condition"
          >
            <span
              ref={indicator}
              className="sliding-indicator scenario-indicator"
              aria-hidden="true"
            />
            {scenarios.map((item, i) => (
              <button
                data-option
                key={item.id}
                aria-pressed={selected === i}
                aria-controls="scenario-detail"
                className={selected === i ? "selected" : ""}
                onClick={() => {
                  setSelected(i);
                  setFeedback("");
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div id="scenario-detail" aria-live="polite" aria-atomic="true">
            <StatePanels selected={selected}>
              {scenarios.map((scenario) => (
                <div
                  key={scenario.id}
                  className="scenario-detail panel-transition"
                >
                  <div className="scenario-input">
                    <span className="mini-label">
                      ILLUSTRATIVE INPUT / ACTION
                    </span>
                    <span className="scenario-annotation">
                      {scenario.annotation}
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </span>
                    <div className="demo-fields">
                      <div
                        className={`demo-field ${scenario.id === "missing" ? "field-attention" : ""}`}
                      >
                        <span className="mini-label">NAME</span>
                        <p
                          className="field-value"
                          aria-describedby={`${scenario.id}-name-message`}
                        >
                          {scenario.name || "(empty)"}
                        </p>
                        <p
                          id={`${scenario.id}-name-message`}
                          className="field-message"
                        >
                          {scenario.nameMessage}
                        </p>
                      </div>
                      <div
                        className={`demo-field ${scenario.id === "email" ? "field-attention" : ""}`}
                      >
                        <span className="mini-label">EMAIL</span>
                        <p
                          className="field-value"
                          aria-describedby={`${scenario.id}-email-message`}
                        >
                          {scenario.email}
                        </p>
                        <p
                          id={`${scenario.id}-email-message`}
                          className="field-message"
                        >
                          {scenario.emailMessage}
                        </p>
                      </div>
                    </div>
                    <p className="demo-input-action">
                      <span className="mini-label">ACTION</span>
                      {scenario.action}
                    </p>
                  </div>
                  <div className="scenario-expectation">
                    <span className="mini-label">EXPECTED BEHAVIOR</span>
                    <p>{scenario.expected}</p>
                  </div>
                  <div className="scenario-assertion">
                    <span className="mini-label">
                      SUGGESTED ASSERTION · PSEUDOCODE
                    </span>
                    <code>{scenario.assertion}</code>
                  </div>
                  <div className="scenario-why">
                    <span className="mini-label">WHY IT MATTERS</span>
                    <p>{scenario.why}</p>
                  </div>
                </div>
              ))}
            </StatePanels>
          </div>
          <div className="scenario-footer">
            <button className="small-control" onClick={reset}>
              <RotateCcw size={13} aria-hidden="true" />
              Reset scenario
            </button>
            <p role="status">{feedback}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
