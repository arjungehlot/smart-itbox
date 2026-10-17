import { waLink } from '../../utils/whatsapp'
import Icon from '../ui/Icon'

export default function WhatsAppFab() {
  return (
    <a href={waLink("Hello! I'm interested in your services.")} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg transition hover:scale-105">
      <Icon name="chat" size={26} />
    </a>
  )
}
