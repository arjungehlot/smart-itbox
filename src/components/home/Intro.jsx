import { STATS } from '../../data/home'
import { waLink } from '../../utils/whatsapp'
import Button from '../ui/Button'
import Icon from '../ui/Icon'

export default function Intro() {
  return (
    <section id="intro" className="scroll-mt-16 border-b border-slate-200 bg-slate-50 px-5 py-14 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />Smart ITBox · Make IT Smart
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-navy sm:text-[52px]">
            We fix the operations <span className="underline decoration-brand decoration-[5px] underline-offset-[10px]">others couldn’t.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Complicated. Challenging. Scattered. We turn it into one automated system your team actually uses.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button to="/contact" size="lg">Book a Free Demo <Icon name="arrow" size={17} /></Button>
            <Button href={waLink()} target="_blank" rel="noreferrer" variant="outline" size="lg">Chat on WhatsApp</Button>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {STATS.map(({ icon, value, label }) => (
            <div key={label} className="flex items-center gap-3.5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy text-white"><Icon name={icon} size={20} /></span>
              <div>
                <dt className="font-display text-2xl font-semibold leading-none text-navy">{value}</dt>
                <dd className="mt-1 text-[13px] text-slate-500">{label}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
