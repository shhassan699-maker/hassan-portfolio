'use client'

import { useState } from 'react'
import ThemeClient from './ThemeClient'

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

  return (
    <nav className="flex items-center justify-between">
      <div className="nav-logo">
        MH<span>S.</span>
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <ul className="nav-links" id="navLinks">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <ThemeClient />
    </nav>
  )
}