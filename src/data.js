export const CONTACT = { phone: '+91 87168 08360', wa: '918716808360', email: 'ceo@smartitbox.in', address: 'Block A Skytex, Plot 64, A Block, Sector 63, Noida 201309' }

// Full-screen home carousel. Replace files in /public/slides with your own photos/banners (1920x1080) – keep the same names or edit here.
export const SLIDES = [
  ['/slides/slide-1.svg', 'Google Sheets Automation'],
  ['/slides/slide-2.svg', 'WhatsApp AI Chatbot with text and voice'],
  ['/slides/slide-3.svg', 'Visiting Card to Lead — coming soon'],
  ['/slides/slide-4.svg', 'WA Flow — WhatsApp automation'],
  ['/slides/slide-5.svg', '100% custom MERN-stack systems']
]

// Every page opens at  #/p/<slug>  with the video on the left and text on the right.
// video: YouTube id (or null → the slide image is shown instead).  group: 'solutions' | 'products'
export const PAGES = [
  {
    slug: 'sheets-automation', group: 'solutions', icon: 'sheet', title: 'Google Sheets Automation', tag: 'Most popular', video: 'iEX5Qmp_FGM', image: '/slides/slide-1.svg',
    line: 'Turn every sheet into a decision-making system.',
    text: 'Live dashboards, automatic alerts and clean MIS — built on 10+ years of factory-floor experience.',
    points: ['Dashboards that answer, not just display', 'Apps Script automation & integrations', 'Alerts on WhatsApp and email', 'FMS · IMS · PMS · Full-kitting']
  },
  {
    slug: 'whatsapp-chatbot', group: 'solutions', icon: 'chat', title: 'WhatsApp AI Chatbot', tag: 'Text + Voice', video: 'FrcMcpt-U40', image: '/slides/slide-2.svg',
    line: 'Ask your business a question. Get the answer on WhatsApp.',
    text: 'Type it or say it. The bot replies from your own existing data — instantly.',
    points: ['Ask by text or voice note', 'Answers from your sheets & systems', 'Tasks, reports and follow-ups in chat', 'Official WhatsApp API']
  },
  {
    slug: 'custom-systems', group: 'solutions', icon: 'code', title: 'MERN Custom Systems', tag: 'Built to last', video: null, image: '/slides/slide-5.svg',
    line: 'Only what your business needs. Nothing extra.',
    text: 'Long-term, result-oriented web systems — 100% custom, with no useless features.',
    points: ['CRM, ERP, production planning', 'Role-based access & live dashboards', 'Scalable architecture you own', 'Hosting, training & support']
  },
  {
    slug: 'sales-crm', group: 'solutions', icon: 'crm', title: 'Sales CRM', video: null, image: '/slides/slide-5.svg',
    line: 'Every lead gets attention.',
    text: 'Lead funnel with Email, WhatsApp and AI follow-ups, shaped around your sales process.',
    points: ['Lead capture & funnel', 'Auto follow-ups', 'Quotations & conversions', 'Live sales summary']
  },
  {
    slug: 'erp', group: 'solutions', icon: 'erp', title: 'ERP — FMS · IMS · PMS', video: null, image: '/slides/slide-5.svg',
    line: 'Order to delivery under one roof.',
    text: 'Tailored ERP for orders, inventory, production and dispatch with an MD dashboard.',
    points: ['Order-to-delivery tracking', 'Inventory control', 'Production planning', 'Management dashboard']
  },
  {
    slug: 'checklist', group: 'solutions', icon: 'check', title: 'Checklist System', video: null, image: '/slides/slide-1.svg',
    line: 'Routine work that never slips.',
    text: 'Digital recurring checklists with reminders and scoring.',
    points: ['Recurring tasks', 'WhatsApp reminders', 'Team scoreboard', 'Proof & remarks']
  },
  {
    slug: 'delegation', group: 'solutions', icon: 'users', title: 'Delegation System', video: null, image: '/slides/slide-2.svg',
    line: 'Delegate smartly. Don’t let tasks hover in your head.',
    text: 'Assign, follow up and score tasks — even by voice note on WhatsApp.',
    points: ['Create tasks by message or voice', 'AI assigns to the right person', 'Auto status updates', 'Scoreboard of every member']
  },

  {
    slug: 'teamflow', group: 'products', icon: 'users', title: 'TeamFlow - Deligation System', tag: 'flow360.in', video: 'fFfZq0IbhjY', image: '/slides/slide-2.svg', link: 'https://flow360.in',
    line: 'AI task management for your whole team.',
    text: 'Assign tasks by text or voice; track deadlines, overdue reminders and team scorecards.',
    points: ['Task assignment by text or voice', 'WhatsApp & email notifications', 'Live dashboard', 'Team performance scorecards']
  },
  {
    slug: 'o2d', group: 'products', icon: 'erp', title: 'OPS ERP — Order to Delivery', tag: 'opserp.in', video: 'S-ebtnwzeto', image: '/slides/slide-5.svg', link: 'https://opserp.in',
    line: 'Every order tracked, enquiry to dispatch.',
    text: 'Timelines, auto alerts and dispatch reports in one system.',
    points: ['Order tracking', 'Auto alerts', 'Dispatch reports', 'Delay visibility']
  },
  {
    slug: 'wa-flow', group: 'products', icon: 'chat', title: 'WA Flow', tag: 'waflow360.in', video: null, image: '/slides/slide-4.svg', link: 'https://www.waflow360.in',
    line: 'Powerful WhatsApp automation, built for your business.',
    text: 'Connect your WhatsApp, manage contacts, create campaigns, automate conversations and track every message from one powerful dashboard.',
    points: ['Connect your WhatsApp', 'One powerful dashboard'],
    tiles: [['Manage', 'Contacts'], ['Create', 'Campaigns'], ['Automate', 'Conversations'], ['Track', 'Every message']]
  },
  {
    slug: 'visiting-card', group: 'products', icon: 'camera', title: 'Card Plus', tag: 'Coming soon', soon: true, video: null, image: '/slides/slide-3.svg',
    line: 'Click a card. Lead captured. Follow-up sent.',
    text: 'WhatsApp + chatbot + AI + OCR. Send a card photo; it is read, stored and followed up automatically.',
    points: ['Photo on WhatsApp → data captured', 'WhatsApp / email sent with your profile', 'Send a company name → get contact instantly', 'No typing, no errors']
  }
]

