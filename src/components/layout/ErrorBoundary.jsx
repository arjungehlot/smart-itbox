import { Component } from 'react'
/** Shows the real error instead of a blank white screen. */
export default class ErrorBoundary extends Component {
  state = { error: null }
  static getDerivedStateFromError(error) { return { error } }
  render() {
    if (!this.state.error) return this.props.children
    return (
      <div className="mx-auto max-w-2xl p-10 text-slate-700">
        <h1 className="text-xl font-semibold text-navy">Something went wrong on this page</h1>
        <pre className="mt-4 overflow-auto rounded-lg bg-slate-100 p-4 text-xs text-red-700">{String(this.state.error?.stack || this.state.error)}</pre>
        <a href="/" className="mt-4 inline-block text-sm font-medium text-navy underline">Back to home</a>
      </div>
    )
  }
}
