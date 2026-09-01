import { Link } from 'react-router-dom'

/** Alternating image/text row used four times on the Services page —
 *  matches the mockup's "Residential / Commercial / Storage / Maintenance" rows. */
export default function ServiceRow({ title, tag, text, img, reverse = false }) {
  return (
    <div className={`grid items-center gap-8 py-10 md:grid-cols-2 ${reverse ? "" : ""}`}>
      <div className={reverse ? "md:order-2" : ""}>
        <img src={img} alt={title} className="h-56 w-full rounded-lg object-cover md:h-64" />
      </div>
      <div className={reverse ? "md:order-1" : ""}>
        <p className="text-xs font-semibold uppercase tracking-wide text-band">{tag}</p>
        <h3 className="mt-1 text-2xl font-bold text-navy">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
        <Link
          to="/contact"
          className="mt-5 inline-block rounded-md bg-gold px-6 py-2.5 font-display text-sm font-semibold text-navy hover:bg-goldlight"
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  )
}
