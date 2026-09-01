export default function TeamCard({ img, name, role }) {
  return (
    <div className="text-center">
      <img src={img} alt={name} className="mx-auto h-32 w-32 rounded-full object-cover" />
      <p className="mt-3 font-display text-sm font-semibold text-navy">{name}</p>
      <p className="text-xs text-muted">{role}</p>
    </div>
  )
}
