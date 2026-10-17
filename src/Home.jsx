import { useState } from 'react'
import * as D from './data'
import Carousel from './Carousel'
import { Ic, Tick, Btn, Head, WA } from './ui'

const LOGOS = Object.values(import.meta.glob('./clients/*.png', { eager: true, import: 'default' }))
const card = 'rounded-2xl border border-slate-200 bg-white'

const Intro = () => (
  <section id="intro" className="scroll-mt-16 bg-white px-5 pb-10 pt-20">
    <div className="mx-auto max-w-4xl text-center">
      <p className="font-display text-xs font-bold uppercase tracking-[.18em] text-brand">Smart ITBox · Make IT Smart</p>
      <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-6xl">We fix the operations <span className="text-brand">others couldn’t.</span></h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">Complicated. Challenging. Scattered. We turn it into one automated system your team actually uses.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Btn href="#/home/contact" className="px-7 py-3 text-base">Book a Free Demo <Ic n="arrow" s={18} /></Btn>
        <Btn href={WA()} variant="o" className="px-7 py-3 text-base" target="_blank" rel="noreferrer">Chat on WhatsApp</Btn>
      </div>
    </div>
    <dl className="mx-auto mt-14 grid max-w-5xl grid-cols-2 divide-slate-200 overflow-hidden rounded-2xl bg-navy sm:grid-cols-4 sm:divide-x">
      {D.STATS.map(([n, l]) => (
        <div key={l} className="px-4 py-6 text-center"><dt className="font-display text-3xl font-extrabold text-brand sm:text-4xl">{n}</dt><dd className="mt-1 text-sm text-blue-100">{l}</dd></div>
      ))}
    </dl>
  </section>
)

const Clients = () => LOGOS.length ? (
  <section className="bg-white py-10">
    <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[.18em] text-slate-500">Trusted across India and abroad</p>
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
        {[...LOGOS, ...LOGOS].map((s, i) => <span key={i} className="grid h-20 w-40 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white p-4"><img src={s} alt="" loading="lazy" className="max-h-full max-w-full object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0" /></span>)}
      </div>
    </div>
  </section>
) : null

const Pain = () => (
  <section className="bg-slate-50 px-5 py-16">
    <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
      {D.PAINS.map(([t, d], i) => (
        <div key={t} className={`${card} border-t-4 border-t-brand p-6`}>
          <span className="font-display text-sm font-bold text-brand">0{i + 1}</span>
          <h3 className="mt-1 font-display text-2xl font-bold text-navy">{t}</h3>
          <p className="mt-2 text-slate-600">{d}</p>
        </div>
      ))}
    </div>
  </section>
)

const PageCard = ({ p }) => (
  <a href={`#/p/${p.slug}`} className={`${card} group flex flex-col p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-lg`}>
    <div className="flex items-start justify-between">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-brand"><Ic n={p.icon} s={24} /></span>
      {(p.tag || p.soon) && <span className={`rounded-full px-3 py-1 text-xs font-bold ${p.soon ? 'bg-brand text-navy' : 'bg-slate-100 text-slate-600'}`}>{p.tag}</span>}
    </div>
    <h3 className="mt-4 font-display text-xl font-bold text-navy">{p.title}</h3>
    <p className="mt-1.5 flex-1 text-sm text-slate-600">{p.line}</p>
    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:gap-3">Watch & read <Ic n="arrow" s={16} /></span>
  </a>
)

const List = ({ id, eyebrow, title, group, bg, cols }) => (
  <section id={id} className={`scroll-mt-16 px-5 py-16 ${bg}`}>
    <div className="mx-auto max-w-6xl">
      <Head eyebrow={eyebrow} title={title} />
      <div className={`grid gap-4 sm:grid-cols-2 ${cols}`}>{D.PAGES.filter(p => p.group === group).map(p => <PageCard key={p.slug} p={p} />)}</div>
    </div>
  </section>
)

