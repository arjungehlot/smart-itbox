import { STORY, FACTS, MISSION, VISION, JOURNEY, PRINCIPLES, TEAM } from '../data/about'
import PageHero from '../components/ui/PageHero'
import SectionHead from '../components/ui/SectionHead'
import Reveal from '../components/ui/Reveal'
import CtaBand from '../components/home/CtaBand'
import { card } from '../components/ui/styles'
import IconTile, { TONES, toneAt } from '../components/ui/IconTile'

const initials = n => n.split(' ').map(w => w[0]).slice(0, 2).join('')

export default function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Technology that adapts to your business." text="Not the other way round. Smart ITBox — Make IT Smart." />

      {/* Story + facts */}
      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
          <Reveal from="left" className="space-y-4 text-slate-600 lg:col-span-3">
            <h2 className="font-display text-2xl font-semibold text-navy">Our story</h2>
            {STORY.map(p => <p key={p} className="leading-relaxed">{p}</p>)}
          </Reveal>
          <Reveal as="dl" from="right" className={`${card} divide-y divide-slate-200 lg:col-span-2`}>
            {FACTS.map(([k, v]) => <div key={k} className="flex justify-between gap-4 px-5 py-3.5 text-sm"><dt className="text-slate-500">{k}</dt><dd className="text-right font-medium text-navy">{v}</dd></div>)}
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-slate-50 px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {[['target', 'Our mission', MISSION, 'blue'], ['eye', 'Our vision', VISION, 'violet']].map(([i, t, d, tone], n) => (
            <Reveal key={t} delay={n * 120} className={`group rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 ${TONES[tone].card}`}>
              <IconTile name={i} tone={tone} size="lg" />
              <h3 className="mt-5 font-display text-xl font-medium text-navy">{t}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHead eyebrow="Our journey" title="From the factory floor to Smart ITBox" />
          <ol className="relative ml-3 border-l border-slate-200">
            {JOURNEY.map(([y, t, d], n) => (
              <Reveal as="li" key={y} delay={n * 60} from="left" className="relative pb-8 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-navy ring-1 ring-slate-300" />
                <p className="text-xs font-medium tracking-widest text-slate-400">{y}</p>
                <h3 className="font-display text-base font-medium text-navy">{t}</h3>
                <p className="mt-1 text-sm text-slate-600">{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="How we work" title="What we stand for" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PRINCIPLES.map(([t, d], n) => {
              const tone = toneAt(n + 3)
              return (
                <Reveal key={t} delay={n * 80} className={`group rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 ${TONES[tone].card}`}>
                  <IconTile name={['bulb', 'code', 'shield', 'users', 'trend'][n]} tone={tone} />
                  <h3 className="mt-4 font-display text-base font-medium text-navy">{t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{d}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHead eyebrow="Leadership" title="The people behind Smart ITBox" />
          <div className="grid gap-4 md:grid-cols-3">
            {TEAM.map(([n, r, d], k) => (
              <Reveal key={n} delay={k * 110} className={`group rounded-2xl border p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 ${TONES[toneAt(k * 3)].card}`}>
                <IconTile text={initials(n)} tone={toneAt(k * 3)} size="lg" className="!h-16 !w-16 !rounded-full" />
                <h3 className="mt-4 font-display text-lg font-medium text-navy">{n}</h3>
                <p className="text-sm font-medium text-navy-2">{r}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
