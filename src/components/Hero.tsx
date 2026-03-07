'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-12 max-md:px-6 pt-36 max-md:pt-28 pb-16 max-md:pb-12 overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }}
      />

      {/* Orb 1 - Top Right */}
      <div
        className="absolute -top-24 -right-24 rounded-full blur-2xl"
        style={{
          width: '500px',
          height: '500px',
          backgroundColor: 'rgba(0, 217, 255, 0.08)',
          filter: 'blur(80px)',
        }}
      />

      {/* Orb 2 - Bottom Left */}
      <div
        className="absolute -bottom-12 left-1/4 rounded-full blur-2xl"
        style={{
          width: '400px',
          height: '400px',
          backgroundColor: 'rgba(123, 97, 255, 0.08)',
          filter: 'blur(80px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 text-0.72rem uppercase tracking-0.15em"
          style={{
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)',
            color: 'var(--accent)',
          }}
        >
          <span className="w-0.5rem h-0.5rem rounded-full pulse-dot" style={{ backgroundColor: 'var(--accent)' }} />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-syne font-black mb-6"
          style={{
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            lineHeight: 0.95,
            letterSpacing: '-3px',
            color: 'var(--text)',
          }}
        >
          Muhammad Hassan
          <span style={{ display: 'block', color: 'var(--accent)' }}>Sheikh</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-instrument-serif italic mb-8"
          style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            color: 'var(--text2)',
          }}
        >
          Software Quality Assurance Engineer
        </motion.p>

        {/* Description */}
        <motion.p
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-0.9rem leading-1.8 mb-12"
          style={{ color: 'var(--text2)' }}
        >
          Detail-oriented SQA Engineer with expertise in manual testing, API testing, and mobile QA. Passionate about
          delivering bug-free, high-quality software across web and mobile platforms.
        </motion.p>

        {/* Buttons */}
        <motion.div
          custom={0.4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex gap-4 flex-wrap items-center mb-16"
        >
          <a
            href="#projects"
            className="font-syne font-bold px-8 py-3.5 rounded-lg text-sm tracking-wide hover:-translate-y-1 transition-all duration-200"
            style={{
              backgroundColor: 'var(--accent)',
              color: '#000',
              display: 'inline-block',
              textDecoration: 'none',
              boxShadow: '0 0 0 transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 217, 255, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            View Projects →
          </a>

          <a
            href="#contact"
            className="font-syne font-semibold px-8 py-3.5 rounded-lg text-sm border transition-all duration-200 hover:-translate-y-1"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text)',
              display: 'inline-block',
              textDecoration: 'none',
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
            Get In Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex gap-12 flex-wrap mt-16"
        >
          {[
            { num: '15+', label: 'Projects Tested' },
            { num: '4+', label: 'Certifications' },
            { num: '1yr+', label: 'Experience' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-syne font-black text-3xl leading-none" style={{ color: 'var(--accent)' }}>
                {stat.num}
              </span>
              <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--text3)' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}