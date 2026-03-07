'use client'

import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 60)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    reveals.forEach((el) => observer.observe(el))
    return () => {
      reveals.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="home">
      <div className="hero-grid"></div>
      <div className="hero-orb orb1"></div>
      <div className="hero-orb orb2"></div>
      <div className="hero-content">
        <div className="hero-tag">Available for opportunities</div>
        <h1 className="hero-name">
          Muhammad Hassan
          <span className="line2">Sheikh</span>
        </h1>
        <p className="hero-title">Software Quality Assurance Engineer</p>
        <p className="hero-desc">
          Detail-oriented SQA Engineer with expertise in manual testing, API testing, and mobile QA. Passionate about
          delivering bug-free, high-quality software across web and mobile platforms.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">
            View Projects →
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">15+</span>
            <span className="stat-label">Projects Tested</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">4+</span>
            <span className="stat-label">Certifications</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">1yr+</span>
            <span className="stat-label">Experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}