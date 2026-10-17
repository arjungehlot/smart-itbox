import { useState } from 'react'
import { FAQS } from '../../data/home'
import SectionHead from '../ui/SectionHead'
import { card } from '../ui/styles'

export default function Faqs() {
  const [open, setOpen] = useState(0)
  return (
    <section className="bg-slate-50 px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <SectionHead eyebrow="FAQs" title="Quick answers" />
        <div className="space-y-3">
          {FAQS.map(([q, a], i) => (
            <div key={q} className={`${card} ${open === i ? 'border-navy/30' : ''}`}>
              <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-navy">
                {q}<span className={`text-xl leading-none text-slate-400 transition ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && <p className="px-5 pb-4 text-slate-600">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
