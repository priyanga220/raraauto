import { Carousel } from 'react-bootstrap'

const slides = [
  { src: '/imgs/banner10.png', alt: 'RARA Auto - Truck body and repair services' },
  { src: '/imgs/banner11.png', alt: 'RARA Auto - Automotive expertise' },
]

export default function HeroCarousel() {
  return (
    <section className="hero-carousel container-fluid mb-5 p-0" aria-label="Hero">
      {/* Mobile: single static banner */}
      <div className="hero-mobile-banner d-lg-none">
        <img
          src="/imgs/banner1.png"
          alt="RARA Auto - Company info and contact"
          className="hero-mobile-banner-img"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      {/* Desktop: carousel */}
      <div className="hero-carousel-inner-wrapper d-none d-lg-block">
        <Carousel
          controls
          indicators
          interval={5000}
          fade
          slide={false}
          pause="hover"
          className="hero-carousel-inner"
        >
          {slides.map((item, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100 hero-carousel-img"
                src={item.src}
                alt={item.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={i === 0 ? 'high' : undefined}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
