'use client'

import { useRef, useEffect, useState } from 'react'

interface SkillItem {
  name: string
  percent: number
}

interface SkillCard {
  icon: string
  title: string
  skills?: SkillItem[]
  tags?: string[]
}

const skillCards: SkillCard[] = [
  {
    icon: '⚙️',
    title: 'Testing & QA',
    skills: [
      { name: 'Manual Testing', percent: 95 },
      { name: 'Exploratory Testing', percent: 90 },
      { name: 'API Testing (Postman)', percent: 88 },
      { name: 'Test Case Writing', percent: 92 },
      { name: 'Bug Reporting', percent: 93 },
    ],
  },
  {
    icon: '🔧',
    title: 'Tools & Automation',
    skills: [
      { name: 'Jira', percent: 85 },
      { name: 'Cypress', percent: 75 },
      { name: 'JMeter (Performance)', percent: 78 },
      { name: 'OWASP ZAP (Security)', percent: 72 },
      { name: 'Firebase Test Lab', percent: 82 },
    ],
  },
  {
    icon: '📋',
    title: 'Methodologies & Other',
    tags: [
      'Agile', 'Scrum', 'SDLC', 'STLC',
      'Regression Testing', 'Usability Testing',
      'Mobile Testing', 'Web Testing',
      'AI/ML Testing', 'Firebase Crashlytics',
      'iOS Testing', 'Android Testing',
    ],
  },
]

export default function Skills() {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([])
  const [animatedBars, setAnimatedBars] = useState<boolean[]>(
    [false, false, false]
  )

  // Animate bars on page load after short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedBars([true, true, true])
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="skills"
      className="py-28 px-12 max-md:px-6 max-md:py-20"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Header — NO reveal class, shows immediately */}
      <div className="mb-16">

        {/* Label */}
        <div
          className="flex items-center gap-2 mb-3"
          style={{
            color: 'var(--accent)',
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ color: 'var(--text3)' }}>//</span>
          Technical Skills
        </div>

        {/* Title */}
        <h2
          className="font-syne font-black"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            letterSpacing: '-2px',
            lineHeight: 1.1,
            color: 'var(--text)',
          }}
        >
          My{' '}
          <em
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontStyle: 'italic',
              color: 'var(--accent)',
            }}
          >
            Toolkit
          </em>
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCards.map((card, idx) => (
          <div
            key={card.title}
            ref={(el) => { skillRefs.current[idx] = el }}
            className="border rounded-2xl p-8 transition-all duration-300"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
            }}
          >
            {/* Card Title */}
            <h3
              className="font-syne font-bold uppercase mb-6 flex items-center gap-2"
              style={{
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                color: 'var(--accent)',
              }}
            >
              <span style={{ fontSize: '1.3rem' }}>{card.icon}</span>
              {card.title}
            </h3>

            {/* Skill Bars */}
            {card.skills && (
              <div className="flex flex-col gap-5">
                {card.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span style={{ fontSize: '0.82rem', color: 'var(--text)' }}>
                        {skill.name}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>
                        {skill.percent}%
                      </span>
                    </div>
                    {/* Bar Track */}
                    <div
                      className="h-1 rounded-sm overflow-hidden"
                      style={{ backgroundColor: 'var(--border)' }}
                    >
                      {/* Bar Fill */}
                      <div
                        className="h-full rounded-sm transition-all duration-1000 ease-out"
                        style={{
                          background: 'linear-gradient(90deg, #00d9ff, #7b61ff)',
                          width: animatedBars[idx]
                            ? `${skill.percent}%`
                            : '0%',
                          transitionDelay: `${idx * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tags */}
            {card.tags && (
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border rounded-lg transition-all duration-200 cursor-default"
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.35rem 0.75rem',
                      backgroundColor: 'var(--surface)',
                      borderColor: 'var(--border)',
                      color: 'var(--text2)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent)'
                      e.currentTarget.style.color = 'var(--accent)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.color = 'var(--text2)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}