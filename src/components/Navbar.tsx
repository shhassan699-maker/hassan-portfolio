'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/hooks/useTheme'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme, mounted } = useTheme()

  useEffect(() => {
    const sections = navLinks.map(link => link.href.substring(1))
    const observers = sections.map(sectionId => {
      const element = document.getElementById(sectionId)
      if (!element) return null

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            // Only update if section is more than 50% visible
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveSection(sectionId)
            }
          })
        },
        { threshold: [0.3, 0.5, 0.7] }
      )

      observer.observe(element)
      return observer
    })

    return () => {
      observers.forEach(observer => {
        if (observer) observer.disconnect()
      })
    }
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 max-md:px-6 py-5 border-b transition-all duration-400"
      style={{
        background: 'rgba(8,12,16,0.85)',
        backdropFilter: 'blur(20px)',
        borderColor: 'var(--border)',
      }}
    >
      {/* Logo */}
      <a href="#home" className="font-syne font-black text-xl tracking-tighter" style={{ color: 'var(--accent)' }}>
        MH<span style={{ color: 'var(--text)' }}>S.</span>
      </a>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {navLinks.map(({ label, href }) => {
          const sectionId = href.substring(1)
          const isActive = activeSection === sectionId
          return (
            <li key={label}>
              <a
                href={href}
                className="text-xs uppercase tracking-widest transition-colors duration-200 relative"
                style={{ color: isActive ? 'var(--accent)' : 'var(--text2)' }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--accent)'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text2)'
                }}
              >
                {label}
                <span
                  className="absolute bottom-0 left-0 h-px transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--accent)',
                    width: isActive ? '100%' : '0%',
                    bottom: '-3px',
                  }}
                />
              </a>
            </li>
          )
        })}
      </ul>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={toggleTheme}
            className="px-4 py-2 text-xs uppercase tracking-widest font-dm-mono rounded-md transition-all duration-200 border"
            style={{
              color: 'var(--text2)',
              borderColor: 'var(--border)',
              backgroundColor: 'var(--surface)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent)'
              e.currentTarget.style.borderColor = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text2)'
              e.currentTarget.style.borderColor = 'var(--border)'
            }}
          >
            {theme === 'dark' ? '◐ Light' : '◑ Dark'}
          </button>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden px-2 py-2 rounded-md transition-all border"
          style={{
            color: 'var(--text)',
            borderColor: 'var(--border)',
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 border-b md:hidden flex flex-col py-6 px-6 gap-4"
          style={{
            backgroundColor: 'var(--bg2)',
            borderColor: 'var(--border)',
          }}
        >
          {navLinks.map(({ label, href }) => {
            const sectionId = href.substring(1)
            const isActive = activeSection === sectionId
            return (
              <a
                key={label}
                href={href}
                className="text-sm uppercase tracking-wider transition-colors duration-200"
                style={{
                  color: isActive ? 'var(--accent)' : 'var(--text2)',
                }}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--accent)'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text2)'
                }}
              >
                {label}
              </a>
            )
          })}
        </div>
      )}
    </nav>
  )
}