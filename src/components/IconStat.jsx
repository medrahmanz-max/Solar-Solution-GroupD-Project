export default function IconStat({ icon, title, text }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy text-2xl text-gold">
        {icon}
      </div>
      <p className="mt-3 font-display text-base font-semibold text-navy">{title}</p>
      <p className="mt-1 text-sm text-muted">{text}</p>
    </div>
  )
}
