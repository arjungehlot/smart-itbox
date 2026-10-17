import { useState } from 'react'
import { NAV, PAGES } from './data'
import { Ic, Btn } from './ui'

const Drop = ({ group }) => (
  <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
    <ul className="rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
      {PAGES.filter(p => p.group === group).map(p => (
        <li key={p.slug}>
          <a href={`#/p/${p.slug}`} className="flex items-center justify-between gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-navy">
            {p.title}{p.soon && <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold uppercase text-navy">Soon</span>}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default function Nav({ route }) {
  const [open, setOpen] = useState(false), [sub, setSub] = useState('')
  const activeGroup = route.page && PAGES.find(p => p.slug === route.page)?.group
  const close = () => setOpen(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5">
        <a href="#/" onClick={close}><img src="/logo.png" alt="Smart ITBox — Make IT Smart" className="h-10 w-auto" /></a>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {NAV.map(([label, href, group]) => (
            <div key={label} className="group relative">
              <a href={href} className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition hover:text-navy ${activeGroup === group && group ? 'text-navy' : 'text-slate-600'}`}>
                {label}{group && <Ic n="down" s={14} />}
                {activeGroup === group && group && <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 bg-brand" />}
              </a>
              {group && <Drop group={group} />}
            </div>
          ))}
        </nav>
        <div className="hidden lg:block"><Btn href="#/home/contact">Book a Free Demo <Ic n="arrow" s={16} /></Btn></div>

        <button aria-label="Menu" onClick={() => setOpen(!open)} className="ml-auto grid h-10 w-10 place-items-center rounded-lg text-navy hover:bg-slate-100 lg:hidden"><Ic n={open ? 'x' : 'menu'} s={24} /></button>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-4rem)] overflow-auto border-t border-slate-200 bg-white px-5 pb-6 pt-2 lg:hidden">
          {NAV.map(([label, href, group]) => (
            <div key={label} className="border-b border-slate-100">
              <div className="flex items-center justify-between">
                <a href={href} onClick={close} className="flex-1 py-3 font-medium text-navy">{label}</a>
                {group && <button onClick={() => setSub(sub === group ? '' : group)} className="p-3 text-slate-500"><Ic n="down" s={18} className={sub === group ? 'rotate-180' : ''} /></button>}
              </div>
              {group && sub === group && (
                <ul className="mb-2 ml-3 border-l-2 border-brand pl-3">
                  {PAGES.filter(p => p.group === group).map(p => <li key={p.slug}><a href={`#/p/${p.slug}`} onClick={close} className="block py-2 text-sm text-slate-600">{p.title}{p.soon && ' (soon)'}</a></li>)}
                </ul>
              )}
            </div>
          ))}
          <Btn href="#/home/contact" onClick={close} className="mt-4 w-full">Book a Free Demo</Btn>
        </div>
      )}
    </header>
  )
}
