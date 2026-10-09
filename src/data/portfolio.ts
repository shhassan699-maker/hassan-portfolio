// Professional facts verified against Downloads/Hassan SQA .pdf.
// Examples below are explicitly illustrative; no outcomes or defects are claimed.
export const profile = {
  name: "Muhammad Hassan Sheikh",
  title: "SQA Engineer",
  location: "Islamabad, Pakistan",
  email: "Shhassan699@gmail.com",
  phone: "+92 335 5774061",
  phoneHref: "tel:+923355774061",
  linkedin: "https://www.linkedin.com/in/hassan-sheikh-1a2b72185",
  resume: "/hassan-sheikh-resume.pdf",
};

export const projects = [
  {
    id: "getchatly",
    name: "GetChatly",
    category: "AI chat platform",
    role: "Manual, API & AI-feature testing",
    platform: "Web & mobile",
    summary: "Different models. One coherent experience.",
    description:
      "Testing the connections between AI conversations, model switching, and the subscription journey.",
    context:
      "A centralized AI chat platform bringing multiple models, including GPT-4, GPT-4o, DeepSeek, and Gemini, together under one subscription.",
    scope: [
      "Model-switching behavior and AI response validation",
      "Sign-up, subscriptions, and payment journeys",
      "Chat history and UI consistency across web and mobile",
    ],
    journeys: [
      "Sign up → subscribe → access a chat model",
      "Start a conversation → switch models → review chat history",
    ],
    approach:
      "Manual, API, and AI-feature testing across the subscription journey, model selection, responses, chat history, and the web and mobile interfaces.",
    scenario:
      "Switch models within a conversation, then revisit its history. Check the active model, preserved messages, and clear feedback when a response is delayed.",
    focus: ["Model switching", "Subscriptions", "Chat continuity"],
    map: ["Choose a model", "Validate the response", "Review the history"],
  },
  {
    id: "offerlanded",
    name: "OfferLanded",
    category: "Job & recruitment platform",
    role: "Functional & end-to-end testing",
    platform: "Web & mobile",
    summary: "Every step between searching and hiring.",
    description:
      "Following candidate and employer journeys to check that applications, statuses, and notifications stay consistent.",
    context:
      "A recruitment platform connecting candidates with employers through job discovery, applications, onboarding, and hiring workflows.",
    scope: [
      "Job search, filters, and application flows",
      "Candidate onboarding, offers, and hiring status updates",
      "Notifications and employer dashboards across web and mobile",
    ],
    journeys: [
      "Search → filter → apply for a job",
      "Candidate onboarding → hiring status → employer notification",
    ],
    approach:
      "Functional and end-to-end testing of candidate and employer workflows, checking notifications, dashboard information, and consistency between mobile and web.",
    scenario:
      "Apply to a filtered job listing, then inspect the candidate status and employer dashboard. Check that both views describe the same application state.",
    focus: ["Search & filters", "Application journeys", "Hiring status"],
    map: ["Candidate", "Application status", "Employer"],
  },
  {
    id: "soapsuds",
    name: "SoapSuds",
    category: "Healthcare / telemedicine",
    role: "Functional & security-focused testing",
    platform: "Web & mobile",
    summary: "Careful testing where the details matter.",
    description:
      "Examining consultation flows and sensitive medical information with attention to reliability, integrity, and privacy.",
    context:
      "A healthcare application supporting virtual consultations between patients and doctors, audio recording, automated medicine suggestions, and cloud-stored medical history.",
    scope: [
      "Virtual consultation journeys and audio recording",
      "Automated medicine suggestion workflows",
      "Medical history storage, data integrity, and privacy considerations",
    ],
    journeys: [
      "Start a consultation → record audio → review the consultation",
      "Review medicine suggestions → revisit medical history",
    ],
    approach:
      "Functional and security-focused testing of consultations, recording, medicine suggestion workflows, and medical history, with particular attention to sensitive patient data.",
    scenario:
      "Review a consultation recording and revisit the associated history. Check that the record belongs to the correct patient and is accessible only to the intended user.",
    focus: ["Consultations", "Audio recording", "Data integrity"],
    map: ["Consultation", "Recording & suggestions", "Medical history"],
  },
];
export type Project = (typeof projects)[number];

export const additionalProducts = [
  "Flight Tracker",
  "AI Transcribe",
  "PDF Printer",
  "Time Warp Scan",
  "Passport Photo Maker",
  "Deen",
  "Moto Rider & Driver",
  "Artostream",
  "Ezy Captures",
  "FalkonData",
];

