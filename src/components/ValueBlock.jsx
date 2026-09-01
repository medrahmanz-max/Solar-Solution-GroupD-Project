export default function ValueBlock({ title, text }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
    </div>
  )
}
