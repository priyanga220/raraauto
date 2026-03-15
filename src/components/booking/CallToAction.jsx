import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { siteConfig } from '../../data/siteConfig'

export default function CallToAction() {
  return (
    <div className="container-xxl py-5">
      <Container>
        <Row className="g-4 align-items-center">
          <Col lg={8} md={6}>
            <h6 className="text-primary text-uppercase">// Call For More Info //</h6>
            <h1 className="mb-4">Have Any Pre Booking Question?</h1>
            <p className="mb-0">We're here to help! Whether you need clarification on our services, pricing, availability, or simply want expert advice on what your vehicle may require, don't hesitate to reach out.</p>
          </Col>
          <Col lg={4} md={6}>
            <div className="bg-primary d-flex flex-column justify-content-center text-center h-100 p-4 rounded">
              <h3 className="text-white mb-4"><i className="fa fa-phone-alt me-3" />{siteConfig.phone}</h3>
              <Link to="/contact" className="btn btn-secondary py-3 px-5">Contact Us <i className="fa fa-arrow-right ms-3" /></Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
