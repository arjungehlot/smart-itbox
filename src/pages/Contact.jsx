import { CONTACT } from '../data/site'
import PageHero from '../components/ui/PageHero'
import ContactForm from '../components/forms/ContactForm'
import Icon from '../components/ui/Icon'
import { card } from '../components/ui/styles'

const Row = ({ icon, label, children, href }) => {
  const Tag = href ? 'a' : 'div'
  return (
    <Tag href={href} className={`${card} flex items-start gap-4 p-4 ${href ? 'transition hover:border-navy/30' : ''}`}>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-slate-100 text-navy"><Icon name={icon} size={19} /></span>
      <span><small className="block text-xs text-slate-500">{label}</small><span className="text-sm font-medium text-navy">{children}</span></span>
    </Tag>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us what’s broken." text="Book a free demo and we’ll show you a system built around your business." />
      <section className="bg-slate-50 px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-5">
          <div className="space-y-3 lg:col-span-2">
            <Row icon="phone" label="Call us" href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</Row>
            <Row icon="mail" label="Email" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</Row>
            <Row icon="pin" label="Office">{CONTACT.address}</Row>
          </div>
          <div className={`${card} p-6 sm:p-8 lg:col-span-3`}><ContactForm /></div>
        </div>
      </section>
    </>
  )
}
