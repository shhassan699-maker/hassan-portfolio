'use client'
import { useTheme as useNextTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function useTheme() {
  const { theme, setTheme } = useNextTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return { theme, toggleTheme, mounted }
}