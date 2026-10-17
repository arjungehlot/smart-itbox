import Button from '../ui/Button'
import Icon from '../ui/Icon'
import IconTile from '../ui/IconTile'
import Reveal from '../ui/Reveal'
import { CONTACT } from '../../data/site'
import { waLink } from '../../utils/whatsapp'

export default function CtaBand() {
  const chips = [
    ['phone', 'emerald', CONTACT.phone, `tel:${CONTACT.phone.replace(/\s/g, '')}`],
    ['mail', 'orange', CONTACT.email, `mailto:${CONTACT.email}`],
    ['chat', 'teal', 'WhatsApp us', waLink()]
  ]
  return (
    <section className="bg-slate-50 px-5 py-16">
      <Reveal from="zoom" className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-navy px-6 py-12 text-center sm:px-12">
        <span className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full bg-white/5" />
        <span className="pointer-events-none absolute -bottom-20 -right-12 h-64 w-64 rounded-full bg-white/5" />
        <p className="relative text-xs font-medium uppercase tracking-widest text-brand">Free demo</p>
        <h2 className="relative mx-auto mt-3 max-w-2xl text-balance font-display text-2xl font-medium leading-snug text-white sm:text-4xl">Tell us what’s broken. We’ll show you the fix.</h2>
        <p className="relative mx-auto mt-3 max-w-xl text-blue-100">See a system built around your business, not a template.</p>
        <div className="relative mt-7 flex justify-center">
          <Button to="/contact" size="lg">Book a Free Demo <Icon name="arrow" size={17} /></Button>
        </div>
        <div className="relative mt-8 grid gap-3 text-left sm:grid-cols-3">
          {chips.map(([icon, tone, label, href]) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="group flex items-center gap-3 rounded-2xl bg-white p-3 pr-4 transition duration-300 hover:-translate-y-1">
              <IconTile name={icon} tone={tone} size="sm" />
              <span className="truncate text-sm font-medium text-navy">{label}</span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
