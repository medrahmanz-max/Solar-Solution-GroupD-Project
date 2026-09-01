import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionBanner from '../components/SectionBanner.jsx'

import ourTeam from "../assets/images/ourTeam.jpg"
import shek from "../assets/images/shek.jpg.jpg"
import service2 from "../assets/images/service1.jpg"
import maintainance from "../assets/images/maintainance.jpg"
import work1 from "../assets/images/work1.jpg"
import work2 from "../assets/images/work2.jpg"
import work3 from "../assets/images/work3.jpg"

const tabs = ["Project Overview", "Focus Areas", "Milestones"]

const projects = [
  {id: 1, img: ourTeam},
  {id: 2, img: shek},
  {id: 3, img: service2},
  {id: 4, img: maintainance},
  {id: 5, img: work1},
  {id: 6, img: work2},
  
  

]
 


export default function Gallery() {
  const [active, setActive] = useState(0)

  return (
    <>
      <section className="bg-white py-14 text-center">
        <h1 className="text-3xl font-bold text-navy md:text-4xl">Our Completed Projects</h1>
        <div className="mt-6 flex justify-center gap-2">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActive(i)}
              className={`rounded-md px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
                active === i ? "bg-gold text-navy" : "bg-cream text-muted hover:bg-cream/70"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <img key={p.id} 
              src={p.img}
               alt={`Completed solar project ${p.id}`} className="h-44 w-full rounded-lg object-cover" />
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-2" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-band" />
            <span className="h-2 w-2 rounded-full bg-black/15" />
            <span className="h-2 w-2 rounded-full bg-black/15" />
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-center">
        <Link
          to="/contact"
          className="inline-block rounded-md bg-gold px-8 py-3 font-display text-sm font-semibold text-navy hover:bg-goldlight"
        >
          Start Your Project
        </Link>
      </section>
    </>
  )
}
