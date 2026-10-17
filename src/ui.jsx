import { CONTACT } from './data'

export const WA = (t = "Hello Smart ITBox! I'd like to know more about your services.") => `https://wa.me/${CONTACT.wa}?text=${encodeURIComponent(t)}`

const P = {
  sheet: 'M4 4h16v16H4zM4 10h16M4 15h16M10 4v16',
  chat: 'M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.5A8 8 0 1 1 21 12zM8.5 11h7M8.5 14h4',
  code: 'M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14',
  crm: 'M3 17l5-5 4 4 8-9M15 7h5v5',
  erp: 'M3 9l9-6 9 6v11H3zM9 20v-7h6v7',
  check: 'M4 12l5 5L20 6',
  users: 'M16 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM21 20v-1a4 4 0 0 0-3-3.9M16 4.2a3.5 3.5 0 0 1 0 6.6',
  camera: 'M4 8h3l2-3h6l2 3h3v11H4zM12 17a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM8.5 12l2.5 2.5L15.5 9.5',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
  mail: 'M3 6h18v12H3zM3 7l9 7 9-7',
  pin: 'M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  left: 'M15 6l-6 6 6 6',
  right: 'M9 6l6 6-6 6',
  down: 'M6 9l6 6 6-6',
  x: 'M6 6l12 12M18 6L6 18',
  menu: 'M4 7h16M4 12h16M4 17h16',
  play: 'M8 5v14l11-7z',
  ext: 'M14 4h6v6M20 4l-9 9M18 14v6H4V6h6'
}
export const Ic = ({ n, s = 20, className = '' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><path d={P[n]} /></svg>
)
export const Tick = () => <Ic n="check" s={18} className="mt-0.5 shrink-0 text-emerald-600" />

export const Btn = ({ href, children, variant = 'y', className = '', ...p }) => {
  const v = {
    y: 'bg-brand text-navy hover:bg-brand-2',
    n: 'bg-navy text-white hover:bg-navy-2',
    o: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
    w: 'border-2 border-white/40 text-white hover:bg-white hover:text-navy'
  }[variant]
  return <a href={href} className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition ${v} ${className}`} {...p}>{children}</a>
}

export const Head = ({ eyebrow, title, light }) => (
  <div className="mb-8 text-center">
    <p className="font-display text-xs font-bold uppercase tracking-[.18em] text-brand">{eyebrow}</p>
    <h2 className={`mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
  </div>
)
