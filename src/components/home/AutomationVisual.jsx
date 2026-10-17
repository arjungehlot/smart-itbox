import Icon from '../ui/Icon'

const bars = [38, 62, 48, 80, 58, 92, 70]
const delay = s => ({ animationDelay: `${s}s` })

/** Continuous, looping hero illustration: a live dashboard, orbiting dots and chips that pop in one by one. */
export default function AutomationVisual() {
  return (
    <div className="relative mx-auto h-[430px] w-full max-w-[540px] select-none" aria-hidden="true">
      {/* rings + orbiting dots */}
      <div className="absolute inset-4 rounded-full border border-dashed border-navy/20" />
      <div className="absolute inset-16 rounded-full border border-navy/10" />
      <div className="absolute inset-4 animate-orbit"><i className="absolute left-1/2 -top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-brand" /></div>
      <div className="absolute inset-16 animate-orbit-rev"><i className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-navy" /></div>
      <div className="absolute inset-4 animate-orbit [animation-duration:44s]"><i className="absolute -bottom-1 left-1/4 h-2 w-2 rounded-full bg-emerald-500" /></div>

      {/* flowing connection lines */}
      <svg viewBox="0 0 540 430" className="absolute inset-0 h-full w-full" fill="none">
        {['M92 58 C150 80 190 120 215 165', 'M452 118 C410 130 370 150 340 178', 'M96 352 C150 330 190 290 220 262', 'M446 372 C410 340 380 300 345 262'].map(d => (
          <path key={d} d={d} stroke="#0b1f4b" strokeOpacity=".35" strokeWidth="1.6" strokeDasharray="5 7" className="animate-flow" />
        ))}
      </svg>

      {/* main dashboard card */}
      <div className="absolute left-1/2 top-1/2 w-[290px] -translate-x-1/2 -translate-y-1/2 animate-float rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-navy/15">
        <div className="flex items-center gap-1.5">
          <i className="h-2 w-2 rounded-full bg-red-400" /><i className="h-2 w-2 rounded-full bg-brand" /><i className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="ml-2 text-[11px] font-medium text-slate-500">Live operations</span>
          <span className="ml-auto flex items-center gap-1 text-[10px] font-medium text-emerald-600">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative h-2 w-2 rounded-full bg-emerald-500" /></span>LIVE
          </span>
        </div>

        <div className="mt-4 flex h-24 items-end gap-2 rounded-lg bg-slate-50 px-3 pb-3 pt-4">
          {bars.map((h, i) => (
            <div key={i} className="flex h-full flex-1 items-end"><div style={{ height: `${h}%`, ...delay(i * 0.25) }} className={`w-full origin-bottom animate-bar rounded-sm ${i === 5 ? 'bg-brand' : 'bg-navy'}`} /></div>
          ))}
        </div>

        <svg viewBox="0 0 260 46" className="mt-3 w-full" fill="none">
          <path d="M2 38 C30 34 40 14 70 22 S110 40 140 20 S190 6 220 16 S250 8 258 4" stroke="#14316e" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="320" className="animate-draw" />
        </svg>

        <div className="mt-2 space-y-2.5">
          {[['Orders on time', 'bg-emerald-500', 0], ['Follow-ups sent', 'bg-navy', 0.6], ['Tasks closed', 'bg-brand', 1.2]].map(([l, c, d]) => (
            <div key={l}>
              <p className="mb-1 text-[10px] text-slate-500">{l}</p>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100"><div style={delay(d)} className={`h-full w-full origin-left animate-grow rounded-full ${c}`} /></div>
            </div>
          ))}
        </div>
      </div>

      {/* chips that pop in one after another */}
      <Chip className="left-0 top-3" delay={0} icon="sheet" text="Google Sheet synced" />
      <Chip className="right-0 top-[88px]" delay={2.2} icon="chat" text="WhatsApp alert sent" green />
      <Chip className="bottom-14 left-1" delay={4.4} icon="users" text="Task assigned by voice" />
      <Chip className="bottom-2 right-6" delay={6.6} icon="check" text="Follow-up delivered" green />
    </div>
  )
}

function Chip({ className, delay: d, icon, text, green }) {
  return (
    <div style={delay(d)} className={`absolute flex animate-pop items-center gap-2 rounded-full border border-slate-200 bg-white py-1.5 pl-1.5 pr-3.5 text-xs font-medium text-navy opacity-0 shadow-lg shadow-navy/10 ${className}`}>
      <span className={`grid h-7 w-7 place-items-center rounded-full text-white ${green ? 'bg-emerald-500' : 'bg-navy'}`}><Icon name={icon} size={14} /></span>{text}
    </div>
  )
}
