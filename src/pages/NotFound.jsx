import Button from '../components/ui/Button'
export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-5 pt-16 text-center">
      <div>
        <h1 className="font-display text-6xl font-semibold text-navy">404</h1>
        <p className="mt-3 text-slate-600">We couldn’t find that page.</p>
        <Button to="/" className="mt-6">Back to home</Button>
      </div>
    </section>
  )
}
