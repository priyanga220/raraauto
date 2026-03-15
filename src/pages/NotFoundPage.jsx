import { Link } from 'react-router-dom'
import PageHeader from '../components/layout/PageHeader'
import { Container, Row, Col } from 'react-bootstrap'

export default function NotFoundPage() {
  return (
    <>
      <PageHeader title="Not Found" breadcrumbs={[{ label: '404' }]} />
      <div className="container-xxl py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} className="text-center">
              <i className="fa fa-exclamation-triangle text-primary" style={{ fontSize: '4rem' }} />
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">We're sorry, the page you have looked for does not exist. Maybe go to our home page or try a search?</p>
              <Link to="/" className="btn btn-primary rounded-pill py-3 px-5">Go Back To Home</Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
