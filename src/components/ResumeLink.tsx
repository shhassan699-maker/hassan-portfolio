import { ArrowDownToLine } from "lucide-react";
import { profile } from "@/data/portfolio";
export default function ResumeLink({
  className = "button button-secondary",
  children = "Download resume",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      className={className}
      href={profile.resume}
      download="hassan-sheikh-resume.pdf"
    >
      {children}
      <ArrowDownToLine size={16} aria-hidden="true" />
    </a>
  );
}
