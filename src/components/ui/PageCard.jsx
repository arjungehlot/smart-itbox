import { Link } from 'react-router-dom'
import Icon from './Icon'
import { card } from './styles'
import { pagePath } from '../../data/pages'

export default function PageCard({ page }) {
  return (
    <Link to={pagePath(page)} className={`${card} group flex flex-col p-5 transition hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-md`}>
      <div className="flex items-start justify-between">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-slate-100 text-navy transition group-hover:bg-navy group-hover:text-white"><Icon name={page.icon} size={20} /></span>
        {page.tag && <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${page.soon ? 'bg-brand/20 text-navy' : 'bg-slate-100 text-slate-600'}`}>{page.tag}</span>}
      </div>
      <h3 className="mt-4 font-display text-[17px] font-medium text-navy">{page.title}</h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-slate-500">{page.line}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-all group-hover:gap-2.5">Learn more <Icon name="arrow" size={15} /></span>
    </Link>
  )
}
