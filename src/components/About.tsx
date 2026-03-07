'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const infoCards = [
  {
    icon: '🎓',
    title: 'Education',
    content: 'B.Sc. Software Engineering\nIqra University Islamabad — 2021–2025',
  },
  {
    icon: '📍',
    title: 'Location',
    content: 'Islamabad, Pakistan\nOpen to remote opportunities',
  },
  {
    icon: '✉️',
    title: 'Contact',
    content: 'Shhassan699@gmail.com\n+92 335 5774061',
  },
  {
    icon: '🌐',
    title: 'Languages',
    content: 'English — Fluent\nUrdu — Native',
  },
]

export default function About() {
  const titleRef = useScrollReveal()
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()

  return (
    <section
      id="about"
      className="py-28 px-12 max-md:px-6 max-md:py-20"
      style={{ backgroundColor: 'var(--bg2)' }}
    >
      {/* Header */}
      <div ref={titleRef} className="reveal mb-16">
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
          About Me
        </div>

        <h2
          className="font-syne font-black"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            letterSpacing: '-2px',
            lineHeight: 1.1,
            color: 'var(--text)',
          }}
        >
          Who{' '}
          <em
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontStyle: 'italic',
              color: 'var(--accent)',
            }}
          >
            I Am
          </em>
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-lg:gap-8 items-center">

        {/* Left - Text */}
        <div ref={leftRef} className="reveal flex flex-col gap-6">
          <p
            style={{
              color: 'var(--text2)',
              fontSize: '0.9rem',
              lineHeight: 1.9,
            }}
          >
            I&apos;m a Software Quality Assurance Engineer with a passion for
            delivering exceptional software quality. With hands-on experience
            across manual testing, API validation, and mobile QA, I&apos;ve tested
            diverse applications from AI-powered platforms to healthcare
            solutions, ride-hailing apps, and e-commerce marketplaces.
          </p>
          <p
            style={{
              color: 'var(--text2)',
              fontSize: '0.9rem',
              lineHeight: 1.9,
            }}
          >
            My strength lies in attention to detail, systematic test case
            design, and exploratory testing to uncover hidden defects. I&apos;m
            proficient in tools like Postman, Jira, Firebase, Cypress, and
            OWASP ZAP, following Agile and SCRUM methodologies.
          </p>
          <p
            style={{
              color: 'var(--text2)',
              fontSize: '0.9rem',
              lineHeight: 1.9,
            }}
          >
            Currently working as an SQA Engineer at Ninesol Technologies,
            I&apos;m committed to continuous learning and staying updated on
            emerging QA trends and best practices.
          </p>
        </div>

        {/* Right - Info Cards */}
        <div ref={rightRef} className="reveal flex flex-col gap-4">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="flex gap-4 p-6 border rounded-2xl transition-all duration-300 cursor-pointer"
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
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-xl"
                style={{ backgroundColor: 'var(--surface)' }}
              >
                {card.icon}
              </div>

              {/* Text */}
              <div>
                <h4
                  className="font-syne font-bold mb-1"
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text)',
                  }}
                >
                  {card.title}
                </h4>
                <p
                  className="whitespace-pre-line"
                  style={{
                    fontSize: '0.8rem',
                    lineHeight: 1.5,
                    color: 'var(--text2)',
                  }}
                >
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}