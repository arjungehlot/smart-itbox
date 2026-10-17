import { Link } from 'react-router-dom'
import Icon from './Icon'
import IconTile, { TONES } from './IconTile'
import { pagePath } from '../../data/pages'

export default function PageCard({ page }) {
  const t = TONES[page.tone || 'blue']
  return (
    <Link to={pagePath(page)} className={`group flex h-full flex-col rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 ${t.card}`}>
      <div className="flex items-start justify-between">
        <IconTile name={page.icon} tone={page.tone} />
        {page.tag && <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${page.soon ? 'bg-brand text-navy' : 'bg-white/80 text-slate-600'}`}>{page.tag}</span>}
      </div>
      <h3 className="mt-5 font-display text-[17px] font-medium text-navy">{page.title}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600">{page.line}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-all group-hover:gap-2.5">Learn more <Icon name="arrow" size={15} /></span>
    </Link>
  )
}
