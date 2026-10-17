import { Link, useParams } from 'react-router-dom'
import { PAGES, GROUPS, byGroup } from '../data/pages'
import { waLink } from '../utils/whatsapp'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import Reveal from '../components/ui/Reveal'
import SectionHead from '../components/ui/SectionHead'
import PageCard from '../components/ui/PageCard'
import CtaBand from '../components/home/CtaBand'
import IconTile, { TONES } from '../components/ui/IconTile'
import NotFound from './NotFound'

const TILE_ICONS = ['users', 'mail', 'chat', 'eye']
const embed = id => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&rel=0`

/** /solutions/:slug and /products/:slug — text on the left, video (or image) on the right. */
export default function PageDetail({ group }) {
  const { slug } = useParams()
  const page = PAGES.find(p => p.group === group && p.slug === slug)
  if (!page) return <NotFound />

  const g = GROUPS[group]
  const others = byGroup(group).filter(p => p.slug !== slug).slice(0, 4)
  const features = page.tiles || page.points.map(t => [t, ''])

  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 px-5 pb-16 pt-24">
        <div className="pointer-events-none absolute -right-28 top-10 h-96 w-96 rounded-full bg-navy/[.04]" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-brand/10" />
        <div className="relative mx-auto max-w-6xl">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-navy">Home</Link><span>/</span>
            <Link to={`/${group}`} className="hover:text-navy">{g.label}</Link><span>/</span>
            <span className="text-navy">{page.title}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT — text */}
            <Reveal from="left" key={page.slug}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"><Icon name={page.icon} size={14} className="text-navy" />{g.single}</span>
                {page.soon
                  ? <span className="rounded-full bg-brand/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-navy">Coming soon</span>
                  : page.tag && <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-600 ring-1 ring-slate-200">{page.tag}</span>}
              </div>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-navy sm:text-[44px]">{page.title}</h1>
              <p className="mt-4 border-l-2 border-brand pl-4 font-display text-lg text-navy-2">{page.line}</p>
              <p className="mt-4 leading-relaxed text-slate-600">{page.text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {page.link && <Button href={page.link} target="_blank" rel="noreferrer" variant="dark" size="lg">Visit {page.link.replace(/^https?:\/\/(www\.)?/, '')} <Icon name="ext" size={15} /></Button>}
                {page.soon
                  ? <Button href={waLink('Hello! Please notify me when Visiting Card AI launches.')} target="_blank" rel="noreferrer" size="lg">Notify me on launch</Button>
                  : <Button to="/contact" variant={page.link ? 'outline' : 'primary'} size="lg">Take a Free Demo <Icon name="arrow" size={16} /></Button>}
              </div>
            </Reveal>

            {/* RIGHT — video / image in a framed window */}
            <Reveal from="right" delay={120} key={page.slug + 'v'}>
              <div className="relative">
                <span className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl bg-brand" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-2xl border border-navy bg-navy shadow-xl">
                  <div className="flex items-center gap-1.5 px-4 py-2.5">
                    <i className="h-2.5 w-2.5 rounded-full bg-white/30" /><i className="h-2.5 w-2.5 rounded-full bg-white/30" /><i className="h-2.5 w-2.5 rounded-full bg-white/30" />
                    <span className="ml-3 truncate text-[11px] text-blue-200">smartitbox.in/{group}/{page.slug}</span>
                  </div>
                  {page.video
                    ? <iframe src={embed(page.video)} title={page.title} allow="autoplay; encrypted-media; fullscreen" allowFullScreen className="aspect-video w-full bg-black" />
                    : <img src={page.image} alt={page.title} className="aspect-video w-full object-cover" />}
                </div>
                <span className="absolute -left-4 top-14 hidden animate-float items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-navy shadow-lg sm:flex">
                  <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative h-2 w-2 rounded-full bg-emerald-500" /></span>{page.video ? 'Live demo' : 'Preview'}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* features */}
      {features.length > 0 && (
        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <SectionHead eyebrow="What you get" title={page.tiles ? 'Everything in one dashboard' : 'Key capabilities'} />
            <div className={`grid gap-4 sm:grid-cols-2 ${features.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
              {features.map(([a, b], i) => (
                <Reveal key={a} delay={i * 90} className={`group rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 ${TONES[page.tone || 'blue'].card}`}>
                  <IconTile name={page.tiles ? TILE_ICONS[i] : 'check'} tone={page.tone} size="lg" />
                  <h3 className="mt-5 font-display text-[17px] font-medium text-navy">{a}</h3>
                  {b && <p className="mt-1 text-sm text-slate-600">{b}</p>}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-slate-200 bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-display text-2xl font-semibold text-navy">More {g.label.toLowerCase()}</h2>
            <Link to={`/${group}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:gap-2.5 transition-all">View all <Icon name="arrow" size={15} /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{others.map((p, i) => <Reveal key={p.slug} delay={i * 90} className="h-full"><PageCard page={p} /></Reveal>)}</div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
