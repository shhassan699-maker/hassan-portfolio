import type { ReactNode } from "react";

// All panels share a grid cell so the tallest reserves space, including without JS.
// Inactive panels cannot be focused or announced during their visual exit.
export default function StatePanels({
  selected,
  children,
}: {
  selected: number;
  children: ReactNode[];
}) {
  return (
    <div className="state-panels">
      {children.map((child, index) => (
        <div
          key={index}
          className="state-panel"
          data-active={selected === index}
          aria-hidden={selected !== index}
          inert={selected !== index}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