export const NAV = [
  ['Home', '#/'],
  ['Solutions', '#/home/solutions', 'solutions'],
  ['Products', '#/home/products', 'products'],
  ['Case Study', '#/home/casestudy'],
  ['About', '#/home/about'],
  ['Contact', '#/home/contact']
]

export const STATS = [['2020', 'Founded'], ['10+', 'Years in manufacturing'], ['100%', 'Custom built'], ['100%', 'Refund, in writing']]
export const PAINS = [['Complicated', 'Operations spread across people, sheets and memory.'], ['Challenging', 'Problems generic vendors keep failing to solve.'], ['Scattered', 'Data in ten places. Decisions on gut feel.']]
export const CASE = { client: 'CT/PT manufacturer · Dehradun', bad: ['₹25 lakh spent on business coaches & “gurus”', 'Not one delivered a result'], good: ['Custom system, written 100% refund commitment', 'Now running in pilot mode with the existing team', 'No additional hiring'] }
export const PROCESS = ['Requirements', 'Planning', 'Design & build', 'Testing', 'Deployment', 'Training & support']
export const REVIEWS = [
  ['Gaurav Garg', 'Their tips and edits made our spreadsheets faster, cleaner and virtually error-free.'],
  ['IT – DNS', 'Our team has used their system for 2 years and enjoys the results.'],
  ['IOC DATA', 'Order collection to distribution is completely automated, with real-time WhatsApp and email updates.']
]
export const FAQS = [
  ['What does Smart ITBox do?', 'We automate complicated, scattered operations — Google Sheets, WhatsApp AI chatbots (text & voice) and MERN-stack custom systems.'],
  ['Why not ready-made software?', 'Every business is unique. We build only what you need — no extra, useless features.'],
  ['What is the refund commitment?', 'For our most challenging deliveries we have given a written 100% refund commitment. Ask us about your project.'],
  ['How long does a project take?', 'Most projects are delivered within 0–6 weeks, followed by training and support.'],
  ['Do you offer a free demo?', 'Yes — book one from the contact section.']
]
export const INTERESTS = ['Google Sheets', 'WhatsApp Chatbot', 'WA Flow', 'Card Plus', 'MERN System', 'CRM / ERP', 'Others']
