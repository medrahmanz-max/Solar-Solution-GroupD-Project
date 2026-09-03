import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [sent, setSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || 'We could not send your message right now.'
        )
      }

      setSent(true)

      // Clear the form after successful submission
      setForm({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    } catch (err) {
      console.error('Contact form error:', err)

      setError(
        err.message || 'We could not send your message right now. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (sent) {
    return (
      <div className="rounded-lg bg-white/10 p-6 text-white">
        <p className="font-semibold">Message sent.</p>

        <p className="mt-1 text-sm text-white/70">
          Thanks, there — we'll reply within one business day.
        </p>

        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-4 rounded-md bg-gold px-5 py-2 text-sm font-semibold text-navy hover:bg-goldlight"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      <input
        name="name"
        type="text"
        required
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="rounded-md border-none bg-white px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-gold"
      />

      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="rounded-md border-none bg-white px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-gold"
      />

      <input
        name="phone"
        type="tel"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="rounded-md border-none bg-white px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-gold sm:col-span-2"
      />

      <textarea
        name="message"
        required
        rows={4}
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        className="rounded-md border-none bg-white px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-gold sm:col-span-2"
      />

      {error && (
        <p
          role="alert"
          className="text-sm text-red-200 sm:col-span-2"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md bg-gold px-6 py-3 font-display text-sm font-semibold text-navy hover:bg-goldlight disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
      >
        {isSubmitting ? 'Sending...' : 'Contact'}
      </button>
    </form>
  )
}