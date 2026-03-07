'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import ProjectModal from './ProjectModal'
import type { Project } from '@/types/project'
import { projects } from '@/data/projects'

export default function Projects() {
  const titleRef = useScrollReveal()
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-28 px-12 max-md:px-6 max-md:py-20" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Header */}
      <div ref={titleRef} className="reveal mb-16 max-w-4xl">
        <p className="text-0.72rem uppercase tracking-0.2em mb-3 flex items-center gap-2" style={{ color: 'var(--accent)' }}>
          <span style={{ color: 'var(--text3)' }}>//</span> Portfolio
        </p>
        <h2 className="font-syne font-black mb-2" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-2px', lineHeight: 1.1, color: 'var(--text)' }}>
          Projects <em className="font-instrument-serif italic" style={{ color: 'var(--accent)' }}>Tested</em>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: Project) => {
          const cardRef = useScrollReveal()
          return (
            <div
              key={project.id}
              ref={cardRef}
              className="reveal border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
              style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
              onClick={() => setSelected(project)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 0 40px rgba(0, 217, 255, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="p-7">
                <div className="flex justify-between items-start mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)' }}>
                    {project.icon}
                  </div>
                  <span className="text-0.68rem px-2 py-1 rounded border uppercase tracking-0.1em" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--accent2)' }}>
                    {project.type}
                  </span>
                </div>
                <h3 className="font-syne font-bold text-1.05rem mb-2" style={{ color: 'var(--text)' }}>
                  {project.name}
                </h3>
                <p className="text-0.8rem leading-1.7 mb-4 line-clamp-3" style={{ color: 'var(--text2)' }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="text-0.7rem px-2 py-0.5 rounded border" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', color: 'var(--text3)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}