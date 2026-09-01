import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="flex items-center gap-2 font-display text-base font-bold text-white">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy" aria-hidden="true">☀</span>
            SOLAR SOLUTIONS
          </p>
          <p className="mt-3 max-w-xs text-sm text-white/60">
            Residential, commercial, and storage solar installations built to last.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-semibold text-white">Sitemap</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
             <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
           
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold text-white">Privacy Policy</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-gold">Terms of Use</a></li>
            <li><a href="#" className="hover:text-gold">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gold">Cookie Policy</a></li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold text-white">Social Icons</p>
          <div className="mt-3 flex gap-3">
            <a href="#" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-navy">f</a>
            <a href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-navy">ig</a>
            <a href="#" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-navy">in</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Solar Solutions. All rights reserved.
      </div>
    </footer>
  )
}
