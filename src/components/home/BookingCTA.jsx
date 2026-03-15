import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import BookingForm from '../booking/BookingForm'

export default function BookingCTA() {
  return (
    <div className="container-fluid bg-secondary booking my-5 py-5">
      <Container>
        <Row className="gx-5 align-items-center">
          <Col lg={6} className="py-4">
            <h3 className="text-white mb-4">What sets us apart is our unmatched range of automotive services, offering a breadth and expertise that few can rival.</h3>
            <p className="text-white mb-0">
              &nbsp;&nbsp;&nbsp;Our core offerings center around both truck body manufacturing and truck repair. While truck repair is a major part of what we do, our truck body making service is truly unique—an area in which we excel and that few others can provide.
              <br />&nbsp;&nbsp;&nbsp;Beyond these specialties, we provide a broad array of automotive services, from engine diagnostics and electrical repairs to preventative maintenance and custom modifications.
            </p>
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
  )
}
