import { STATS } from '../../data/home'
import { waLink } from '../../utils/whatsapp'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import IconTile, { TONES } from '../ui/IconTile'
import AutomationVisual from './AutomationVisual'

export default function Intro() {
  return (
    <section id="intro" className="relative scroll-mt-16 overflow-hidden border-b border-slate-200 bg-slate-50 px-5 py-14 sm:py-16">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-navy/[.04]" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-brand/10" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal from="left">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />Smart ITBox · Make IT Smart
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-navy sm:text-5xl">
              We fix the operations <span className="underline decoration-brand decoration-[5px] underline-offset-[10px]">others couldn’t.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              Complicated. Challenging. Scattered. We turn it into one automated system your team actually uses.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/contact" size="lg">Book a Free Demo <Icon name="arrow" size={17} /></Button>
              <Button href={waLink()} target="_blank" rel="noreferrer" variant="outline" size="lg">Chat on WhatsApp</Button>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
              {['Google Sheets automation', 'WhatsApp AI chatbot', 'MERN custom systems'].map(t => <li key={t} className="flex items-center gap-1.5"><Icon name="check" size={15} className="text-emerald-600" />{t}</li>)}
            </ul>
          </Reveal>

          <Reveal from="right" delay={150}><AutomationVisual /></Reveal>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {STATS.map(({ icon, tone, value, label }, i) => (
            <Reveal key={label} delay={i * 90} className={`group flex items-center gap-3.5 rounded-2xl border p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${TONES[tone].card}`}>
              <IconTile name={icon} tone={tone} />
              <div>
                <dt className="font-display text-2xl font-semibold leading-none text-navy">{value}</dt>
                <dd className="mt-1 text-[13px] text-slate-500">{label}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
