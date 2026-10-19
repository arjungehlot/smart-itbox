import { useEffect, useMemo, useState } from 'react'
import { CLIENTS } from '../../data/site'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'

// Logos live in src/clients (logo-00.png …). Vite picks them up automatically.
const ALL = Object.entries(import.meta.glob('../../clients/*.png', { eager: true, import: 'default' }))
  .sort(([a], [b]) => a.localeCompare(b)).map(([, src]) => src)

// Shown in “Showing 1–20 of … brands”. Change here when the number grows.
const TOTAL_LABEL = '400+'

export default function ClientLogos() {
  const logos = useMemo(() => ALL.slice(0, CLIENTS.max), [])
  const pages = Math.max(1, Math.ceil(logos.length / CLIENTS.perPage))
  const [page, setPage] = useState(0)
  const [hold, setHold] = useState(false)

  useEffect(() => {
    if (hold || pages < 2) return
    const t = setInterval(() => setPage(p => (p + 1) % pages), CLIENTS.intervalMs)
    return () => clearInterval(t)
  }, [hold, pages])

  if (!logos.length) return null
  const start = page * CLIENTS.perPage
  const shown = logos.slice(start, start + CLIENTS.perPage)

  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[.16em] text-navy-2"><span className="h-0.5 w-6 bg-brand" />Trusted across industries</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-navy sm:text-[34px]">Powering operations for leading businesses</h2>
        </div>

        <Reveal className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6" onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}>
          <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 pb-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-700"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Live network</span>
            <span className="text-sm text-slate-600">A growing community of smarter operations</span>
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-navy"><Icon name="shield" size={14} />PAN India + abroad</span>
          </div>

          <div key={page} className="grid grid-cols-2 gap-3 py-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {shown.map((src, i) => (
              <div key={src + i} className="grid h-[72px] animate-fadein place-items-center rounded-lg border border-slate-200 bg-white p-3 transition hover:border-navy/30 hover:shadow-sm">
                <img src={src} alt="Client logo" loading="lazy" className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-slate-200 pt-4">
            <p className="text-sm text-slate-500">Showing <b className="font-medium text-navy">{start + 1}–{start + shown.length}</b> of {TOTAL_LABEL} brands</p>
            {pages > 1 && (
              <div className="flex items-center gap-2">
                <button aria-label="Previous logos" onClick={() => setPage((page - 1 + pages) % pages)} className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 text-slate-600 hover:border-navy hover:text-navy"><Icon name="left" size={16} /></button>
                {Array.from({ length: pages }, (_, k) => <button key={k} aria-label={`Logos page ${k + 1}`} onClick={() => setPage(k)} className={`h-2 rounded-full transition-all ${k === page ? 'w-7 bg-navy' : 'w-2 bg-slate-300 hover:bg-slate-400'}`} />)}
                <button aria-label="Next logos" onClick={() => setPage((page + 1) % pages)} className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 text-slate-600 hover:border-navy hover:text-navy"><Icon name="right" size={16} /></button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
