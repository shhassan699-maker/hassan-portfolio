'use client'

import { useEffect, useState } from 'react'

export default function ThemeClient() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const theme = localStorage.getItem('theme') || 'dark'
    document.documentElement.setAttribute('data-theme', theme)
  }, [])

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme')
    const newTheme = current === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    const btn = document.getElementById('themeBtn')
    if (btn) {
      btn.textContent = newTheme === 'dark' ? '◐ Light' : '◑ Dark'
    }
  }

  if (!mounted) return null

  return (
    <button className="theme-btn" id="themeBtn" onClick={toggleTheme}>
      ◐ Light
    </button>
  )
}
