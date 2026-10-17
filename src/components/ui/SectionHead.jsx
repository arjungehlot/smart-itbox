export default function SectionHead({ eyebrow, title, text, align = 'center', light = false, as: Tag = 'h2' }) {
  return (
    <div className={`mb-10 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[.16em] ${light ? 'text-blue-200' : 'text-navy-2'}`}>
          <span className="h-0.5 w-6 bg-brand" />{eyebrow}
        </p>
      )}
      <Tag className={`mt-3 font-display text-3xl font-semibold tracking-tight sm:text-[34px] ${light ? 'text-white' : 'text-navy'}`}>{title}</Tag>
      {text && <p className={`mt-3 ${light ? 'text-blue-100' : 'text-slate-600'}`}>{text}</p>}
    </div>
  )
}
