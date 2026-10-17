import PageHero from '../components/ui/PageHero'
import CaseStudyBlock from '../components/home/CaseStudyBlock'
import Reveal from '../components/ui/Reveal'
import CtaBand from '../components/home/CtaBand'
import IconTile, { TONES } from '../components/ui/IconTile'

const FACTS = [
  ['₹25 lakh', 'spent on coaches & gurus', 'trend', 'rose'],
  ['0', 'results delivered by them', 'x', 'amber'],
  ['100%', 'written refund commitment', 'shield', 'emerald'],
  ['0', 'additional hires needed', 'users', 'blue']
]
const STEPS = [
  ['The problem', 'Scattered operations, ₹25 lakh spent on advice, nothing that worked on the shop floor.', 'target', 'rose'],
  ['Our commitment', 'A written 100% refund if we did not deliver. Risk sat with us, not the client.', 'shield', 'emerald'],
  ['The result', 'A working system, now in pilot mode with the existing team and no extra hiring.', 'check', 'blue']
]

export default function CaseStudy() {
  return (
    <>
      <PageHero eyebrow="Case study" title="From ₹25 lakh wasted to a working system" text="CT/PT manufacturer · Dehradun" />
      <section className="bg-white px-5 py-14">
        <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
          {FACTS.map(([v, l, icon, tone], i) => (
            <Reveal key={l} delay={i * 90} className={`group rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 ${TONES[tone].card}`}>
              <IconTile name={icon} tone={tone} />
              <dt className="mt-4 font-display text-3xl font-medium text-navy">{v}</dt>
              <dd className="mt-1 text-sm text-slate-600">{l}</dd>
            </Reveal>
          ))}
        </dl>
      </section>
      <section className="bg-slate-50 px-5 py-14">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {STEPS.map(([t, d, icon, tone], i) => (
            <Reveal key={t} delay={i * 100} className={`group rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 ${TONES[tone].card}`}>
              <IconTile name={icon} tone={tone} size="lg" />
              <p className="mt-5 text-[11px] font-medium uppercase tracking-widest text-slate-400">0{i + 1}</p>
              <h3 className="font-display text-lg font-medium text-navy">{t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <CaseStudyBlock showHead={false} />
      <CtaBand />
    </>
  )
}
