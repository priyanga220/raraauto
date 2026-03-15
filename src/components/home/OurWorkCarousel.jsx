import { Carousel, Container } from 'react-bootstrap'

const items = [
  { title: 'Truck body build', text: 'Custom truck body manufacturing and installation for commercial clients.', img: '/imgs/truckrepair1.jpeg' },
  { title: 'Engine & repair', text: 'Full engine diagnostics and repair with 20 years of expertise.', img: '/imgs/truckrepair2.jpeg' },
  { title: 'General auto service', text: 'Oil change, timing belt, transmission, and full vehicle maintenance.', img: '/imgs/carrepair1.jpeg' },
]

export default function OurWorkCarousel() {
  return (
    <div className="container-xxl py-5">
      <Container>
        <div className="text-center mb-5">
          <h6 className="text-primary text-uppercase">// Our Work //</h6>
          <h1 className="mb-0">Jobs we delivered!</h1>
        </div>
        <Carousel indicators interval={5000} className="testimonial-carousel">
          {items.map((item, i) => (
            <Carousel.Item key={i}>
              <div className="testimonial-card bg-light text-center p-4 mx-auto rounded" style={{ maxWidth: 340 }}>
                <img className="rounded-circle mb-3 bg-white p-2" src={item.img} alt="" style={{ width: 80, height: 80, objectFit: 'cover' }} />
                <h5 className="mb-1">{item.title}</h5>
                <p className="mb-0 small text-muted">{item.text}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  )
}
