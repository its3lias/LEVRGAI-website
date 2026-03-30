export default function SectionLabel({ text }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <span className="w-8 h-px bg-brand-red" />
      <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">{text}</span>
      <span className="w-8 h-px bg-brand-red" />
    </div>
  )
}
