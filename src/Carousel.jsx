import { useEffect, useState } from 'react'
import { SLIDES } from './data'
import { Ic } from './ui'

export default function Carousel() {
  const [i, setI] = useState(0), [hold, setHold] = useState(false)
  const n = SLIDES.length
  useEffect(() => {
    if (hold) return
    const t = setInterval(() => setI(v => (v + 1) % n), 5000)
    return () => clearInterval(t)
  }, [hold, n])
  const arrow = 'absolute top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow transition hover:bg-brand'
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden bg-navy" onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)} aria-roledescription="carousel">
      {SLIDES.map(([src, alt], k) => (
        <picture key={src}>
          <source media="(max-width: 767px)" srcSet={src.replace('.svg', '-m.svg')} />
          <img src={src} alt={alt} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${k === i ? 'opacity-100' : 'opacity-0'}`} />
        </picture>
      ))}
      <button aria-label="Previous slide" onClick={() => setI((i - 1 + n) % n)} className={`${arrow} left-4 sm:left-8`}><Ic n="left" s={24} /></button>
      <button aria-label="Next slide" onClick={() => setI((i + 1) % n)} className={`${arrow} right-4 sm:right-8`}><Ic n="right" s={24} /></button>
      <div className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-4">
        <div className="flex gap-2">
          {SLIDES.map((_, k) => <button key={k} aria-label={`Slide ${k + 1}`} onClick={() => setI(k)} className={`h-2.5 rounded-full transition-all ${k === i ? 'w-9 bg-brand' : 'w-2.5 bg-white/70 hover:bg-white'}`} />)}
        </div>
        <a href="#/home/intro" className="grid h-10 w-10 animate-bounce place-items-center rounded-full bg-white/90 text-navy" aria-label="Scroll down"><Ic n="down" s={22} /></a>
      </div>
    </section>
  )
}
