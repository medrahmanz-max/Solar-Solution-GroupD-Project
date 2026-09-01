import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-gold' : 'text-navy hover:text-band'}`

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold" aria-hidden="true">☀</span>
          <span className="font-display text-base font-bold tracking-wide text-navy">SOLAR SOLUTIONS</span>
        </NavLink>

        <ul className="hidden gap-7 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={linkClass}>{l.label}</NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/contact"
          className="hidden rounded-md bg-gold px-5 py-2 font-display text-sm font-semibold text-navy hover:bg-goldlight md:inline-block"
        >
          Get Quote
        </NavLink>

        <button
          className="text-navy md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-black/5 bg-white px-6 py-4 md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={linkClass} onClick={() => setOpen(false)}>
                <span className="block py-2">{l.label}</span>
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/contact" onClick={() => setOpen(false)} className="mt-2 block rounded-md bg-gold px-5 py-2 text-center font-display text-sm font-semibold text-navy">
              Get Quote
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  )
}
