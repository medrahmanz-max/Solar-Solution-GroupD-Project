import { Link } from 'react-router-dom'
import IconStat from '../components/IconStat.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import ValueBlock from '../components/ValueBlock.jsx'
import mamusu from "../assets/images/mamusu.jpg"
import ourTeam from "../assets/images/ourTeam.jpg"

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              Empowering a Brighter Future With Solar Energy
            </h1>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-md bg-gold px-7 py-3 font-display text-sm font-semibold text-navy hover:bg-goldlight"
            >
              Go Solar Today
            </Link>
          </div>
          <img
            src={mamusu}
            alt="Family standing in front of their solar-powered home"
            className="w-full rounded-lg object-fit"
          />
        </div>
      </section>

      {/* Service overview */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center text-2xl font-bold text-navy">Service Overview</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            <IconStat icon="🏠" title="Residential" text="Home solar systems sized to your household's real usage." />
            <IconStat icon="🏢" title="Commercial" text="Arrays designed for shops, offices, and institutions." />
            <IconStat icon="🔋" title="Storage" text="Battery banks that keep the lights on after sunset." />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center text-2xl font-bold text-navy">Testimonials</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <TestimonialCard quote="Our power bill dropped by more than half in the first month." name="J. Kamara" />
            <TestimonialCard quote="Installation was fast, clean, and the team explained everything." name="A. Sesay" />
            <TestimonialCard quote="The battery storage means we barely notice grid outages now." name="M. Bangura" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">Company Values</h2>
            <div className="mt-6 space-y-6">
              <ValueBlock title="Trust" text="Transparent pricing and honest sizing — we don't oversell systems you don't need." />
              <ValueBlock title="Innovation" text="We stay current with the latest panel and battery technology suited to local conditions." />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy">History</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Founded in Freetown, we've grown from a single installation crew to a
              team serving households, schools, and clinics across the country.
            </p>
            <img
              src={ourTeam}
              alt="Team working on a solar installation"
              className="mt-4 w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

    </>
  )
}
