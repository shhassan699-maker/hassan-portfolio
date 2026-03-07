'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Contact() {
  const titleRef = useScrollReveal()
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()

  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  const contactLinks = [
    { icon: '✉️', label: 'Shhassan699@gmail.com', href: 'mailto:Shhassan699@gmail.com' },
    { icon: '📞', label: '+92 335 5774061', href: 'tel:+923355774061' },
    { icon: '💼', label: 'linkedin.com/in/hassan-sheikh', href: 'https://www.linkedin.com/in/hassan-sheikh-1a2b72185' },
    { icon: '📍', label: 'Islamabad, Pakistan', href: '#' },
  ]

  return (
    <section id="contact" className="py-28 px-12 max-md:px-6 max-md:py-20" style={{ backgroundColor: 'var(--bg2)' }}>
      {/* Header */}
      <div ref={titleRef} className="reveal mb-16 max-w-4xl">
        <p className="text-0.72rem uppercase tracking-0.2em mb-3 flex items-center gap-2" style={{ color: 'var(--accent)' }}>
          <span style={{ color: 'var(--text3)' }}>//</span> Get In Touch
        </p>
        <h2
          className="font-syne font-black mb-2"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            letterSpacing: '-2px',
            lineHeight: 1.1,
            color: 'var(--text)',
          }}
        >
          Let&apos;s <em className="font-instrument-serif italic" style={{ color: 'var(--accent)' }}>Connect</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-lg:gap-12 items-start">
        {/* Left */}
        <div ref={leftRef} className="reveal">
          <h3 className="font-syne font-bold text-1.3rem mb-2" style={{ color: 'var(--text)' }}>
            Open to new opportunities
          </h3>
          <p className="text-0.87rem leading-1.8 mb-8" style={{ color: 'var(--text2)' }}>
            Whether you have a project that needs quality assurance, or just want to connect — I&apos;d love to hear from you. Let&apos;s build
            something great together.
          </p>
          <div className="flex flex-col gap-2">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-4 border rounded-xl transition-all duration-200"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontSize: '0.83rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <span className="text-1.2rem">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <div ref={rightRef} className="reveal">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name + Email Row */}
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
              {[
                { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name' },
                { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com' },
              ].map((field) => (
                <div key={field.name} className="flex flex-col gap-0.5">
                  <label className="text-0.75rem uppercase tracking-0.1em" style={{ color: 'var(--text3)' }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="px-4 py-3.5 text-0.85rem rounded-lg border transition-all duration-200 font-dm-mono"
                    style={{
                      backgroundColor: 'var(--card)',
                      borderColor: 'var(--border)',
                      color: 'var(--text)',
                      outlineColor: 'var(--accent)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-0.5">
              <label className="text-0.75rem uppercase tracking-0.1em" style={{ color: 'var(--text3)' }}>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="How can I help?"
                className="px-4 py-3.5 text-0.85rem rounded-lg border transition-all duration-200 font-dm-mono"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                  color: 'var(--text)',
                  outlineColor: 'var(--accent)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-0.5">
              <label className="text-0.75rem uppercase tracking-0.1em" style={{ color: 'var(--text3)' }}>
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project..."
                className="px-4 py-3.5 text-0.85rem rounded-lg border transition-all duration-200 font-dm-mono resize-none"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                  color: 'var(--text)',
                  outlineColor: 'var(--accent)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
              />
            </div>

            {/* Success Message */}
            {status === 'sent' && (
              <p
                className="text-0.83rem px-4 py-2 rounded-lg border"
                style={{
                  backgroundColor: 'rgba(0, 255, 157, 0.1)',
                  borderColor: 'var(--accent3)',
                  color: 'var(--accent3)',
                }}
              >
                ✓ Message sent! I&apos;ll get back to you soon.
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="px-8 py-4 font-syne font-bold text-0.9rem tracking-0.05em rounded-lg w-full transition-all duration-200"
              style={{
                backgroundColor: 'var(--accent)',
                color: '#000',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 217, 255, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}