import { PAINS } from '../../data/home'
import IconTile, { TONES } from '../ui/IconTile'
import Reveal from '../ui/Reveal'

export default function Challenges() {
  return (
    <section className="bg-slate-50 px-5 py-14">
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
        {PAINS.map(([t, d, icon, tone], i) => (
          <Reveal key={t} delay={i * 100} className={`group rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 ${TONES[tone].card}`}>
            <IconTile name={icon} tone={tone} size="lg" />
            <h3 className="mt-5 font-display text-xl font-medium text-navy">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
