export interface Experience {
  id: number
  company: string
  role: string
  date: string
  badge: string
  badgeColor: string
  points: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Ninesol Technologies",
    role: "Software Quality Assurance Engineer",
    date: "April 2025 – Present · Islamabad, Pakistan",
    badge: "Current",
    badgeColor: "cyan",
    points: [
      "Conducted thorough manual testing across web and mobile platforms to ensure product quality.",
      "Utilized Firebase Test Lab to test app behavior across real Android devices, identifying critical bugs.",
      "Monitored app stability and crash reports using Firebase Crashlytics, improving crash-free sessions.",
      "Participated in AI feature testing for chatbots and recommendation engines to validate NLP/ML workflows.",
      "Collaborated with developers and designers to refine test plans on Android and iOS platforms.",
      "Ensured test documentation was updated and aligned with Agile sprint cycles."
    ]
  },
  {
    id: 2,
    company: "Codes Orbit",
    role: "Software Quality Assurance Intern",
    date: "Dec 2024 – March 2025 · 4 Months",
    badge: "Internship",
    badgeColor: "purple",
    points: [
      "Conducted manual testing to identify, document, and report software defects.",
      "Designed and executed test cases to validate software functionality, performance, and reliability.",
      "Performed exploratory testing to uncover hidden defects, edge cases, and usability issues.",
      "Utilized Postman for API testing, ensuring proper request-response cycles and error handling.",
      "Conducted usability, regression, and compatibility testing across multiple devices and platforms.",
      "Collaborated with developers and QA teams to refine test strategies and optimize workflows."
    ]
  }
]