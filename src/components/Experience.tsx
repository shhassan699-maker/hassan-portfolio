'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Experience() {
  const titleRef = useScrollReveal()

  const experiences = [
    {
      id: 1,
      company: 'Ninesol Technologies',
      role: 'Software Quality Assurance Engineer',
      date: 'April 2025 – Present · Islamabad, Pakistan',
      badge: 'Current',
      badgeColor: 'cyan',
      points: [
        'Conducted thorough manual testing across web and mobile platforms',
        'Utilized Firebase Test Lab to test app behavior across real Android devices',
        'Monitored app stability with Firebase Crashlytics, improving crash-free sessions',
        'Participated in AI feature testing for chatbots and recommendation engines',
        'Collaborated with developers to refine test plans on Android and iOS',
        'Ensured test documentation aligned with Agile sprint cycles',
      ],
    },
    {
      id: 2,
      company: 'Codes Orbit',
      role: 'Software Quality Assurance Intern',
      date: 'Dec 2024 – March 2025 · 4 Months',
      badge: 'Internship',
      badgeColor: 'purple',
      points: [
        'Conducted manual testing to identify and report software defects',
        'Designed and executed test cases for functionality, performance, reliability',
        'Performed exploratory testing to uncover hidden defects and edge cases',
        'Utilized Postman for API testing and error handling validation',
        'Conducted usability, regression, compatibility testing across devices',
        'Collaborated with QA teams to refine test strategies and workflows',
      ],
    },
  ]

  return (
    <section id="experience" className="py-28 px-12 max-md:px-6 max-md:py-20" style={{ backgroundColor: 'var(--bg2)' }}>
      {/* Header */}
      <div ref={titleRef} className="reveal mb-16 max-w-4xl">
        <p className="text-0.72rem uppercase tracking-0.2em mb-3 flex items-center gap-2" style={{ color: 'var(--accent)' }}>
          <span style={{ color: 'var(--text3)' }}>//</span> Work History
        </p>
        <h2
          className="font-syne font-black mb-2"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            letterSpacing: '-2px',
            lineHeight: 1.1,
            color: 'var(--text)',
          }}
        >
          My <em className="font-instrument-serif italic" style={{ color: 'var(--accent)' }}>Experience</em>
        </h2>
      </div>

      {/* Timeline */}
      <div
        className="relative pl-8"
        style={{
          borderLeft: '1px solid',
          borderColor: 'var(--border)',
          backgroundImage: 'linear-gradient(180deg, var(--accent), var(--accent2), transparent)',
          backgroundPosition: '0 0',
          backgroundSize: '1px 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {experiences.map((exp, idx) => {
          const cardRef = useScrollReveal()
          return (
            <div key={exp.id} className={`relative mb-12 ${idx === experiences.length - 1 ? 'last:mb-0' : ''}`}>
              {/* Dot */}
              <div
                className="absolute -left-[2.35rem] top-1.5 w-3 h-3 rounded-full shadow-lg"
                style={{
                  backgroundColor: 'var(--accent)',
                  boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
                }}
              />

              <div
                ref={cardRef}
                className="reveal border rounded-2xl p-8 transition-all duration-300"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                {/* Top */}
                <div className="flex justify-between items-start flex-wrap gap-3 mb-2">
                  <h3 className="font-syne font-bold text-1.1rem" style={{ color: 'var(--text)' }}>
                    {exp.company}
                  </h3>
                  <span
                    className="text-0.7rem px-3 py-0.5 rounded-full border"
                    style={{
                      borderColor: exp.badgeColor === 'cyan' ? 'var(--accent)' : 'var(--accent2)',
                      color: exp.badgeColor === 'cyan' ? 'var(--accent)' : 'var(--accent2)',
                    }}
                  >
                    {exp.badge}
                  </span>
                </div>
                <p className="text-0.85rem mb-1" style={{ color: 'var(--text2)' }}>
                  {exp.role}
                </p>
                <p className="text-0.75rem mb-6" style={{ color: 'var(--text3)' }}>
                  {exp.date}
                </p>

                {/* Points */}
                <ul className="flex flex-col gap-1.5">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-0.83rem leading-1.7" style={{ color: 'var(--text2)' }}>
                      <span className="mt-0 shrink-0" style={{ color: 'var(--accent)' }}>
                        →
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}