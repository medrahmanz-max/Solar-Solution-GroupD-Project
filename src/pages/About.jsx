import SectionBanner from '../components/SectionBanner.jsx'
import TeamCard from '../components/TeamCard.jsx'
import ValueBlock from '../components/ValueBlock.jsx'

import fatmata from "../assets/images/fatmata.jpg.jpg"
import molia from "../assets/images/molia.jpg.jpg"
import mamusu from "../assets/images/mamusu.jpg"
import ramadan from "../assets/images/ramadan.jpg.jpg"
import ourTeam from "../assets/images/ourTeam.jpg"


const team = [
  { name: "Fatmata Sesay", role: "CEO", img: fatmata},
  { name: "Ibrahim Ramadan ", role: "Installation Officer", img: molia},
  { name: "Mamusu fofanah", role: "Customer Care", img: mamusu},
  { name: "Molia mansaray", role: "Staff", img: ramadan },
]

export default function About() {
  return (
    <>
      <SectionBanner title="Who We Are & Our Mission" tone="navy" />

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

      <section className="bg-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:grid-cols-2">
          <ValueBlock title="Company Mission" text="Make reliable, clean power a normal part of everyday life for homes and businesses." />
          <ValueBlock title="Sustainability" text="Every system we install is built to reduce reliance on diesel generators and the grid." />
          <ValueBlock title="Clean Energy" text="We source equipment rated for tropical climates and long-term reliability." />
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-center text-2xl font-bold text-navy">Our Team</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {team.map((t) => <TeamCard key={t.name} {...t} />)}
          </div>
        </div>
      </section>

     
    </>
  )
}
