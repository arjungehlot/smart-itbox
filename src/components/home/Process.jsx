import { PROCESS } from '../../data/home'
import SectionHead from '../ui/SectionHead'
import IconTile, { TONES, toneAt } from '../ui/IconTile'
import Reveal from '../ui/Reveal'

const ICONS = ['eye', 'bulb', 'code', 'check', 'trend', 'users']

export default function Process({ bg = 'bg-slate-50' }) {
  return (
    <section className={`px-5 py-16 ${bg}`}>
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="How we work" title="Six steps. Live in 0–6 weeks." />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {PROCESS.map(([t, d], i) => {
            const tone = toneAt(i + 2)
            return (
              <Reveal as="li" key={t} delay={i * 80} className={`group rounded-2xl border p-4 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 ${TONES[tone].card}`}>
                <IconTile name={ICONS[i]} tone={tone} size="sm" />
                <p className="mt-3 text-[11px] font-medium uppercase tracking-widest text-slate-400">Step {i + 1}</p>
                <p className="text-sm font-medium text-navy">{t}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{d}</p>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
