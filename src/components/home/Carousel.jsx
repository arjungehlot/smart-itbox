import { useEffect, useState } from 'react'
import { SLIDES } from '../../data/site'
import Icon from '../ui/Icon'

export default function Carousel() {
  const [i, setI] = useState(0)
  const [hold, setHold] = useState(false)
  const n = SLIDES.length

  useEffect(() => {
    if (hold) return
    const t = setInterval(() => setI(v => (v + 1) % n), 5000)
    return () => clearInterval(t)
  }, [hold, n])

  const arrow = 'absolute top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow transition hover:bg-white'
  return (
    <section className="relative h-screen w-full overflow-hidden bg-navy" onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)} aria-roledescription="carousel">
      {SLIDES.map(({ src, alt }, k) => (
        <picture key={src}>
          <source media="(max-width: 767px)" srcSet={src.replace('.svg', '-m.svg')} />
          <img src={src} alt={alt} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${k === i ? 'opacity-100' : 'opacity-0'}`} />
        </picture>
      ))}
      <button aria-label="Previous slide" onClick={() => setI((i - 1 + n) % n)} className={`${arrow} left-3 sm:left-6`}><Icon name="left" size={22} /></button>
      <button aria-label="Next slide" onClick={() => setI((i + 1) % n)} className={`${arrow} right-3 sm:right-6`}><Icon name="right" size={22} /></button>
      <div className="absolute inset-x-0 bottom-7 z-10 flex flex-col items-center gap-3">
        <div className="flex gap-2">
          {SLIDES.map((_, k) => <button key={k} aria-label={`Slide ${k + 1}`} onClick={() => setI(k)} className={`h-2 rounded-full transition-all ${k === i ? 'w-8 bg-brand' : 'w-2 bg-white/60 hover:bg-white'}`} />)}
        </div>
        <button aria-label="Scroll down" onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })} className="grid h-9 w-9 animate-bounce place-items-center rounded-full bg-white/90 text-navy"><Icon name="down" size={20} /></button>
      </div>
    </section>
  )
}
