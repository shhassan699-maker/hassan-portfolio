import { ImageResponse } from "next/og";
export const alt =
  "Muhammad Hassan Sheikh — SQA Engineer. Software quality, examined from every angle.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#faf9f6",
        width: "100%",
        height: "100%",
        padding: "64px 80px",
        display: "flex",
        flexDirection: "column",
        color: "#252b29",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 22 }}
      >
        <span
          style={{
            background: "#18574e",
            color: "#faf9f6",
            padding: "14px",
            borderRadius: 8,
            fontWeight: 700,
          }}
        >
          HS.
        </span>
        <span>MUHAMMAD HASSAN SHEIKH · SQA ENGINEER</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          fontWeight: 700,
          letterSpacing: "-3px",
          lineHeight: 1.1,
          marginTop: 60,
        }}
      >
        <span>Software quality,</span>
        <span>examined from</span>
        <span style={{ color: "#18574e" }}>every angle.</span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 22,
          marginTop: "auto",
          color: "#606762",
        }}
      >
        Web & mobile / API validation / AI-feature testing · Islamabad, Pakistan
      </div>
    </div>,
    size,
  );
}
