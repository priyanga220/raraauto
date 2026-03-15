import PageHeader from '../components/layout/PageHeader'
import Divisions from '../components/home/Divisions'
import { Container, Row, Col } from 'react-bootstrap'
import BookingForm from '../components/booking/BookingForm'
import CallToAction from '../components/booking/CallToAction'

export default function BookingPage() {
  return (
    <>
      <PageHeader title="Booking" breadcrumbs={[{ label: 'Booking' }]} />
      <Divisions />
      <div className="container-fluid bg-secondary booking my-5 py-5">
        <Container>
          <Row className="gx-5 align-items-center">
            <Col lg={6} className="py-4">
              <h3 className="text-white mb-4">What sets us apart is our unmatched range of automotive services.</h3>
              <p className="text-white mb-0">Our core offerings center around both truck body manufacturing and truck repair. Beyond these, we provide a broad array of automotive services—engine diagnostics, electrical repairs, preventative maintenance, and custom modifications.</p>
            </Col>
            <Col lg={6}>
              <div className="bg-primary h-100 rounded p-5 text-center d-flex flex-column justify-content-center">
                <h1 className="text-white mb-4">Book For A Service</h1>
                <BookingForm />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <CallToAction />
    </>
  )
}
