import Carousel from '../components/home/Carousel'
import Intro from '../components/home/Intro'
import ClientsGrid from '../components/home/ClientsGrid'
import Challenges from '../components/home/Challenges'
import FeaturedPages from '../components/home/FeaturedPages'
import CaseStudyBlock from '../components/home/CaseStudyBlock'
import Vision from '../components/home/Vision'
import Process from '../components/home/Process'
import Reviews from '../components/home/Reviews'
import Faqs from '../components/home/Faqs'
import CtaBand from '../components/home/CtaBand'

export default function Home() {
  return (
    <>
      <Carousel />
      <Intro />
      <ClientsGrid />
      <Challenges />
      <FeaturedPages group="solutions" bg="bg-white" />
      <FeaturedPages group="products" bg="bg-slate-50" />
      <CaseStudyBlock />
      <Vision />
      <Process />
      <Reviews />
      <Faqs />
      <CtaBand />
    </>
  )
}
