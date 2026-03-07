'use client'

import { useEffect } from 'react'

interface Project {
  id: number
  icon: string
  name: string
  type: string
  description: string
  tags: string[]
  details: string
  features: string[]
}

interface Props {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-2xl"
      onClick={onClose}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
      }}
    >
      <div
        className="relative border rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-10 max-md:p-6 animate-[scaleIn_0.3s_ease]"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--bg2)',
          borderColor: 'var(--border)',
          animation: 'scaleIn 0.3s ease',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-200 font-bold text-lg"
          style={{
            backgroundColor: 'var(--surface)',
            borderColor: 'var(--border)',
            color: 'var(--text)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent)'
            e.currentTarget.style.color = 'var(--accent)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.color = 'var(--text)'
          }}
        >
          ✕
        </button>

        {/* Content */}
        <div className="text-4xl mb-4">{project.icon}</div>
        <h2 className="font-syne font-black text-2xl mb-1" style={{ color: 'var(--text)' }}>
          {project.name}
        </h2>
        <p className="text-0.78rem uppercase tracking-0.1em mb-6" style={{ color: 'var(--accent)' }}>
          {project.type}
        </p>
        <p className="text-0.87rem leading-1.8 mb-4" style={{ color: 'var(--text2)' }}>
          {project.description}
        </p>
        <p className="text-0.87rem leading-1.8 mb-8" style={{ color: 'var(--text2)' }}>
          {project.details}
        </p>

        {/* Features */}
        <ul className="flex flex-col gap-0 mb-8">
          {project.features.map((f, i) => (
            <li
              key={i}
              className="flex gap-3 text-0.83rem leading-1.7 py-3 border-b"
              style={{
                color: 'var(--text2)',
                borderColor: 'var(--border)',
              }}
            >
              <span className="mt-0 shrink-0" style={{ color: 'var(--accent3)' }}>
                ✓
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-0.75rem px-3 py-1.5 rounded-lg border"
              style={{
                backgroundColor: 'var(--surface)',
                borderColor: 'var(--border)',
                color: 'var(--text3)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          from {
            transform: scale(0.95) translateY(20px);
            opacity: 0;
          }
          to {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}