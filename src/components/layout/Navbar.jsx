import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV } from '../../data/site'
import { byGroup, pagePath, GROUPS } from '../../data/pages'
import { LIBRARY } from '../../data/videos'
import Icon from '../ui/Icon'
import Button from '../ui/Button'

const LABELS = { library: 'Library' }
const itemsOf = group => group === 'library' ? LIBRARY.map(l => ({ key: l.slug, to: l.to, title: l.title, line: l.line, icon: l.icon })) : byGroup(group).map(p => ({ key: p.slug, to: pagePath(p), title: p.title, line: p.line, icon: p.icon, soon: p.soon }))
const labelOf = group => LABELS[group] || GROUPS[group].label

function Dropdown({ group, to }) {
  const items = itemsOf(group)
  return (
    <div className="pointer-events-none invisible absolute left-1/2 top-full w-[380px] -translate-x-1/2 translate-y-2 pt-[18px] opacity-0 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
      <div className="relative rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-navy/10">
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-slate-200 bg-white" />
        <p className="px-3 pb-1.5 pt-2 text-[11px] font-medium uppercase tracking-widest text-slate-400">{labelOf(group)}</p>
        <ul>
          {items.map(p => (
            <li key={p.key}>
              <Link to={p.to} className="group/item relative flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-50">
                <span className="absolute left-0 top-3 bottom-3 w-0.5 origin-center scale-y-0 rounded-full bg-brand transition-transform duration-200 group-hover/item:scale-y-100" />
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-slate-100 text-navy transition-colors duration-200 group-hover/item:bg-navy group-hover/item:text-white"><Icon name={p.icon} size={18} /></span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2 text-sm font-medium text-navy">{p.title}{p.soon && <span className="rounded-full bg-brand/20 px-1.5 py-0.5 text-[9px] font-medium uppercase">Soon</span>}</span>
                  <span className="block truncate text-xs text-slate-500">{p.line}</span>
                </span>
                <Icon name="arrow" size={15} className="-translate-x-1 text-navy opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
        <Link to={to} className="mt-1 flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-slate-100">{group === 'library' ? 'Watch all videos' : `View all ${labelOf(group).toLowerCase()}`}<Icon name="arrow" size={15} /></Link>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [sub, setSub] = useState('')
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])

  const linkCls = ({ isActive }) => `relative flex items-center gap-1 px-3.5 py-2 text-sm transition-colors duration-200 hover:text-navy group-hover:text-navy after:absolute after:inset-x-3.5 after:-bottom-[13px] after:h-0.5 after:origin-center after:bg-brand after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 ${isActive ? 'font-medium text-navy after:scale-x-100' : 'text-slate-600 after:scale-x-0'}`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5">
        <Link to="/"><img src="/logo.png" alt="Smart ITBox — Make IT Smart" className="h-10 w-auto" /></Link>

        <nav className="ml-auto hidden items-center gap-0.5 lg:flex">
          {NAV.map(({ label, to, group }) => (
            <div key={to} className="group relative">
              <NavLink to={to} end={to === '/'} className={linkCls}>
                {label}{group && <Icon name="down" size={14} className="transition-transform duration-200 group-hover:rotate-180" />}
              </NavLink>
              {group && <Dropdown group={group} to={to} />}
            </div>
          ))}
        </nav>
        <div className="hidden lg:block"><Button to="/contact">Book a Free Demo <Icon name="arrow" size={16} /></Button></div>

        <button aria-label="Menu" onClick={() => setOpen(!open)} className="ml-auto grid h-10 w-10 place-items-center rounded-lg text-navy hover:bg-slate-100 lg:hidden"><Icon name={open ? 'x' : 'menu'} size={24} /></button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-4rem)] overflow-auto border-t border-slate-200 bg-white px-5 pb-6 pt-2 lg:hidden">
          {NAV.map(({ label, to, group }) => (
            <div key={to} className="border-b border-slate-100">
              <div className="flex items-center justify-between">
                <NavLink to={to} end={to === '/'} className={({ isActive }) => `flex-1 py-3 ${isActive ? 'font-medium text-navy' : 'text-slate-700'}`}>{label}</NavLink>
                {group && <button aria-label={`Toggle ${label}`} onClick={() => setSub(sub === group ? '' : group)} className="p-3 text-slate-500"><Icon name="down" size={18} className={sub === group ? 'rotate-180' : ''} /></button>}
              </div>
              {group && sub === group && (
                <ul className="mb-2 ml-3 border-l-2 border-brand pl-3">
                  {itemsOf(group).map(p => <li key={p.key}><Link to={p.to} className="block py-2 text-sm text-slate-600">{p.title}{p.soon && ' (soon)'}</Link></li>)}
                </ul>
              )}
            </div>
          ))}
          <Button to="/contact" className="mt-4 w-full">Book a Free Demo</Button>
        </div>
      )}
    </header>
  )
}
