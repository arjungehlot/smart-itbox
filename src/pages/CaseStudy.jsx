import PageHero from '../components/ui/PageHero'
import CaseStudyBlock from '../components/home/CaseStudyBlock'
import CtaBand from '../components/home/CtaBand'
import { card } from '../components/ui/styles'

const FACTS = [['₹25 lakh', 'spent on coaches & gurus'], ['0', 'results delivered by them'], ['100%', 'written refund commitment'], ['0', 'additional hires needed']]

export default function CaseStudy() {
  return (
    <>
      <PageHero eyebrow="Case study" title="From ₹25 lakh wasted to a working system" text="CT/PT manufacturer · Dehradun" />
      <section className="bg-white px-5 py-12">
        <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-3 lg:grid-cols-4">
          {FACTS.map(([v, l]) => <div key={l} className={`${card} p-5 text-center`}><dt className="font-display text-2xl font-semibold text-navy">{v}</dt><dd className="mt-1 text-sm text-slate-500">{l}</dd></div>)}
        </dl>
      </section>
      <CaseStudyBlock showHead={false} />
      <CtaBand />
    </>
  )
}
