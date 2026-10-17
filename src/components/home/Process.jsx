import { PROCESS } from '../../data/home'
import SectionHead from '../ui/SectionHead'
import { card } from '../ui/styles'

export default function Process({ bg = 'bg-slate-50' }) {
  return (
    <section className={`px-5 py-16 ${bg}`}>
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="How we work" title="Six steps. Live in 0–6 weeks." />
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {PROCESS.map(([t, d], i) => (
            <li key={t} className={`${card} p-4`}>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-navy text-xs font-medium text-white">{i + 1}</span>
              <p className="mt-3 text-sm font-medium text-navy">{t}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