export const expertise = [
  {
    title: "Web & Mobile Quality",
    description:
      "Validate real user journeys across web, Android, and iOS through manual, exploratory, functional, regression, usability, compatibility, and smoke testing.",
    tools: ["Android & iOS", "Firebase Test Lab", "Firebase Crashlytics"],
  },
  {
    title: "API & Automation",
    description:
      "Check request and response behavior, error handling, and the connections between interfaces and services. Use JavaScript with Cypress for browser automation.",
    tools: ["Postman", "Cypress", "JavaScript"],
  },
  {
    title: "Performance & Security",
    description:
      "Examine application behavior under load and explore security concerns, with attention to sensitive data and the reliability of user-facing workflows.",
    tools: ["JMeter", "OWASP ZAP"],
  },
  {
    title: "Test Design & Delivery",
    description:
      "Turn requirements and edge cases into clear test plans, test cases, and actionable bug reports. Track defects and collaborate with developers and designers in Agile teams.",
    tools: ["Jira", "Git", "Agile / Scrum", "SDLC / STLC"],
  },
];

export const experiences = [
  {
    company: "Ninesol Technologies",
    organization: "ninesol" as const,
    role: "Software Quality Assurance Engineer",
    start: "2025-03",
    end: null,
    dates: "March 2025 — Present",
    points: [
      "Manual testing across more than ten web, Android, and iOS applications.",
      "Android device testing with Firebase Test Lab and stability monitoring with Firebase Crashlytics.",
      "AI-feature testing across chatbots, transcription, and recommendation workflows.",
      "Test cases, test plans, and bug reports in Jira; close collaboration with developers and designers in Agile teams.",
    ],
  },
  {
    company: "Codes Orbit",
    organization: "codesOrbit" as const,
    role: "Software Quality Assurance Intern",
    start: "2024-12",
    end: "2025-03",
    dates: "December 2024 — March 2025",
    points: [
      "Manual and exploratory testing, with test case design and execution.",
      "API validation in Postman, including request-response behavior and error handling.",
      "Usability, regression, and compatibility testing across devices and platforms.",
      "Collaboration with developers and QA colleagues to improve testing workflows.",
    ],
  },
];

export const workflow = [
  {
    title: "Explore",
    subtitle: "Understand the journey",
    detail:
      "Walk through the product as a user. Map the important journeys, question assumptions, and look for overlooked edge cases.",
    output: "User journeys & risks",
  },
  {
    title: "Validate",
    subtitle: "Make expectations explicit",
    detail:
      "Translate requirements into test cases. Check expected behavior across interfaces, devices, APIs, and less obvious inputs.",
    output: "Clear test coverage",
  },
  {
    title: "Report",
    subtitle: "Make an issue actionable",
    detail:
      "Document reproducible steps, expected and actual behavior, and useful evidence so the team can investigate the issue.",
    output: "Actionable bug reports",
  },
  {
    title: "Retest",
    subtitle: "Close the loop",
    detail:
      "Verify the fix against the original case, then check related journeys for regressions before closing the issue.",
    output: "Fix verification & regression checks",
  },
];

export const scenarios = [
  {
    id: "valid",
    name: "Alex",
    email: "alex@example.com",
    action: "Submit once",
    nameMessage: "Required name supplied",
    emailMessage: "Expected: accepted email format",
    label: "Valid input",
    input: "Name: Alex · Email: alex@example.com\nAction: submit once",
    expected:
      "Accept the required details and advance to the order review step.",
    assertion: "expect(reviewStep.visible).toEqual(true)",
    why: "The main journey should work before exploring its boundaries.",
    annotation: "Happy path",
  },
  {
    id: "missing",
    name: "",
    email: "alex@example.com",
    action: "Submit",
    nameMessage: "Expected: Name is required",
    emailMessage: "Preserve the supplied email",
    label: "Missing required field",
    input: "Name: empty · Email: alex@example.com\nAction: submit",
    expected:
      "Stay on this step, identify the missing name, and move focus to the field.",
    assertion: 'expect(nameField.error).toEqual("Name is required")',
    why: "Clear, local feedback helps people recover without losing their other input.",
    annotation: "Required field",
  },
  {
    id: "email",
    name: "Alex",
    email: "alex@",
    action: "Submit",
    nameMessage: "Preserve the supplied name",
    emailMessage: "Expected: Enter a valid email address",
    label: "Invalid email",
    input: "Name: Alex · Email: alex@\nAction: submit",
    expected:
      "Show an accessible email validation message and preserve the entered details.",
    assertion: "expect(emailField.valid).toEqual(false)",
    why: "Invalid contact details should be caught before a user continues.",
    annotation: "Input boundary",
  },
  {
    id: "repeat",
    name: "Alex",
    email: "alex@example.com",
    action: "Activate submit twice quickly",
    nameMessage: "Required name supplied",
    emailMessage: "Expected: prevent duplicate processing",
    label: "Repeated submission",
    input:
      "Name: Alex · Email: alex@example.com\nAction: activate submit twice quickly",
    expected:
      "Prevent duplicate processing and show a clear pending state until the first submission completes.",
    assertion: "expect(createdOrders.count).toEqual(1)",
    why: "A repeated action should not create duplicate orders or unexpected charges.",
    annotation: "Duplicate prevention",
  },
];
