import { REVIEWS } from '../../data/home'
import SectionHead from '../ui/SectionHead'
import { card } from '../ui/styles'
import Reveal from '../ui/Reveal'

export default function Reviews() {
  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="Testimonials" title="What clients say" />
        <div className="grid gap-4 md:grid-cols-3">
          {REVIEWS.map(([n, r, q], i) => (
            <Reveal as="figure" key={n} delay={i * 100} className={`${card} flex flex-col p-6`}>
              <p className="text-sm tracking-widest text-brand">★★★★★</p>
              <blockquote className="mt-3 flex-1 text-slate-600">“{q}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-sm font-medium text-navy">{n[0]}</span>
                <span><b className="block text-sm font-medium text-navy">{n}</b><small className="text-slate-500">{r}</small></span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
