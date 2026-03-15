import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const points = [
  { num: '01', title: 'Professional & Expert', desc: 'High Quality Auto Repair With 20 Years Japanese Experience' },
  { num: '02', title: 'Quality Servicing Center', desc: 'Delivering Quality Through Attention, with 100% focus on every detail' },
  { num: '03', title: 'Expert Specialists', desc: 'Highly Skilled specialists Dedicated For Delivering Top-notch Automotive Services' },
]

export default function AboutSection() {
  return (
    <div className="container-xxl py-5">
      <Container>
        <Row className="g-5">
          <Col lg={6} className="pt-4 about-section-image-col">
            <div className="position-relative h-100 rounded overflow-hidden" style={{ borderRadius: 'var(--radius)' }}>
              <img className="position-absolute img-fluid w-100 h-100" src="/imgs/img10.jpeg" style={{ objectFit: 'cover' }} alt="" />
              <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5" style={{ background: 'rgba(0, 0, 0, 0.08)' }}>
                <h1 className="display-4 text-white mb-0">20 <span className="fs-4">Years</span></h1>
                <h4 className="text-white">Experience</h4>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <h6 className="text-primary text-uppercase">// About Us //</h6>
            <h2 className="mb-4"><span className="text-primary">RARA Auto</span> Is The Best Place For Your Truck Repair Needs and Auto Care</h2>
            <p className="mb-4">Our core expertise lies in truck repair, where we thrive with excellence. But that's not all—we handle all your automotive repair needs with the same level of dedication.</p>
            <div className="row g-4 mb-3 pb-3">
              {points.map((p, i) => (
                <Col xs={12} key={i}>
                  <div className="d-flex">
                    <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: 45, height: 45, borderRadius: 'var(--radius)' }}>
                      <span className="fw-bold text-secondary">{p.num}</span>
                    </div>
                    <div className="ps-3">
                      <h6>{p.title}</h6>
                      <span>{p.desc}</span>
                    </div>
                  </div>
                </Col>
              ))}
            </div>
            <Link to="/readmore" className="btn btn-primary py-3 px-5">Read More <i className="fa fa-arrow-right ms-3" /></Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
