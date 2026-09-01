import SectionBanner from '../components/SectionBanner.jsx'
import ContactForm from '../components/ContactForm.jsx'
import FAQItem from '../components/FAQItem.jsx'

const faqs = [
  { q: "How do you measure oil (or usage) beforehand?", a: "We visit your property and log your typical daily power usage before proposing a system." },
  { q: "How does maintenance work?", a: "Scheduled visits plus fast-response callouts if something needs attention sooner." },
  { q: "How can I get in touch?", a: "Use the form on this page, or call/email us directly — we reply within one business day." },
  { q: "What's your typical turnaround?", a: "Most residential systems are installed within 1–3 days of the site visit and quote." },
]

export default function Contact() {
  return (
    <>
      <SectionBanner title="Get in Touch With Us" tone="navy" />

      <section className="bg-navy">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="text-center text-xl font-bold text-white">Contact Form</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold text-navy">Contact Info</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>12 Wellington Road, Freetown, Sierra Leone</li>
              <li>+232 99 753125</li>
              <li>solarsolutions.sl@gmail.com</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs text-white hover:bg-band">f</a>
              <a href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs text-white hover:bg-band">ig</a>
              <a href="#" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs text-white hover:bg-band">in</a>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">Interactive Map</h2>
            <div className="mt-4 flex h-48 items-center justify-center overflow-hidden rounded-lg border border-black/10">
              <iframe
                title="Solar Solutions location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49030.7134996896!2d-13.198770852675349!3d8.439978165458815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf04e803cb983c27%3A0x23573a5c3c13b9!2sWellington%2C%20Freetown!5e0!3m2!1sen!2ssl!4v1788271991438!5m2!1sen!2ssl"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-center text-xl font-bold text-navy">FAQ</h2>
          <div className="mt-6">
            {faqs.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
