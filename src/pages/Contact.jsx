import { CONTACT } from '../data/site'
import PageHero from '../components/ui/PageHero'
import ContactForm from '../components/forms/ContactForm'
import Reveal from '../components/ui/Reveal'
import { card } from '../components/ui/styles'
import IconTile, { TONES } from '../components/ui/IconTile'
import { waLink } from '../utils/whatsapp'

const Row = ({ icon, tone, label, children, href, ext }) => {
  const Tag = href ? 'a' : 'div'
  return (
    <Tag href={href} {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})} className={`group flex items-center gap-4 rounded-2xl border p-4 transition duration-300 ${TONES[tone].card} ${href ? 'hover:-translate-y-1 hover:shadow-lg' : ''}`}>
      <IconTile name={icon} tone={tone} />
      <span className="min-w-0"><small className="block text-xs text-slate-500">{label}</small><span className="text-sm font-medium text-navy">{children}</span></span>
    </Tag>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us what’s broken." text="Book a free demo and we’ll show you a system built around your business." />
      <section className="bg-slate-50 px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-5">
          <Reveal from="left" className="space-y-3 lg:col-span-2">
            <Row tone="emerald" icon="phone" label="Call us" href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</Row>
            <Row tone="teal" icon="chat" label="WhatsApp" href={waLink()} ext>Chat with us instantly</Row>
            <Row tone="orange" icon="mail" label="Email" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</Row>
            <Row tone="violet" icon="pin" label="Office">{CONTACT.address}</Row>
          </Reveal>
          <Reveal from="right" delay={120} className={`${card} p-6 sm:p-8 lg:col-span-3 shadow-xl shadow-slate-900/5`}><ContactForm /></Reveal>
        </div>
      </section>
    </>
  )
}
