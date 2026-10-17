import { byGroup, GROUPS } from '../data/pages'
import PageHero from '../components/ui/PageHero'
import PageCard from '../components/ui/PageCard'
import CtaBand from '../components/home/CtaBand'
import Reveal from '../components/ui/Reveal'

/** /solutions and /products */
export default function Listing({ group }) {
  const g = GROUPS[group]
  return (
    <>
      <PageHero eyebrow={g.label} title={g.title} text={g.text} />
      <section className="bg-slate-50 px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {byGroup(group).map((p, i) => <Reveal key={p.slug} delay={i * 80} className="h-full"><PageCard page={p} /></Reveal>)}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
