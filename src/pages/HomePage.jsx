import HeroCarousel from '../components/home/HeroCarousel'
import Divisions from '../components/home/Divisions'
import AboutSection from '../components/home/AboutSection'
import ServicesSection from '../components/home/ServicesSection'
import BookingCTA from '../components/home/BookingCTA'
import OurWorkCarousel from '../components/home/OurWorkCarousel'

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <Divisions />
      <AboutSection />
      <ServicesSection />
      <BookingCTA />
      <OurWorkCarousel />
    </>
  )
}
