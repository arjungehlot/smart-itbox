import Button from '../ui/Button'
import Icon from '../ui/Icon'
import { waLink } from '../../utils/whatsapp'

export default function CtaBand() {
  return (
    <section className="bg-navy px-5 py-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center md:flex-row md:text-left">
        <div className="flex-1">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">Tell us what’s broken. We’ll show you the fix.</h2>
          <p className="mt-2 text-blue-100">Free demo — see a system built around your business, not a template.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button to="/contact" size="lg">Book a Free Demo <Icon name="arrow" size={17} /></Button>
          <Button href={waLink()} target="_blank" rel="noreferrer" variant="ghost" size="lg">WhatsApp us</Button>
        </div>
      </div>
    </section>
  )
}
