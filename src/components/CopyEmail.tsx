"use client";
import { useState } from "react";
import { Check, Copy, LoaderCircle } from "lucide-react";
import { profile } from "@/data/portfolio";
export default function CopyEmail() {
  const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");
  async function copy() {
    setStatus("pending");
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }
  return (
    <div className="copy-email">
      <button
        className="copy-button"
        onClick={copy}
        disabled={status === "pending"}
        aria-label="Copy email address"
      >
        <span className="copy-icon" key={status}>
          {status === "success" ? (
            <Check size={16} aria-hidden="true" />
          ) : status === "pending" ? (
            <LoaderCircle
              size={16}
              className="loading-icon"
              aria-hidden="true"
            />
          ) : (
            <Copy size={16} aria-hidden="true" />
          )}
        </span>
        {status === "success"
          ? "Copied"
          : status === "pending"
            ? "Copying…"
            : "Copy email"}
      </button>
      <p role="status" className="copy-feedback">
        {status === "success" ? (
          "Email copied to clipboard."
        ) : status === "error" ? (
          <>
            Couldn’t copy. Select the email address or{" "}
            <a href={`mailto:${profile.email}`}>open your email app</a>.
          </>
        ) : (
          ""
        )}
      </p>
    </div>
  );
}
