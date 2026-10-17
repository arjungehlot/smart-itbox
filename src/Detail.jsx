import { useState } from 'react'
import { PAGES } from './data'
import { Ic, Tick, Btn, WA } from './ui'

const yt = id => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&rel=0`

export default function Detail({ slug }) {
  const p = PAGES.find(x => x.slug === slug)
  const [played, setPlayed] = useState(true)
  if (!p) return <div className="grid min-h-[60vh] place-items-center pt-16"><Btn href="#/">Back to home</Btn></div>
  const siblings = PAGES.filter(x => x.group === p.group)
  return (
    <main className="pt-16">
      <section className="bg-white px-5 py-10 lg:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          {/* LEFT — video */}
          <div className="overflow-hidden rounded-2xl bg-navy shadow-xl ring-1 ring-slate-200">
            {p.video && played
              ? <iframe key={p.slug} src={yt(p.video)} title={p.title} allow="autoplay; encrypted-media; fullscreen" allowFullScreen className="aspect-video w-full" />
              : <div className="relative">
                  <img src={p.image} alt={p.title} className="aspect-video w-full object-cover" />
                  {p.video && <button onClick={() => setPlayed(true)} className="absolute inset-0 grid place-items-center bg-navy/40"><span className="grid h-16 w-16 place-items-center rounded-full bg-brand text-navy"><Ic n="play" s={28} /></span></button>}
                </div>}
          </div>

          {/* RIGHT — text */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-600">{p.group === 'products' ? 'Product' : 'Solution'}</span>
              {p.soon ? <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-widest text-navy">Coming soon</span> : p.tag && <span className="rounded-full bg-brand/20 px-3 py-1 text-xs font-bold text-navy">{p.tag}</span>}
            </div>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl">{p.title}</h1>
            <p className="mt-3 font-display text-xl font-semibold text-navy-2">{p.line}</p>
            <p className="mt-3 text-slate-600">{p.text}</p>
            {!p.tiles && <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">{p.points.map(t => <li key={t} className="flex gap-2 text-sm font-medium text-slate-700"><Tick />{t}</li>)}</ul>}
            {p.tiles && <div className="mt-5 grid grid-cols-2 gap-3">{p.tiles.map(([a, b]) => <div key={a} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"><b className="block font-display text-lg text-navy">{a}</b><span className="text-sm text-slate-600">{b}</span></div>)}</div>}
            <div className="mt-7 flex flex-wrap gap-3">
              {p.link && <Btn href={p.link} target="_blank" rel="noreferrer" variant="n">Visit {p.link.replace(/^https?:\/\/(www\.)?/, '')} <Ic n="ext" s={16} /></Btn>}
              {p.soon ? <Btn href={WA('Hello! Please notify me when Visiting Card AI launches.')} target="_blank" rel="noreferrer">Notify me on launch</Btn>
                : <Btn href="#/home/contact" variant={p.link ? 'y' : 'n'}>Take a Free Demo <Ic n="arrow" s={16} /></Btn>}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
          <span className="mr-2 text-sm font-semibold text-slate-500">More {p.group}:</span>
          {siblings.map(s => <a key={s.slug} href={`#/p/${s.slug}`} className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${s.slug === slug ? 'border-navy bg-navy text-white' : 'border-slate-300 bg-white text-slate-700 hover:border-navy'}`}>{s.title}</a>)}
          <a href="#/" className="ml-auto text-sm font-semibold text-navy hover:underline">← Home</a>
        </div>
      </section>
    </main>
  )
}
