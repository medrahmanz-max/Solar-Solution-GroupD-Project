/** Full-width colored header band used at the top of every inner page,
 *  matching the "OUR SOLAR SOLUTIONS" / "WHO WE ARE" style banners. */
export default function SectionBanner({ title, tone = "navy" }) {
  const bg = tone === "navy" ? "bg-navy" : "bg-band"
  return (
    <section className={"bg-navy h-64 w-full text-center text-white p-20 border-b" }>
      <h1 className="text-3xl font-bold tracking-wide md:text-4xl">{title}</h1>
    </section>
  )
}
