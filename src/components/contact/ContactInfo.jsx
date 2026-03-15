import { Row, Col } from 'react-bootstrap'
import { siteConfig } from '../../data/siteConfig'

export default function ContactInfo() {
  const { email, phone, facebookUrl } = siteConfig
  const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`

  return (
    <Row className="gy-4 mb-4">
      <Col md={4}>
        <div className="bg-light d-flex flex-column justify-content-center p-4 rounded h-100">
          <h5 className="text-uppercase text-primary">// E-mail //</h5>
          <a href={`mailto:${email}`} className="text-dark text-decoration-none"><i className="fa fa-envelope text-primary me-2" />{email}</a>
        </div>
      </Col>
      <Col md={4}>
        <div className="bg-light d-flex flex-column justify-content-center p-4 rounded h-100">
          <h5 className="text-uppercase text-primary">// Whatsapp | Phone //</h5>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none"><i className="fab fa-whatsapp text-primary me-2" />{phone}</a>
        </div>
      </Col>
      <Col md={4}>
        <div className="bg-light d-flex flex-column justify-content-center p-4 rounded h-100">
          <h5 className="text-uppercase text-primary">// Facebook //</h5>
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">Facebook page</a>
        </div>
      </Col>
    </Row>
  )
}
