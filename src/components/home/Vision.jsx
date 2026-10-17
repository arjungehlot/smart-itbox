import { Link } from 'react-router-dom'
import { card } from '../ui/styles'
import Tick from '../ui/Tick'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'

export default function Vision() {
  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-5">
        <Reveal from="left" className="md:col-span-3">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[.16em] text-navy-2"><span className="h-0.5 w-6 bg-brand" />Our vision</p>
          <blockquote className="mt-4 font-display text-3xl font-medium leading-snug tracking-tight text-navy sm:text-[34px]">“Every business is unique. It deserves a unique solution.”</blockquote>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {['100% custom made', 'Top-notch tech support', 'PAN India + abroad'].map(t => <li key={t} className="flex gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm text-navy"><Tick />{t}</li>)}
          </ul>
        </Reveal>
        <Reveal from="right" delay={120} className={`${card} p-6 text-center md:col-span-2`}>
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-navy font-display text-xl font-medium text-white">SS</div>
          <h3 className="mt-4 font-display text-lg font-medium text-navy">Shalender Singh</h3>
          <p className="text-sm text-slate-500">Founder & CEO · 10+ years in manufacturing</p>
          <Link to="/about" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy hover:gap-3 transition-all">Our story <Icon name="arrow" size={15} /></Link>
        </Reveal>
      </div>
    </section>
  )
}
