import { Carousel } from 'react-bootstrap'

const slides = [
  { src: '/imgs/banner10.png', alt: 'RARA Auto - Truck body and repair services' },
  { src: '/imgs/banner11.png', alt: 'RARA Auto - Automotive expertise' },
 /* { src: '/imgs/img10.jpeg', alt: 'RARA Auto - Our work' },
  { src: '/imgs/img3.jpeg', alt: 'RARA Auto - Services' }, */
]

export default function HeroCarousel() {
  return (
    <section className="hero-carousel container-fluid mb-5 p-0" aria-label="Hero carousel">
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
    </section>
  )
}
