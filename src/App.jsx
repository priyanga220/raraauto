import { Routes, Route } from 'react-router-dom'
import Topbar from './components/layout/Topbar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import BackToTop from './components/layout/BackToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import BookingPage from './pages/BookingPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import ReadMorePage from './pages/ReadMorePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/readmore" element={<ReadMorePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
