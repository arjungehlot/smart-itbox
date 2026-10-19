// Every solution / product detail page. Route: /<group>/<slug>
// video: YouTube id (or null → `image` is shown). Videos are parked in `videoLater` for now — to switch a page to video, move the id into `video`.  soon: true → "Coming soon" badge.
export const PAGES = [
  { slug: 'sheets-automation', tone: 'emerald', group: 'solutions', icon: 'sheet', title: 'Google Sheets Automation', tag: 'Most popular', video: null, videoLater: 'iEX5Qmp_FGM', image: '/pages/sheets-automation.svg',
    line: 'Turn every sheet into a decision-making system.',
    text: 'Live dashboards, automatic alerts and clean MIS — built on 10+ years of factory-floor experience.',
    points: ['Dashboards that answer, not just display', 'Apps Script automation & integrations', 'Alerts on WhatsApp and email', 'FMS · IMS · PMS · Full-kitting'] },
  { slug: 'whatsapp-chatbot', tone: 'teal', group: 'solutions', icon: 'chat', title: 'WhatsApp AI Chatbot', tag: 'Text + Voice', video: null, videoLater: 'FrcMcpt-U40', image: '/pages/whatsapp-chatbot.svg',
    line: 'Ask your business a question. Get the answer on WhatsApp.',
    text: 'Type it or say it. The bot replies from your own existing data — instantly.',
    points: ['Ask by text or voice note', 'Answers from your sheets & systems', 'Tasks, reports and follow-ups in chat', 'Official WhatsApp API'] },
  { slug: 'custom-systems', tone: 'blue', group: 'solutions', icon: 'code', title: '100% Custom System', tag: 'Built to last', video: null, image: '/pages/custom-systems.svg',
    line: 'Only what your business needs. Nothing extra.',
    text: 'Long-term, result-oriented web systems — 100% custom, with no useless features.',
    points: ['CRM, ERP, production planning', 'Role-based access & live dashboards', 'Scalable architecture you own', 'Hosting, training & support'] },
  { slug: 'sales-crm', tone: 'orange', group: 'solutions', icon: 'crm', title: 'Sales CRM', video: null, image: '/pages/sales-crm.svg',
    line: 'Every lead gets attention.',
    text: 'Lead funnel with Email, WhatsApp and AI follow-ups, shaped around your sales process.',
    points: ['Lead capture & funnel', 'Auto follow-ups', 'Quotations & conversions', 'Live sales summary'] },
  { slug: 'erp', tone: 'violet', group: 'solutions', icon: 'erp', title: 'ERP — FMS · IMS · PMS', video: null, image: '/pages/erp.svg',
    line: 'Order to delivery under one roof.',
    text: 'Tailored ERP for orders, inventory, production and dispatch with a management dashboard.',
    points: ['Order-to-delivery tracking', 'Inventory control', 'Production planning', 'Management dashboard'] },
  { slug: 'checklist', tone: 'cyan', group: 'solutions', icon: 'check', title: 'Checklist System', video: null, image: '/pages/checklist.svg',
    line: 'Routine work that never slips.',
    text: 'Digital recurring checklists with reminders and scoring.',
    points: ['Recurring tasks', 'WhatsApp reminders', 'Team scoreboard', 'Proof & remarks'] },
  { slug: 'delegation', tone: 'rose', group: 'solutions', icon: 'users', title: 'Delegation System', video: null, image: '/pages/delegation.svg',
    line: 'Delegate smartly. Don’t let tasks hover in your head.',
    text: 'Assign, follow up and score tasks — even by voice note on WhatsApp.',
    points: ['Create tasks by message or voice', 'AI assigns to the right person', 'Auto status updates', 'Scoreboard of every member'] },

  { slug: 'teamflow', tone: 'indigo', group: 'products', icon: 'users', title: 'TeamFlow — Delegation System', tag: 'flow360.in', video: null, videoLater: 'fFfZq0IbhjY', image: '/pages/teamflow.svg', link: 'https://flow360.in',
    line: 'Delegate smartly. AI task management for your whole team.',
    text: 'Assign tasks by text or voice; track deadlines, overdue reminders and team scorecards.',
    points: ['Task assignment by text or voice', 'WhatsApp & email notifications', 'Live dashboard', 'Team performance scorecards'] },
  { slug: 'o2d', tone: 'amber', group: 'products', icon: 'erp', title: 'OPS ERP', tag: 'opserp.in', video: null, videoLater: 'S-ebtnwzeto', image: '/pages/o2d.svg', link: 'https://opserp.in',
    line: 'Order to Delivery',
    text: 'Timelines, auto alerts and dispatch reports in one system.',
    points: ['Order tracking', 'Auto alerts', 'Dispatch reports', 'Delay visibility'] },
  { slug: 'wa-flow', tone: 'emerald', group: 'products', icon: 'chat', title: 'WA Flow', tag: 'waflow360.in', video: null, image: '/pages/wa-flow.svg', link: 'https://www.waflow360.in',
    line: 'WhatsApp Automation',
    text: 'Connect your WhatsApp, manage contacts, create campaigns, automate conversations and track every message from one powerful dashboard.',
    points: [],
    tiles: [['Manage', 'Contacts'], ['Create', 'Campaigns'], ['Automate', 'Conversations'], ['Track', 'Every message']] },
  { slug: 'visiting-card', tone: 'pink', group: 'products', icon: 'camera', title: 'Card X', tag: 'cardx.smartitbox.in', soon: true, video: null, image: '/pages/visiting-card.svg', link: 'https://cardx.smartitbox.in',
    line: 'Visiting Card AI',
    text: 'WhatsApp + chatbot + AI + OCR. Send a card photo; it is read, stored and followed up automatically.',
    points: ['Photo on WhatsApp → data captured', 'WhatsApp / email sent with your profile', 'Send a company name → get contact instantly', 'No typing, no errors'] }
]

export const GROUPS = {
  solutions: { label: 'Solutions', title: 'What we build', text: 'Custom systems around your workflow — pick one or combine them.', single: 'Solution' },
  products: { label: 'Products', title: 'Ready-to-use products', text: 'Products built by Smart ITBox and already used by growing teams.', single: 'Product' }
}

export const pagePath = p => `/${p.group}/${p.slug}`
export const byGroup = g => PAGES.filter(p => p.group === g)
