import Icon from './Icon'

/**
 * Colourful “3D” icon tile (solid colours only): white icon, darker bottom edge, soft coloured shadow and a gloss highlight.
 * Pair `tone` with the matching light card background from TONES[tone].card.
 */
export const TONES = {
  blue:    { tile: 'bg-blue-600 border-blue-800 shadow-blue-600/40',       card: 'bg-blue-50 border-blue-100 hover:border-blue-300',       soft: 'bg-blue-100 text-blue-700' },
  emerald: { tile: 'bg-emerald-500 border-emerald-700 shadow-emerald-500/40', card: 'bg-emerald-50 border-emerald-100 hover:border-emerald-300', soft: 'bg-emerald-100 text-emerald-700' },
  violet:  { tile: 'bg-violet-500 border-violet-700 shadow-violet-500/40',  card: 'bg-violet-50 border-violet-100 hover:border-violet-300',  soft: 'bg-violet-100 text-violet-700' },
  orange:  { tile: 'bg-orange-500 border-orange-700 shadow-orange-500/40',  card: 'bg-orange-50 border-orange-100 hover:border-orange-300',  soft: 'bg-orange-100 text-orange-700' },
  rose:    { tile: 'bg-rose-500 border-rose-700 shadow-rose-500/40',        card: 'bg-rose-50 border-rose-100 hover:border-rose-300',        soft: 'bg-rose-100 text-rose-700' },
  cyan:    { tile: 'bg-cyan-500 border-cyan-700 shadow-cyan-500/40',        card: 'bg-cyan-50 border-cyan-100 hover:border-cyan-300',        soft: 'bg-cyan-100 text-cyan-700' },
  amber:   { tile: 'bg-amber-500 border-amber-700 shadow-amber-500/40',     card: 'bg-amber-50 border-amber-100 hover:border-amber-300',     soft: 'bg-amber-100 text-amber-700' },
  indigo:  { tile: 'bg-indigo-600 border-indigo-800 shadow-indigo-600/40',  card: 'bg-indigo-50 border-indigo-100 hover:border-indigo-300',  soft: 'bg-indigo-100 text-indigo-700' },
  teal:    { tile: 'bg-teal-500 border-teal-700 shadow-teal-500/40',        card: 'bg-teal-50 border-teal-100 hover:border-teal-300',        soft: 'bg-teal-100 text-teal-700' },
  pink:    { tile: 'bg-pink-500 border-pink-700 shadow-pink-500/40',        card: 'bg-pink-50 border-pink-100 hover:border-pink-300',        soft: 'bg-pink-100 text-pink-700' }
}
const ORDER = Object.keys(TONES)
export const toneAt = i => ORDER[i % ORDER.length]

const SIZES = { sm: 'h-10 w-10 rounded-xl border-b-[3px]', md: 'h-12 w-12 rounded-2xl border-b-4', lg: 'h-14 w-14 rounded-2xl border-b-4' }
const ICON = { sm: 18, md: 22, lg: 26 }

export default function IconTile({ name, tone = 'blue', size = 'md', text, className = '' }) {
  return (
    <span className={`relative inline-grid shrink-0 place-items-center overflow-hidden text-white shadow-lg ring-1 ring-inset ring-white/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:-rotate-3 ${SIZES[size]} ${TONES[tone].tile} ${className}`}>
      <span className="pointer-events-none absolute -top-3 left-1 h-6 w-10 -rotate-12 rounded-full bg-white/25" />
      {text ? <b className="relative font-display text-base font-medium">{text}</b> : <Icon name={name} size={ICON[size]} className="relative" />}
    </span>
  )
}
