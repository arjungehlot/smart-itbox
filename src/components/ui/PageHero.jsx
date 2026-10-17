import SectionHead from './SectionHead'
/** Simple navy header band used on inner pages (About, Case Study, Contact, listings). */
export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="bg-navy px-5 pb-14 pt-32">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow={eyebrow} title={title} text={text} align="left" light as="h1" />
      </div>
    </section>
  )
}
