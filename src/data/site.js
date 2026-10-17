export const CONTACT = {
  phone: '+91 87168 08360',
  wa: '918716808360',
  email: 'ceo@smartitbox.in',
  address: 'Block A Skytex, Plot 64, A Block, Sector 63, Noida, Uttar Pradesh 201309'
}

// Top navigation. `group` makes a hover dropdown from data/pages.js
export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Solutions', to: '/solutions', group: 'solutions' },
  { label: 'Products', to: '/products', group: 'products' },
  { label: 'Library', to: '/library/videos', group: 'library' },
  { label: 'Case Study', to: '/case-study' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
]

// Full-screen home carousel. Replace files in /public/slides with your own 1920x1080 images
// (…-m.svg / mobile versions are 1080x1920).
export const SLIDES = [
  { src: '/slides/slide-1.svg', alt: 'Google Sheets Automation' },
  { src: '/slides/slide-2.svg', alt: 'WhatsApp AI Chatbot with text and voice' },
  { src: '/slides/slide-3.svg', alt: 'Visiting Card to Lead — coming soon' },
  { src: '/slides/slide-4.svg', alt: 'WA Flow — WhatsApp automation' },
  { src: '/slides/slide-5.svg', alt: '100% custom MERN-stack systems' }
]

// Client logo grid on the home page: logos per page and the maximum number of logos shown.
export const CLIENTS = { perPage: 20, max: 40, intervalMs: 6000 }
