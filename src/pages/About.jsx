import { STORY, FACTS, MISSION, VISION, JOURNEY, PRINCIPLES, TEAM } from '../data/about'
import PageHero from '../components/ui/PageHero'
import SectionHead from '../components/ui/SectionHead'
import Icon from '../components/ui/Icon'
import CtaBand from '../components/home/CtaBand'
import { card } from '../components/ui/styles'

const initials = n => n.split(' ').map(w => w[0]).slice(0, 2).join('')

export default function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Technology that adapts to your business." text="Not the other way round. Smart ITBox — Make IT Smart." />

      {/* Story + facts */}
      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
          <div className="space-y-4 text-slate-600 lg:col-span-3">
            <h2 className="font-display text-2xl font-semibold text-navy">Our story</h2>
            {STORY.map(p => <p key={p} className="leading-relaxed">{p}</p>)}
          </div>
          <dl className={`${card} divide-y divide-slate-200 lg:col-span-2`}>
            {FACTS.map(([k, v]) => <div key={k} className="flex justify-between gap-4 px-5 py-3.5 text-sm"><dt className="text-slate-500">{k}</dt><dd className="text-right font-medium text-navy">{v}</dd></div>)}
          </dl>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-slate-50 px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {[['target', 'Our mission', MISSION], ['eye', 'Our vision', VISION]].map(([i, t, d]) => (
            <div key={t} className={`${card} p-7`}>
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-white"><Icon name={i} size={21} /></span>
              <h3 className="mt-4 font-display text-lg font-medium text-navy">{t}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHead eyebrow="Our journey" title="From the factory floor to Smart ITBox" />
          <ol className="relative ml-3 border-l border-slate-200">
            {JOURNEY.map(([y, t, d]) => (
              <li key={y} className="relative pb-8 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-navy ring-1 ring-slate-300" />
                <p className="text-xs font-medium tracking-widest text-slate-400">{y}</p>
                <h3 className="font-display text-base font-medium text-navy">{t}</h3>
                <p className="mt-1 text-sm text-slate-600">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="How we work" title="What we stand for" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PRINCIPLES.map(([t, d]) => (
              <div key={t} className={`${card} p-5`}>
                <span className="mb-3 block h-0.5 w-6 bg-brand" />
                <h3 className="font-display text-base font-medium text-navy">{t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHead eyebrow="Leadership" title="The people behind Smart ITBox" />
          <div className="grid gap-4 md:grid-cols-3">
            {TEAM.map(([n, r, d]) => (
              <div key={n} className={`${card} p-6 text-center`}>
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-navy font-display text-lg font-medium text-white">{initials(n)}</div>
                <h3 className="mt-4 font-display text-lg font-medium text-navy">{n}</h3>
                <p className="text-sm text-navy-2">{r}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
