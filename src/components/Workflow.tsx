"use client";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ScanLine,
  CheckCheck,
  FileText,
  RotateCcw,
  Play,
  Pause,
} from "lucide-react";
import { workflow } from "@/data/portfolio";
import { useSlidingIndicator } from "@/hooks/useSlidingIndicator";
import StatePanels from "./StatePanels";
const icons = [ScanLine, CheckCheck, FileText, RotateCcw];
export default function Workflow() {
  const [selected, setSelected] = useState(0);
  const [walkthrough, setWalkthrough] = useState<
    "idle" | "playing" | "paused" | "complete"
  >("idle");
  const [feedback, setFeedback] = useState("");
  const { group, indicator } = useSlidingIndicator(selected);
  useEffect(() => {
    if (walkthrough !== "playing") return;
    const timer = window.setTimeout(() => {
      if (selected === workflow.length - 1) {
        setWalkthrough("complete");
        setFeedback("Walkthrough complete. Explore any step.");
      } else setSelected(selected + 1);
    }, 1800);
    return () => window.clearTimeout(timer);
  }, [selected, walkthrough]);
  function select(index: number) {
    setSelected(index);
    setWalkthrough("idle");
    setFeedback("");
  }
  function play() {
    if (walkthrough === "playing") {
      setWalkthrough("paused");
      setFeedback("Walkthrough paused.");
    } else {
      if (walkthrough !== "paused") setSelected(0);
      setWalkthrough("playing");
      setFeedback("Illustrative walkthrough playing.");
    }
  }
  function reset() {
    setSelected(0);
    setWalkthrough("idle");
    setFeedback("Walkthrough reset to Explore.");
  }
  return (
    <div className="workflow-panel">
      <div className="panel-top">
        <span className="eyebrow">THE QUALITY LOOP</span>
        <span className="mini-label">MY PROCESS</span>
      </div>
      <div
        ref={group}
        className="workflow-steps"
        role="group"
        aria-label="Explore my QA workflow"
      >
        <svg
          className="workflow-path"
          viewBox="0 0 2 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M1 0V100" pathLength="100" className="path-base" />
          <path
            d="M1 0V100"
            pathLength="100"
            className="path-progress"
            style={{ strokeDashoffset: 100 - (selected / 3) * 100 }}
          />
        </svg>
        <span
          ref={indicator}
          className="sliding-indicator workflow-indicator"
          aria-hidden="true"
        />
        {workflow.map((item, index) => {
          const Icon = icons[index];
          return (
            <div className="workflow-step" key={item.title}>
              <button
                data-option
                className={selected === index ? "selected" : ""}
                aria-pressed={selected === index}
                aria-controls="workflow-explanation"
                onFocus={() => select(index)}
                onClick={() => select(index)}
              >
                <span className="step-icon">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="step-text">
                  <strong>{item.title}</strong>
                  <span>{item.subtitle}</span>
                </span>
                <span className="step-index">0{index + 1}</span>
                <ArrowUpRight
                  className="step-arrow"
                  size={16}
                  aria-hidden="true"
                />
              </button>
              {index < 3 && (
                <ArrowDown
                  className="step-connector"
                  size={14}
                  aria-hidden="true"
                />
              )}
            </div>
          );
        })}
      </div>
      <div
        id="workflow-explanation"
        className="workflow-explanation"
        aria-live={walkthrough === "playing" ? "off" : "polite"}
        aria-atomic="true"
      >
        <StatePanels selected={selected}>
          {workflow.map((step) => (
            <div key={step.title} className="panel-transition">
              <p>{step.detail}</p>
              <div className="workflow-output">
                <span className="mini-label">OUTPUT</span>
                <span>{step.output}</span>
              </div>
            </div>
          ))}
        </StatePanels>
      </div>
      <div className="walkthrough-controls">
        <button
          className="small-control"
          onClick={play}
          aria-controls="workflow-explanation"
        >
          {walkthrough === "playing" ? (
            <Pause size={13} aria-hidden="true" />
          ) : (
            <Play size={13} aria-hidden="true" />
          )}
          {walkthrough === "playing"
            ? "Pause walkthrough"
            : walkthrough === "paused"
              ? "Resume walkthrough"
              : "Play walkthrough"}
        </button>
        <button className="small-control reset-control" onClick={reset}>
          <RotateCcw size={12} aria-hidden="true" />
          Reset
        </button>
      </div>
      <p className="workflow-hint">
        Illustrative process · Select any step to explore.
      </p>
      <p className="walkthrough-feedback" role="status">
        {feedback}
      </p>
    </div>
  );
}
