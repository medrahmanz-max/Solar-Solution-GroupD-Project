import { useState } from 'react'

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-black/10 py-4">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="font-display text-sm font-medium text-navy">{question}</span>
        <span className="text-band">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-sm text-muted">{answer}</p>}
    </div>
  )
}
