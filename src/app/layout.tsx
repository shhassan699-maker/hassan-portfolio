import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionMotion from "@/components/SectionMotion";
import "./globals.css";
import "./motion.css";
const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
const title = "Muhammad Hassan Sheikh — SQA Engineer";
const description =
  "SQA Engineer in Islamabad, Pakistan. Testing web, Android, iOS, APIs, and AI-driven experiences with thoughtful test coverage and actionable bug reports.";
// Set the actual deployment origin when deploying; never assume a public domain.
const siteOrigin =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);
export const metadata: Metadata = {
  ...(siteOrigin ? { metadataBase: new URL(siteOrigin) } : {}),
  title: { default: title, template: "%s — Hassan Sheikh" },
  description,
  authors: [{ name: "Muhammad Hassan Sheikh" }],
  keywords: [
    "SQA Engineer",
    "Software Quality Assurance",
    "Manual Testing",
    "API Testing",
    "Mobile QA",
    "Islamabad",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: "Hassan Sheikh · SQA Engineer",
  },
  twitter: { card: "summary_large_image", title, description },
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Extensions may add attributes to html before hydration. Suppression is
    // limited to this element; mismatches in portfolio content still warn.
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Navbar />
        {children}
        <Footer />
        <SectionMotion />
      </body>
    </html>
  );
}
