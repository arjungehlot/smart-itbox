import { AWARDS } from '../data/awards'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import IconTile, { TONES, toneAt } from '../components/ui/IconTile'
import Button from '../components/ui/Button'
import CtaBand from '../components/home/CtaBand'
import Icon from '../components/ui/Icon'

function AwardCard({ a, i }) {
  const tone = toneAt(i + 4)
  return (
    <Reveal delay={(i % 3) * 90} className={`group overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 ${TONES[tone].card}`}>
      {a.image && (
        <div className="aspect-[4/3] overflow-hidden bg-white">
          <img src={a.image} alt={a.title} loading="lazy" className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-105" />
        </div>
      )}
      <div className="flex items-start gap-4 p-5">
        <IconTile name="trophy" tone={tone} />
        <div className="min-w-0">
          {a.year && <p className="text-[11px] font-medium uppercase tracking-widest text-slate-400">{a.year}</p>}
          <h3 className="font-display text-[17px] font-medium leading-snug text-navy">{a.title}</h3>
          {a.by && <p className="mt-0.5 text-sm font-medium text-slate-600">{a.by}</p>}
          {a.text && <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{a.text}</p>}
        </div>
      </div>
    </Reveal>
  )
}

export default function Awards() {
  return (
    <>
      <PageHero eyebrow="Library" title="Awards & recognition" text="Honours and appreciation we’ve earned along the way." />
      <section className="bg-slate-50 px-5 py-14">
        <div className="mx-auto max-w-6xl">
          {AWARDS.length ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{AWARDS.map((a, i) => <AwardCard key={a.title + i} a={a} i={i} />)}</div>
          ) : (
            <Reveal className="mx-auto max-w-md rounded-2xl border border-amber-100 bg-amber-50 p-8 text-center">
              <IconTile name="trophy" tone="amber" size="lg" className="mx-auto" />
              <h2 className="mt-5 font-display text-xl font-medium text-navy">Awards are being added</h2>
              <p className="mt-2 text-sm text-slate-600">Our award photos and certificates will appear here very soon.</p>
              <Button to="/contact" className="mt-5">Talk to us <Icon name="arrow" size={16} /></Button>
            </Reveal>
          )}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
