import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Listing from './pages/Listing'
import PageDetail from './pages/PageDetail'
import CaseStudy from './pages/CaseStudy'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="solutions" element={<Listing group="solutions" />} />
        <Route path="solutions/:slug" element={<PageDetail group="solutions" />} />
        <Route path="products" element={<Listing group="products" />} />
        <Route path="products/:slug" element={<PageDetail group="products" />} />
        <Route path="case-study" element={<CaseStudy />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
