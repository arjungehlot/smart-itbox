import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV } from '../../data/site'
import { byGroup, pagePath } from '../../data/pages'
import Icon from '../ui/Icon'
import Button from '../ui/Button'

function Dropdown({ group }) {
  return (
    <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
      <ul className="rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
        {byGroup(group).map(p => (
          <li key={p.slug}>
            <Link to={pagePath(p)} className="flex items-center justify-between gap-3 rounded-lg px-3.5 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-navy">
              {p.title}{p.soon && <span className="rounded-full bg-brand/20 px-2 py-0.5 text-[10px] font-medium uppercase text-navy">Soon</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [sub, setSub] = useState('')
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false) }, [pathname])

  const linkCls = ({ isActive }) => `relative flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm transition hover:text-navy ${isActive ? 'font-medium text-navy' : 'text-slate-600'}`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5">
        <Link to="/"><img src="/logo.png" alt="Smart ITBox — Make IT Smart" className="h-10 w-auto" /></Link>

        <nav className="ml-auto hidden items-center gap-0.5 lg:flex">
          {NAV.map(({ label, to, group }) => (
            <div key={to} className="group relative">
              <NavLink to={to} end={to === '/'} className={linkCls}>
                {({ isActive }) => (<>
                  {label}{group && <Icon name="down" size={14} />}
                  {isActive && <span className="absolute inset-x-3.5 -bottom-[13px] h-0.5 bg-brand" />}
                </>)}
              </NavLink>
              {group && <Dropdown group={group} />}
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
                  {byGroup(group).map(p => <li key={p.slug}><Link to={pagePath(p)} className="block py-2 text-sm text-slate-600">{p.title}{p.soon && ' (soon)'}</Link></li>)}
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
