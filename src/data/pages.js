// Every solution / product detail page. Route: /<group>/<slug>
// video: YouTube id (or null → `image` is shown).  soon: true → "Coming soon" badge.
export const PAGES = [
  { slug: 'sheets-automation', tone: 'emerald', group: 'solutions', icon: 'sheet', title: 'Google Sheets Automation', tag: 'Most popular', video: 'iEX5Qmp_FGM', image: '/slides/slide-1.svg',
    line: 'Turn every sheet into a decision-making system.',
    text: 'Live dashboards, automatic alerts and clean MIS — built on 10+ years of factory-floor experience.',
    points: ['Dashboards that answer, not just display', 'Apps Script automation & integrations', 'Alerts on WhatsApp and email', 'FMS · IMS · PMS · Full-kitting'] },
  { slug: 'whatsapp-chatbot', tone: 'teal', group: 'solutions', icon: 'chat', title: 'WhatsApp AI Chatbot', tag: 'Text + Voice', video: 'FrcMcpt-U40', image: '/slides/slide-2.svg',
    line: 'Ask your business a question. Get the answer on WhatsApp.',
    text: 'Type it or say it. The bot replies from your own existing data — instantly.',
    points: ['Ask by text or voice note', 'Answers from your sheets & systems', 'Tasks, reports and follow-ups in chat', 'Official WhatsApp API'] },
  { slug: 'custom-systems', tone: 'blue', group: 'solutions', icon: 'code', title: 'MERN Custom Systems', tag: 'Built to last', video: null, image: '/slides/slide-5.svg',
    line: 'Only what your business needs. Nothing extra.',
    text: 'Long-term, result-oriented web systems — 100% custom, with no useless features.',
    points: ['CRM, ERP, production planning', 'Role-based access & live dashboards', 'Scalable architecture you own', 'Hosting, training & support'] },
  { slug: 'sales-crm', tone: 'orange', group: 'solutions', icon: 'crm', title: 'Sales CRM', video: null, image: '/slides/slide-5.svg',
    line: 'Every lead gets attention.',
    text: 'Lead funnel with Email, WhatsApp and AI follow-ups, shaped around your sales process.',
    points: ['Lead capture & funnel', 'Auto follow-ups', 'Quotations & conversions', 'Live sales summary'] },
  { slug: 'erp', tone: 'violet', group: 'solutions', icon: 'erp', title: 'ERP — FMS · IMS · PMS', video: null, image: '/slides/slide-5.svg',
    line: 'Order to delivery under one roof.',
    text: 'Tailored ERP for orders, inventory, production and dispatch with a management dashboard.',
    points: ['Order-to-delivery tracking', 'Inventory control', 'Production planning', 'Management dashboard'] },
  { slug: 'checklist', tone: 'cyan', group: 'solutions', icon: 'check', title: 'Checklist System', video: null, image: '/slides/slide-1.svg',
    line: 'Routine work that never slips.',
    text: 'Digital recurring checklists with reminders and scoring.',
    points: ['Recurring tasks', 'WhatsApp reminders', 'Team scoreboard', 'Proof & remarks'] },
  { slug: 'delegation', tone: 'rose', group: 'solutions', icon: 'users', title: 'Delegation System', video: null, image: '/slides/slide-2.svg',
    line: 'Delegate smartly. Don’t let tasks hover in your head.',
    text: 'Assign, follow up and score tasks — even by voice note on WhatsApp.',
    points: ['Create tasks by message or voice', 'AI assigns to the right person', 'Auto status updates', 'Scoreboard of every member'] },

  { slug: 'teamflow', tone: 'indigo', group: 'products', icon: 'users', title: 'TeamFlow', tag: 'flow360.in', video: 'fFfZq0IbhjY', image: '/slides/slide-2.svg', link: 'https://flow360.in',
    line: 'AI task management for your whole team.',
    text: 'Assign tasks by text or voice; track deadlines, overdue reminders and team scorecards.',
    points: ['Task assignment by text or voice', 'WhatsApp & email notifications', 'Live dashboard', 'Team performance scorecards'] },
  { slug: 'o2d', tone: 'amber', group: 'products', icon: 'erp', title: 'O2D — Order to Delivery', tag: 'opserp.in', video: 'S-ebtnwzeto', image: '/slides/slide-5.svg', link: 'https://opserp.in',
    line: 'Every order tracked, enquiry to dispatch.',
    text: 'Timelines, auto alerts and dispatch reports in one system.',
    points: ['Order tracking', 'Auto alerts', 'Dispatch reports', 'Delay visibility'] },
  { slug: 'wa-flow', tone: 'emerald', group: 'products', icon: 'chat', title: 'WA Flow', tag: 'waflow360.in', video: null, image: '/slides/slide-4.svg', link: 'https://www.waflow360.in',
    line: 'Powerful WhatsApp automation, built for your business.',
    text: 'Connect your WhatsApp, manage contacts, create campaigns, automate conversations and track every message from one powerful dashboard.',
    points: [],
    tiles: [['Manage', 'Contacts'], ['Create', 'Campaigns'], ['Automate', 'Conversations'], ['Track', 'Every message']] },
  { slug: 'visiting-card', tone: 'pink', group: 'products', icon: 'camera', title: 'Visiting Card AI', tag: 'Coming soon', soon: true, video: null, image: '/slides/slide-3.svg',
    line: 'Click a card. Lead captured. Follow-up sent.',
    text: 'WhatsApp + chatbot + AI + OCR. Send a card photo; it is read, stored and followed up automatically.',
    points: ['Photo on WhatsApp → data captured', 'WhatsApp / email sent with your profile', 'Send a company name → get contact instantly', 'No typing, no errors'] }
]

export const GROUPS = {
  solutions: { label: 'Solutions', title: 'What we build', text: 'Custom systems around your workflow — pick one or combine them.', single: 'Solution' },
  products: { label: 'Products', title: 'Ready-to-use products', text: 'Products built by Smart ITBox and already used by growing teams.', single: 'Product' }
}

export const pagePath = p => `/${p.group}/${p.slug}`
export const byGroup = g => PAGES.filter(p => p.group === g)
