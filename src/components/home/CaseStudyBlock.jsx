import { CASE } from '../../data/home'
import SectionHead from '../ui/SectionHead'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Tick from '../ui/Tick'

/** Before / after story + refund commitment. Used on Home (compact) and on /case-study. */
export default function CaseStudyBlock({ showHead = true, bg = 'bg-navy' }) {
  return (
    <section className={`px-5 py-16 ${bg}`}>
      <div className="mx-auto max-w-5xl">
        {showHead && <SectionHead eyebrow="Most challenging delivery" title="₹25 lakh spent. No result." text={CASE.client} light />}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/15">
            <p className="mb-4 inline-block rounded-full bg-red-500/15 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-red-300">Before</p>
            <ul className="space-y-3 text-blue-50">{CASE.bad.map(t => <li key={t} className="flex gap-3"><span className="text-red-300">✕</span>{t}</li>)}</ul>
          </div>
          <div className="rounded-xl bg-white p-6 text-slate-700">
            <p className="mb-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-emerald-700">After · Smart ITBox</p>
            <ul className="space-y-3">{CASE.good.map(t => <li key={t} className="flex gap-3"><Tick />{t}</li>)}</ul>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-5 sm:flex-row">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-brand text-navy"><Icon name="shield" size={24} /></span>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-display text-lg font-medium text-white">Written commitment. 100% refund.</h3>
            <p className="text-sm text-blue-100">We back our work in writing — ask about your project.</p>
          </div>
          <Button to="/contact">Talk to us</Button>
        </div>
      </div>
    </section>
  )
}
