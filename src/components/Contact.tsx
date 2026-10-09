import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import ResumeLink from "./ResumeLink";
import CopyEmail from "./CopyEmail";
export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
      tabIndex={-1}
    >
      <div className="container">
        <p className="eyebrow">
          <span>05</span> START A CONVERSATION
        </p>
        <div className="contact-layout">
          <div>
            <h2 id="contact-title">
              Let’s build confidence
              <br />
              in your next release.
            </h2>
            <p>
              Have a product to discuss or a quality challenge to explore?
              <br className="desktop-break" /> I’d be glad to connect.
            </p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              <Mail className="email-symbol" aria-hidden="true" size={23} />
              <span><small>EMAIL ME</small>{profile.email}</span>
              <ArrowUpRight aria-hidden="true" size={24} />
            </a>
            <CopyEmail />
          </div>
          <div className="contact-aside">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
              <ArrowUpRight size={18} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <ResumeLink className="contact-resume">Download resume</ResumeLink>
            <a href={profile.phoneHref} className="contact-phone">
              {profile.phone}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <p>Based in Islamabad, Pakistan.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
