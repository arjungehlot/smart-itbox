import { useEffect, useRef, useState } from 'react'

const HIDDEN = { up: 'translate-y-7', left: '-translate-x-9', right: 'translate-x-9', zoom: 'scale-95', none: '' }

/** Fades/slides its children in the first time they scroll into view. `delay` is in ms (for staggering). */
export default function Reveal({ as: Tag = 'div', from = 'up', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { setShown(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect() } }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} style={{ transitionDelay: shown ? `${delay}ms` : '0ms' }} {...rest}
      className={`transition-all duration-700 ease-out ${shown ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : `opacity-0 ${HIDDEN[from]}`} ${className}`}>
      {children}
    </Tag>
  )
}
