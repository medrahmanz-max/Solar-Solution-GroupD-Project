export default function TestimonialCard({ quote, name }) {
  return (
    <figure className="rounded-lg border border-black/5 bg-white p-6 shadow-sm">
      <blockquote className="text-sm text-ink/70">"{quote}"</blockquote>
      <figcaption className="mt-4 font-display text-sm font-semibold text-navy">{name}</figcaption>
    </figure>
  )
}
