import { Link } from 'react-router-dom'
import { byGroup, GROUPS } from '../../data/pages'
import SectionHead from '../ui/SectionHead'
import PageCard from '../ui/PageCard'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'

/** Home preview of a group (solutions | products) with a “view all” link. */
export default function FeaturedPages({ group, limit = 4, bg = 'bg-white' }) {
  const g = GROUPS[group]
  const items = byGroup(group)
  return (
    <section className={`px-5 py-16 ${bg}`}>
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow={g.label} title={g.title} text={g.text} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{items.slice(0, limit).map((p, i) => <Reveal key={p.slug} delay={i * 90} className="h-full"><PageCard page={p} /></Reveal>)}</div>
        {items.length > limit && (
          <Reveal className="mt-8 text-center">
            <Link to={`/${group}`} className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:gap-3 transition-all">View all {items.length} {g.label.toLowerCase()} <Icon name="arrow" size={16} /></Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}
