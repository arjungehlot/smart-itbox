import { Link } from 'react-router-dom'
import { CONTACT } from '../../data/site'
import { byGroup, pagePath, GROUPS } from '../../data/pages'

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-5 pt-14 text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/logo.png" alt="Smart ITBox" className="h-10 rounded bg-white px-2 py-1" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">Business automation that actually delivers — custom built, backed by 10+ years of manufacturing experience.</p>
        </div>
        {Object.keys(GROUPS).map(g => (
          <div key={g}>
            <h5 className="mb-3 text-sm font-medium text-white">{GROUPS[g].label}</h5>
            {byGroup(g).map(p => <Link key={p.slug} to={pagePath(p)} className="block py-1 text-sm hover:text-white">{p.title}</Link>)}
          </div>
        ))}
        <div>
          <h5 className="mb-3 text-sm font-medium text-white">Company</h5>
          {[['About', '/about'], ['Case Study', '/case-study'], ['Contact', '/contact']].map(([l, to]) => <Link key={to} to={to} className="block py-1 text-sm hover:text-white">{l}</Link>)}
          <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="mt-3 block py-1 text-sm hover:text-white">{CONTACT.phone}</a>
          <a href={`mailto:${CONTACT.email}`} className="block py-1 text-sm hover:text-white">{CONTACT.email}</a>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs">© 2026 Smart ITBox · Make IT Smart</p>
    </footer>
  )
}
