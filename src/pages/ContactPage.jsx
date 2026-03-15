import PageHeader from '../components/layout/PageHeader'
import { Container, Row, Col } from 'react-bootstrap'
import ContactInfo from '../components/contact/ContactInfo'
import ContactMap from '../components/contact/ContactMap'
import ContactForm from '../components/contact/ContactForm'

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" breadcrumbs={[{ label: 'Contact' }]} />
      <div className="container-xxl py-5">
        <Container>
          <div className="text-center mb-5">
            <h6 className="text-primary text-uppercase">// Contact Us //</h6>
            <h1 className="mb-0">Contact For Any Query</h1>
          </div>
          <ContactInfo />
          <Row className="g-4">
            <Col md={6}>
              <ContactMap />
            </Col>
            <Col md={6}>
              <p className="mb-4">Got a question? Send us an email, and we'll get back to you promptly.</p>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
