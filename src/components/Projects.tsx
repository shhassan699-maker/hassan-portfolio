'use client'

import { useState } from 'react'
import ProjectModal from './ProjectModal'

interface Project {
  id: number
  icon: string
  name: string
  type: string
  desc: string
  tags: string[]
  details: string
  features: string[]
}

const projects: Project[] = [
  {
    id: 1,
    icon: '🤖',
    name: 'GetChatly',
    type: 'Mobile & Web App',
    desc: 'A centralized AI platform providing access to GPT-4, GPT-4o, DeepSeek, Gemini and others under one subscription.',
    tags: ['API Testing', 'AI Validation', 'Web Testing', 'Mobile Testing'],
    details: 'Performed complete web testing including chatbot model switching, UI functionality, subscription flow, and AI response accuracy.',
    features: [
      'Chatbot model switching validation',
      'Subscription flow testing',
      'AI response accuracy testing',
      'UI/UX functionality checks',
    ],
  },
  {
    id: 2,
    icon: '✈️',
    name: 'Flight Tracker',
    type: 'Mobile App',
    desc: 'A real-time flight tracking app similar to FlightRadar24 with live aircraft location tracking.',
    tags: ['API Testing', 'Real-time Testing', 'Map Testing'],
    details: 'Tested live aircraft location tracking, map rendering, and API integrations for accurate flight information display.',
    features: [
      'Live aircraft location accuracy',
      'Map rendering performance',
      'API integration validation',
      'Real-time data sync testing',
    ],
  },
  {
    id: 3,
    icon: '🏥',
    name: 'SoapSuds',
    type: 'Healthcare App',
    desc: 'A medical application for virtual consultations between patients and doctors with AI-powered features.',
    tags: ['Healthcare', 'Audio Testing', 'Security Testing'],
    details: 'Validated audio recording features, automated medicine suggestions, and secure cloud storage of medical history.',
    features: [
      'Audio recording validation',
      'AI medicine suggestion accuracy',
      'Secure cloud storage testing',
      'Virtual consultation flow',
    ],
  },
  {
    id: 4,
    icon: '🎙️',
    name: 'AI Transcribe App',
    type: 'Mobile App',
    desc: 'Intelligent speech-to-text solution converting live or recorded audio/video into written transcripts.',
    tags: ['AI Testing', 'NLP Testing', 'Multilingual'],
    details: 'Tested real-time transcription, multilingual support, and accuracy of AI-generated text.',
    features: [
      'Real-time transcription accuracy',
      'Multilingual support (10+ languages)',
      'Audio/video format compatibility',
      'AI text accuracy benchmarking',
    ],
  },
  {
    id: 5,
    icon: '🚗',
    name: 'Moto Rider & Driver',
    type: 'Android App',
    desc: 'Multi-mode ride-hailing app with automatic bidding, instant fare, and flex fare negotiation systems.',
    tags: ['Functional Testing', 'Bidding Logic', 'Workflow Testing'],
    details: 'Conducted functional testing on bidding logic, fare assignment, ride request handling, and driver acceptance workflows.',
    features: [
      'Automatic bidding logic validation',
      'Instant fare assignment testing',
      'Flex fare negotiation flow',
      'Driver acceptance workflow testing',
    ],
  },
  {
    id: 6,
    icon: '🎨',
    name: 'Artostream',
    type: 'iOS App',
    desc: 'An art marketplace where artists upload artwork for buyers with seamless transaction processing.',
    tags: ['iOS Testing', 'E-commerce', 'Image Rendering'],
    details: 'Ensured seamless transactions, proper image rendering, and an optimized user experience.',
    features: [
      'Transaction flow validation',
      'Image rendering quality checks',
      'Upload/download performance',
      'User experience optimization',
    ],
  },
  {
    id: 7,
    icon: '💼',
    name: 'Job Finder',
    type: 'Mobile & Web',
    desc: 'A job portal allowing users to search, filter, and apply for jobs similar to Indeed.',
    tags: ['End-to-End Testing', 'Resume Upload', 'Notification Testing'],
    details: 'Tested job listing accuracy, application flow, resume upload features, and user notifications.',
    features: [
      'Job listing accuracy',
      'Application submission flow',
      'Resume upload functionality',
      'Push notification delivery',
    ],
  },
  {
    id: 8,
    icon: '🔒',
    name: 'Deen',
    type: 'iOS App',
    desc: 'iOS app with app blocking, content restriction, screen time tracking, prayer notifications, and Qibla direction.',
    tags: ['Security Testing', 'iOS Testing', 'Exploratory Testing'],
    details: 'Conducted exploratory testing to uncover usability issues and enhance app security.',
    features: [
      'App blocking functionality',
      '18+ content restriction',
      'Screen time tracking accuracy',
      'Prayer notification scheduling',
    ],
  },
  {
    id: 9,
    icon: '🏢',
    name: 'FalkonData',
    type: 'Web App',
    desc: 'Healthcare document management system for secure document upload and sharing via unique customer links.',
    tags: ['Security Testing', 'Data Integrity', 'Healthcare'],
    details: 'Verified data integrity, link generation, and secure storage of patient information.',
    features: [
      'Data integrity validation',
      'Secure link generation',
      'Patient data protection',
      'Document upload/download testing',
    ],
  },
]

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      className="py-28 px-12 max-md:px-6 max-md:py-20"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Header */}
      <div className="mb-16">
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
          Portfolio
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
          Projects{' '}
          <em
            style={{
              fontFamily: 'var(--font-instrument-serif)',
              fontStyle: 'italic',
              color: 'var(--accent)',
            }}
          >
            Tested
          </em>
        </h2>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelected(project)}
            className="border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent)'
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow =
                '0 0 40px rgba(0,217,255,0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Card Header */}
            <div
              className="flex justify-between items-start"
              style={{ padding: '1.8rem 1.8rem 0', marginBottom: '1rem' }}
            >
              {/* Icon Box */}
              <div
                className="flex items-center justify-center border rounded-xl"
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                  fontSize: '1.4rem',
                  flexShrink: 0,
                }}
              >
                {project.icon}
              </div>

              {/* Type Badge */}
              <span
                className="border rounded"
                style={{
                  fontSize: '0.68rem',
                  color: 'var(--accent2)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--border)',
                  padding: '0.25rem 0.6rem',
                }}
              >
                {project.type}
              </span>
            </div>

            {/* Card Body */}
            <div style={{ padding: '0 1.8rem 1.8rem' }}>
              {/* Name */}
              <h3
                className="font-syne font-bold"
                style={{
                  fontSize: '1.05rem',
                  marginBottom: '0.6rem',
                  color: 'var(--text)',
                }}
              >
                {project.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text2)',
                  lineHeight: 1.7,
                  marginBottom: '1rem',
                }}
              >
                {project.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap" style={{ gap: '0.4rem' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border rounded"
                    style={{
                      backgroundColor: 'var(--surface)',
                      borderColor: 'var(--border)',
                      padding: '0.2rem 0.6rem',
                      fontSize: '0.7rem',
                      color: 'var(--text3)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}