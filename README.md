# Hassan Sheikh — SQA portfolio

A Next.js App Router portfolio using React, TypeScript, Geist, and a warm neutral / deep teal design. Static sections render on the server; small client components handle navigation, the QA workflow, project dialogs, an illustrative checkout scenario, and clipboard feedback.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Edit content

- `src/data/portfolio.ts` centralizes professional facts, featured products, expertise, experience, workflow explanations, and illustrative scenarios.
- `src/data/organizations.ts` defines locally hosted employer and university logos; `public/brands/SOURCES.md` records their official sources.
- `src/app/globals.css` contains the design tokens and responsive styles.
- The hero's project shortcuts link directly to keyboard-focusable work entries. Project dialogs keep close and previous/next controls visible while their content scrolls, support a full keyboard focus loop, and reopen at the originally selected project.
- Mobile navigation dismisses on Escape, an outside tap, focus leaving the header, or a switch to the desktop layout.
- `src/app/motion.css` defines shared entrances, sliding indicators, fixed-size panel transitions, and reduced-motion overrides. Feedback uses 180ms, state changes 260ms, entrances 560ms, and staggers 75ms; the hero sequence finishes in 860ms.
- The illustrative workflow walkthrough runs once when requested, with pause, resume, and reset controls. The checkout demo associates its sample fields with expected validation notes and preserves panel height between conditions.
- `public/hassan-sheikh-resume.pdf` is an unchanged copy of the supplied `Hassan SQA .pdf`. Replace it at this stable path when updating the resume.
- Legacy `/projects`, `/skills`, `/experience`, `/about`, and `/contact` routes redirect to their corresponding home-page sections.

Content is verified against the supplied resume. Product diagrams represent testing focus, not product screenshots. Project examples and the checkout demonstration are labeled illustrative; they do not execute tests or claim real defects. No project-specific tools are attributed where the resume does not identify them.

Contact uses real email, telephone, and LinkedIn links. Clipboard success is only shown after a successful browser write. There is no contact backend or simulated form submission.

The LinkedIn destination is the PDF's embedded hyperlink (`hassan-sheikh-1a2b72185`), which differs from its shorter printed label.

## Validate

```sh
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

Browser checks start a local production server on port 3001 and cover 360, 390, 768, and 1440px layouts, overflow, WCAG A/AA checks with axe, mobile navigation, keyboard focus, native dialog behavior, reduced motion, clipboard success/failure, all PDF download links, legacy routes, and metadata assets. Full-page screenshots are written to ignored `test-results/`. `PLAYWRIGHT_EXECUTABLE_PATH` can select an existing Chromium executable.

The production dependency audit is clean. Five development-only advisories remain in the `braces` / `micromatch` dependency chain used by the Next.js ESLint plugin. The audit's forced downgrade would install an incompatible Next.js 14 lint configuration; it has not been applied.

## Deployment configuration

No external deployment is performed by this redesign. Set `SITE_URL` to the actual public origin when deploying so social preview image URLs resolve to the public website. On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` is used automatically when available. Without a deployment URL, Next.js uses its local origin for development previews. The social image and initials favicon are generated from verified portfolio content.