const CaseStudy = () => (
  <section id="casestudy" className="scroll-mt-16 bg-navy px-5 py-16 text-white">
    <div className="mx-auto max-w-6xl">
      <Head eyebrow="Most challenging delivery" title="₹25 lakh spent. No result." light />
      <p className="-mt-5 mb-8 text-center text-blue-200">{D.CASE.client}</p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/15">
          <p className="mb-4 inline-block rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-300">Before</p>
          <ul className="space-y-3">{D.CASE.bad.map(t => <li key={t} className="flex gap-3"><span className="font-bold text-red-400">✕</span>{t}</li>)}</ul>
        </div>
        <div className="rounded-2xl bg-white p-6 text-slate-800">
          <p className="mb-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700">After · Smart ITBox</p>
          <ul className="space-y-3">{D.CASE.good.map(t => <li key={t} className="flex gap-3"><Tick />{t}</li>)}</ul>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl bg-brand p-6 text-navy sm:flex-row">
        <Ic n="shield" s={44} className="shrink-0" />
        <div className="flex-1 text-center sm:text-left"><h3 className="font-display text-2xl font-extrabold">Written commitment. 100% refund.</h3><p className="text-sm font-medium">We back our work in writing — ask about your project.</p></div>
        <Btn href="#/home/contact" variant="n">Talk to us</Btn>
      </div>
    </div>
  </section>
)

const About = () => (
  <section id="about" className="scroll-mt-16 bg-white px-5 py-16">
    <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-5">
      <div className="md:col-span-3">
        <p className="font-display text-xs font-bold uppercase tracking-[.18em] text-brand">Our vision</p>
        <blockquote className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">“Every business is unique. It deserves a unique solution.”</blockquote>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {['100% custom made', 'Top-notch tech support', 'PAN India + abroad'].map(t => <li key={t} className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-navy"><Tick />{t}</li>)}
        </ul>
      </div>
      <div className={`${card} p-6 text-center md:col-span-2`}>
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-navy font-display text-2xl font-extrabold text-brand ring-4 ring-brand ring-offset-4">SS</div>
        <h3 className="mt-5 font-display text-xl font-bold text-navy">Shalender Singh</h3>
        <p className="text-sm font-semibold text-slate-500">Founder & CEO · 10+ yrs in manufacturing</p>
        <Btn href={WA('Hello! I would like to speak with Shalender Singh.')} target="_blank" rel="noreferrer" className="mt-5">Talk to our team</Btn>
      </div>
    </div>
  </section>
)

const Process = () => (
  <section className="bg-slate-50 px-5 py-16">
    <div className="mx-auto max-w-6xl">
      <Head eyebrow="How we work" title="Six steps. Live in 0–6 weeks." />
      <ol className="grid grid-cols-2 gap-3 md:grid-cols-6">
        {D.PROCESS.map((t, i) => <li key={t} className={`${card} p-4 text-center`}><span className="font-display text-2xl font-extrabold text-brand">0{i + 1}</span><p className="mt-1 text-sm font-semibold text-navy">{t}</p></li>)}
      </ol>
    </div>
  </section>
)

const Reviews = () => (
  <section className="bg-white px-5 py-16">
    <div className="mx-auto max-w-6xl">
      <Head eyebrow="Testimonials" title="What clients say" />
      <div className="grid gap-4 md:grid-cols-3">
        {D.REVIEWS.map(([n, q]) => <figure key={n} className={`${card} p-6`}><p className="tracking-widest text-brand">★★★★★</p><blockquote className="mt-3 text-slate-700">“{q}”</blockquote><figcaption className="mt-4 text-sm font-bold text-navy">{n}</figcaption></figure>)}
      </div>
    </div>
  </section>
)

