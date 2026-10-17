import { Link } from 'react-router-dom'

const VARIANTS = {
  primary: 'bg-brand text-navy hover:bg-brand-2',
  dark: 'bg-navy text-white hover:bg-navy-2',
  outline: 'border border-slate-300 bg-white text-navy hover:border-navy',
  ghost: 'border border-white/30 text-white hover:bg-white hover:text-navy'
}

/** `to` → internal route (react-router) · `href` → external link · neither → <button> */
export default function Button({ to, href, variant = 'primary', size = 'md', className = '', children, ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition ${size === 'lg' ? 'px-6 py-3 text-[15px]' : 'px-5 py-2.5 text-sm'} ${VARIANTS[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button className={cls} {...rest}>{children}</button>
}
