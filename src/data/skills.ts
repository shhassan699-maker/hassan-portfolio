export interface SkillBar {
  name: string
  percent: number
}

export interface SkillCategory {
  title: string
  icon: string
  type: 'bars' | 'tags'
  skills?: SkillBar[]
  tags?: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Testing & QA",
    icon: "⚙️",
    type: "bars",
    skills: [
      { name: "Manual Testing", percent: 95 },
      { name: "Exploratory Testing", percent: 90 },
      { name: "API Testing (Postman)", percent: 88 },
      { name: "Test Case Writing", percent: 92 },
      { name: "Bug Reporting", percent: 93 },
    ]
  },
  {
    title: "Tools & Automation",
    icon: "🔧",
    type: "bars",
    skills: [
      { name: "Jira", percent: 85 },
      { name: "Cypress", percent: 75 },
      { name: "JMeter", percent: 78 },
      { name: "OWASP ZAP", percent: 72 },
      { name: "Firebase Test Lab", percent: 82 },
    ]
  },
  {
    title: "Methodologies & Other",
    icon: "📋",
    type: "tags",
    tags: [
      "Agile", "Scrum", "SDLC", "STLC",
      "Regression Testing", "Usability Testing",
      "Mobile Testing", "Web Testing",
      "AI/ML Testing", "Firebase Crashlytics",
      "iOS Testing", "Android Testing"
    ]
  }
]