function Faqs() {
  const [o, setO] = useState(0)
  return (
    <section className="bg-slate-50 px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <Head eyebrow="FAQs" title="Quick answers" />
        <div className="space-y-3">
          {D.FAQS.map(([q, a], i) => (
            <div key={q} className={`${card} ${o === i ? 'border-brand' : ''}`}>
              <button aria-expanded={o === i} onClick={() => setO(o === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display font-semibold text-navy">{q}<span className={`text-2xl leading-none text-brand transition ${o === i ? 'rotate-45' : ''}`}>+</span></button>
              {o === i && <p className="px-5 pb-4 text-slate-600">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const inp = 'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-navy focus:ring-4 focus:ring-navy/10'
function Contact() {
  const [s, setS] = useState({ n: '', e: '', p: '', c: '', m: '', sum: '', i: [] }), [err, setErr] = useState(''), [done, setDone] = useState(false)
  const [x] = useState(() => [2 + Math.floor(Math.random() * 8), 2 + Math.floor(Math.random() * 8)])
  const set = k => ev => setS({ ...s, [k]: ev.target.value })
  const tog = v => setS({ ...s, i: s.i.includes(v) ? s.i.filter(z => z !== v) : [...s.i, v] })
  const sub = ev => {
    ev.preventDefault()
    if (+s.sum !== x[0] + x[1]) return setErr('Wrong answer, please try again.')
    if (!s.i.length) return setErr('Select at least one interest.')
    window.open(WA(`Hello Smart ITBox! I'm ${s.n} from ${s.c}.\nEmail: ${s.e}\nPhone: ${s.p}\nInterested in: ${s.i.join(', ')}\n${s.m}`), '_blank'); setErr(''); setDone(true)
  }
  const L = ({ children }) => <label className="mb-1 block text-xs font-semibold text-slate-600">{children}</label>
  return (
    <section id="contact" className="scroll-mt-16 bg-navy px-5 py-16">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl bg-white md:grid-cols-5">
        <div className="bg-navy-2 p-8 text-white md:col-span-2">
          <p className="font-display text-xs font-bold uppercase tracking-[.18em] text-brand">Let’s talk</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight">Tell us what’s broken.</h2>
          <p className="mt-2 text-blue-100">We’ll show you the fix — free demo.</p>
          <div className="mt-8 space-y-4 text-sm">
            <a href={`tel:${D.CONTACT.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-brand"><Ic n="phone" className="text-brand" />{D.CONTACT.phone}</a>
            <a href={`mailto:${D.CONTACT.email}`} className="flex items-center gap-3 hover:text-brand"><Ic n="mail" className="text-brand" />{D.CONTACT.email}</a>
            <p className="flex gap-3"><Ic n="pin" className="mt-0.5 shrink-0 text-brand" />{D.CONTACT.address}</p>
          </div>
        </div>
        {done ? <div className="grid place-items-center p-10 text-center md:col-span-3"><div><h3 className="font-display text-3xl font-extrabold text-navy">Thank you!</h3><p className="mt-2 text-slate-600">Your enquiry opened in WhatsApp. We’ll contact you soon.</p></div></div> :
          <form onSubmit={sub} className="grid gap-4 p-8 sm:grid-cols-2 md:col-span-3">
            <div><L>Name *</L><input required className={inp} value={s.n} onChange={set('n')} /></div>
            <div><L>Email *</L><input required type="email" className={inp} value={s.e} onChange={set('e')} /></div>
            <div><L>Contact no. *</L><input required type="tel" className={inp} value={s.p} onChange={set('p')} /></div>
            <div><L>City *</L><input required className={inp} value={s.c} onChange={set('c')} /></div>
            <div className="sm:col-span-2"><L>Interested in *</L>
              <div className="flex flex-wrap gap-2">{D.INTERESTS.map(v => <label key={v} className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${s.i.includes(v) ? 'border-brand bg-brand text-navy' : 'border-slate-300 text-slate-600 hover:border-navy'}`}><input type="checkbox" className="sr-only" checked={s.i.includes(v)} onChange={() => tog(v)} />{v}</label>)}</div></div>
            <div className="sm:col-span-2"><L>Message</L><textarea rows="3" className={inp} value={s.m} onChange={set('m')} /></div>
            <div><L>{x[0]} + {x[1]} = ? *</L><input required inputMode="numeric" className={inp} value={s.sum} onChange={set('sum')} /></div>
            {err && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 sm:col-span-2">{err}</p>}
            <div className="sm:col-span-2"><button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3 font-semibold text-navy transition hover:bg-brand-2">Send on WhatsApp <Ic n="arrow" s={18} /></button></div>
          </form>}
      </div>
    </section>
  )
}

export default function Home() {
  return (<>
    <Carousel />
    <Intro /><Clients /><Pain />
    <List id="solutions" eyebrow="Solutions" title="What we build" group="solutions" bg="bg-white" cols="lg:grid-cols-4" />
    <List id="products" eyebrow="Our products" title="Ready-to-use products" group="products" bg="bg-slate-50" cols="lg:grid-cols-4" />
    <CaseStudy /><About /><Process /><Reviews /><Faqs /><Contact />
  </>)
}
