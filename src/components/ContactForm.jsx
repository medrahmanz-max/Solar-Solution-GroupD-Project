import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', form)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-lg bg-white/10 p-6 text-white">
        <p className="font-semibold">Message sent.</p>
        <p className="mt-1 text-sm text-white/70">
          Thanks, {form.name.split(' ')[0] || 'there'} — we'll reply within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <input
        name="name" type="text" required placeholder="Name"
        value={form.name} onChange={handleChange}
        className="rounded-md border-none bg-white px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-gold"
      />
      <input
        name="email" type="email" required placeholder="Email"
        value={form.email} onChange={handleChange}
        className="rounded-md border-none bg-white px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-gold"
      />
      <input
        name="phone" type="tel" placeholder="Phone"
        value={form.phone} onChange={handleChange}
        className="rounded-md border-none bg-white px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-gold sm:col-span-2"
      />
      <textarea
        name="message" required rows={4} placeholder="Message"
        value={form.message} onChange={handleChange}
        className="rounded-md border-none bg-white px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-gold sm:col-span-2"
      />
      <button
        type="submit"
        className="rounded-md bg-gold px-6 py-3 font-display text-sm font-semibold text-navy hover:bg-goldlight sm:col-span-2"
      >
        Contact
      </button>
    </form>
  )
}
