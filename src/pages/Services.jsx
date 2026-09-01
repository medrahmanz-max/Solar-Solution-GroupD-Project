import SectionBanner from '../components/SectionBanner.jsx'
import ServiceRow from '../components/ServiceRow.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import service1 from "../assets/images/service1.jpg"
import maintainance from "../assets/images/maintainance.jpg"
import service2 from "../assets/images/service2.jpg"
import ramadan from "../assets/images/ramadan.jpg.jpg"



export default function Services() {
  return (
    <>
      <SectionBanner title="Our Solar Solutions" />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl divide-y divide-black/5 px-6">
          <ServiceRow
            tag="Home Installs"
            title="Residential"
            text="Right-sized rooftop solar for your household, from a starter kit to full off-grid independence."
            img={service1}
          />
          <ServiceRow
            tag="Business"
            title="Commercial"
            text="Solar arrays designed around your operating hours, for shops, offices, and institutions."
            img={maintainance}
            reverse
          />
          <ServiceRow
            tag="Batteries"
            title="Solar Storage"
            text="Battery banks sized to keep essential loads running through the night and the rains."
            img={service2}
          />
          <ServiceRow
            tag="Support"
            title="Maintenance"
            text="Scheduled servicing and fast-response repairs for systems we installed or anyone else's."
            img={ramadan}
            reverse
          />
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

    </>
  )
}
