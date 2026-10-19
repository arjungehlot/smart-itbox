import { useState } from 'react'
import { VIDEOS } from '../data/videos'
import PageHero from '../components/ui/PageHero'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import CtaBand from '../components/home/CtaBand'

const thumb = id => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
// Starts with sound (the click counts as the user's permission); YouTube's own controls handle play / pause / volume / fullscreen.
const embed = id => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`

function VideoCard({ id, active, onPlay, onStop, index }) {
  return (
    <Reveal delay={(index % 4) * 80} className="group relative rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-navy">
        {active ? (
          <>
            <iframe src={embed(id)} title={`Smart ITBox video ${index + 1}`} allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" />
            <button onClick={onStop} aria-label="Stop video" className="absolute right-2 top-2 z-10 grid h-7 w-7 place-items-center rounded-full bg-navy/80 text-white backdrop-blur transition hover:bg-rose-500"><Icon name="x" size={14} /></button>
          </>
        ) : (
          <button onClick={onPlay} aria-label="Play video" className="absolute inset-0 block h-full w-full">
            <img src={thumb(id)} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            <span className="absolute inset-0 bg-navy/10 transition group-hover:bg-navy/30" />
            <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-blue-700 shadow-xl ring-4 ring-white/25 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
              <Icon name="play" size={18} className="ml-0.5 fill-current" />
            </span>
          </button>
        )}
      </div>
    </Reveal>
  )
}

export default function Videos() {
  const [active, setActive] = useState(null) // only one video plays at a time
  return (
    <>
      <PageHero eyebrow="Library" title="Videos" text="See our automation systems at work — tap any video to play." />
      <section className="bg-slate-50 px-5 py-12">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VIDEOS.map((id, i) => <VideoCard key={id} id={id} index={i} active={active === id} onPlay={() => setActive(id)} onStop={() => setActive(null)} />)}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
