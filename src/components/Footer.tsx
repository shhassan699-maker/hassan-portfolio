export default function Footer() {
  return (
    <footer
      className="px-12 py-6 border-t flex flex-col md:flex-row items-center justify-between gap-4 max-md:px-6 max-md:py-4 max-md:flex-col max-md:items-start"
      style={{
        backgroundColor: 'var(--bg)',
        borderColor: 'var(--border)',
      }}
    >
      <p className="text-0.78rem" style={{ color: 'var(--text3)' }}>
        © 2025 <span style={{ color: 'var(--accent)' }}>Muhammad Hassan Sheikh</span>
      </p>
      <p className="text-0.78rem" style={{ color: 'var(--text3)' }}>
        SQA Engineer · Islamabad, Pakistan
      </p>
    </footer>
  )
}