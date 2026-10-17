import { CONTACT } from '../data/site'

export const waLink = (text = "Hello Smart ITBox! I'd like to know more about your services.") =>
  `https://wa.me/${CONTACT.wa}?text=${encodeURIComponent(text)}`
