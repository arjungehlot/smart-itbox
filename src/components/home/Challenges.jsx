import { PAINS } from '../../data/home'
import { card } from '../ui/styles'

export default function Challenges() {
  return (
    <section className="bg-slate-50 px-5 py-14">
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
        {PAINS.map(([t, d], i) => (
          <div key={t} className={`${card} p-6`}>
            <span className="text-xs font-medium text-slate-400">0{i + 1}</span>
            <h3 className="mt-1 font-display text-xl font-medium text-navy">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
