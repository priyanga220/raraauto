import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { siteConfig } from '../../data/siteConfig'

export default function Footer() {
  const { companyName, address, phone, email, whatsappNumber, whatsappMessage, facebookUrl, openingHours } = siteConfig
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5">
      <Container className="py-5">
        <Row className="g-5">
          <Col lg={3} md={6}>
            <h4 className="text-light mb-4">Address</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />{address}</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3" />{phone}</p>
            <p className="mb-2"><i className="fa fa-envelope me-3" />{email}</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" title="WhatsApp" href={whatsappLink} target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" /></a>
              <a className="btn btn-outline-light btn-social" target="_blank" rel="noopener noreferrer" title="Facebook" href={facebookUrl}><i className="fab fa-facebook-f" /></a>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <h4 className="text-light mb-4">Opening Hours</h4>
            <h6 className="text-light">Monday - Friday:</h6>
            <p className="mb-4">{openingHours.weekdays}</p>
            <h6 className="text-light">Saturday - Sunday:</h6>
            <p className="mb-0">{openingHours.weekend}</p>
          </Col>
          <Col lg={3} md={6}>
            <h4 className="text-light mb-4">All Services</h4>
            <span className="btn btn-link text-light p-0 mb-1 d-block text-start">RARA Auto Truck Body</span>
            <span className="btn btn-link text-light p-0 mb-1 d-block text-start">RARA Auto Truck Repair</span>
            <span className="btn btn-link text-light p-0 mb-1 d-block text-start">High Quality Auto Repair</span>
            <span className="btn btn-link text-light p-0 mb-1 d-block text-start">Excavator Machine Repair</span>
          </Col>
          <Col lg={3} md={6}>
            <h5 className="text-light mb-3">Any Delivery from Japan (Sri Lanka | Africa region)</h5>
            <br />
            <span className="btn btn-link text-light p-0 mb-1 d-block text-start">Vehicles</span>
            <span className="btn btn-link text-light p-0 mb-1 d-block text-start">Motor bikes</span>
            <span className="btn btn-link text-light p-0 mb-1 d-block text-start">Industrial Machinery</span>
            <span className="btn btn-link text-light p-0 mb-1 d-block text-start">Agricultural Machinery</span>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="copyright">
          <Row>
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              &copy; <Link to="/" className="border-bottom text-decoration-none">{companyName}</Link>, All Right Reserved. Designed by <a className="border-bottom" href="https://htmlcodex.com" target="_blank" rel="noopener noreferrer">HTML Codex</a>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <div className="footer-menu">
                <Link to="/" className="text-light text-decoration-none">Home</Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}
