import { Link, useParams } from 'react-router-dom'
import { PAGES, GROUPS, byGroup } from '../data/pages'
import { waLink } from '../utils/whatsapp'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import Tick from '../components/ui/Tick'
import PageCard from '../components/ui/PageCard'
import NotFound from './NotFound'

const embed = id => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&rel=0`

/** /solutions/:slug and /products/:slug — video (or image) on the left, text on the right. */
export default function PageDetail({ group }) {
  const { slug } = useParams()
  const page = PAGES.find(p => p.group === group && p.slug === slug)
  if (!page) return <NotFound />

  const g = GROUPS[group]
  const others = byGroup(group).filter(p => p.slug !== slug).slice(0, 4)

  return (
    <>
      <section className="bg-white px-5 pb-14 pt-24">
        <div className="mx-auto max-w-6xl">
          <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-navy">Home</Link><span>/</span>
            <Link to={`/${group}`} className="hover:text-navy">{g.label}</Link><span>/</span>
            <span className="text-navy">{page.title}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT — video / image */}
            <div className="overflow-hidden rounded-2xl bg-navy shadow-lg ring-1 ring-slate-200">
              {page.video
                ? <iframe key={page.slug} src={embed(page.video)} title={page.title} allow="autoplay; encrypted-media; fullscreen" allowFullScreen className="aspect-video w-full" />
                : <img src={page.image} alt={page.title} className="aspect-video w-full object-cover" />}
            </div>

            {/* RIGHT — text */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-widest text-slate-600">{g.single}</span>
                {page.soon
                  ? <span className="rounded-full bg-brand/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-navy">Coming soon</span>
                  : page.tag && <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{page.tag}</span>}
              </div>
              <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl">{page.title}</h1>
              <p className="mt-3 font-display text-lg text-navy-2">{page.line}</p>
              <p className="mt-3 leading-relaxed text-slate-600">{page.text}</p>

              {page.tiles
                ? <div className="mt-5 grid grid-cols-2 gap-3">{page.tiles.map(([a, b]) => <div key={a} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3"><b className="block font-display text-base font-medium text-navy">{a}</b><span className="text-sm text-slate-500">{b}</span></div>)}</div>
                : <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">{page.points.map(t => <li key={t} className="flex gap-2 text-sm text-slate-700"><Tick />{t}</li>)}</ul>}

              <div className="mt-7 flex flex-wrap gap-3">
                {page.link && <Button href={page.link} target="_blank" rel="noreferrer" variant="dark">Visit {page.link.replace(/^https?:\/\/(www\.)?/, '')} <Icon name="ext" size={15} /></Button>}
                {page.soon
                  ? <Button href={waLink('Hello! Please notify me when Visiting Card AI launches.')} target="_blank" rel="noreferrer">Notify me on launch</Button>
                  : <Button to="/contact" variant={page.link ? 'outline' : 'primary'}>Take a Free Demo <Icon name="arrow" size={15} /></Button>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-5 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-display text-xl font-medium text-navy">More {g.label.toLowerCase()}</h2>
            <Link to={`/${group}`} className="text-sm font-medium text-navy hover:underline">View all</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{others.map(p => <PageCard key={p.slug} page={p} />)}</div>
        </div>
      </section>
    </>
  )
}
