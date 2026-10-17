import { useState } from 'react'
import { INTERESTS } from '../../data/home'
import { waLink } from '../../utils/whatsapp'
import Icon from '../ui/Icon'

const input = 'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-navy focus:ring-4 focus:ring-navy/10'
const Label = ({ children }) => <label className="mb-1 block text-xs font-medium text-slate-600">{children}</label>

/** Sends the enquiry to WhatsApp (no backend needed). */
export default function ContactForm() {
  const [s, setS] = useState({ n: '', e: '', p: '', c: '', m: '', sum: '', i: [] })
  const [err, setErr] = useState('')
  const [done, setDone] = useState(false)
  const [x] = useState(() => [2 + Math.floor(Math.random() * 8), 2 + Math.floor(Math.random() * 8)])
  const set = k => ev => setS({ ...s, [k]: ev.target.value })
  const toggle = v => setS({ ...s, i: s.i.includes(v) ? s.i.filter(z => z !== v) : [...s.i, v] })

  const submit = ev => {
    ev.preventDefault()
    if (+s.sum !== x[0] + x[1]) return setErr('Wrong answer, please try again.')
    if (!s.i.length) return setErr('Select at least one interest.')
    window.open(waLink(`Hello Smart ITBox! I'm ${s.n} from ${s.c}.\nEmail: ${s.e}\nPhone: ${s.p}\nInterested in: ${s.i.join(', ')}\n${s.m}`), '_blank')
    setErr(''); setDone(true)
  }

  if (done) return <div className="grid place-items-center p-10 text-center"><div><h3 className="font-display text-2xl font-semibold text-navy">Thank you!</h3><p className="mt-2 text-slate-600">Your enquiry opened in WhatsApp. We’ll contact you soon.</p></div></div>

  return (
    <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
      <div><Label>Name *</Label><input required className={input} value={s.n} onChange={set('n')} /></div>
      <div><Label>Email *</Label><input required type="email" className={input} value={s.e} onChange={set('e')} /></div>
      <div><Label>Contact no. *</Label><input required type="tel" className={input} value={s.p} onChange={set('p')} /></div>
      <div><Label>City *</Label><input required className={input} value={s.c} onChange={set('c')} /></div>
      <div className="sm:col-span-2">
        <Label>Interested in *</Label>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map(v => (
            <label key={v} className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-xs transition ${s.i.includes(v) ? 'border-navy bg-navy text-white' : 'border-slate-300 text-slate-600 hover:border-navy'}`}>
              <input type="checkbox" className="sr-only" checked={s.i.includes(v)} onChange={() => toggle(v)} />{v}
            </label>
          ))}
        </div>
      </div>
      <div className="sm:col-span-2"><Label>Message</Label><textarea rows="3" className={input} value={s.m} onChange={set('m')} /></div>
      <div><Label>{x[0]} + {x[1]} = ? *</Label><input required inputMode="numeric" className={input} value={s.sum} onChange={set('sum')} /></div>
      {err && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700 sm:col-span-2">{err}</p>}
      <div className="sm:col-span-2"><button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-medium text-navy transition hover:bg-brand-2">Send on WhatsApp <Icon name="arrow" size={16} /></button></div>
    </form>
  )
}
