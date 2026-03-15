import PageHeader from '../components/layout/PageHeader'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ReadMorePage() {
  return (
    <>
      <PageHeader title="Technicians" breadcrumbs={[{ label: 'More Info' }]} />
      <Container className="py-5">
        <div className="text-center mb-5">
          <h6 className="text-primary text-uppercase">// More Details //</h6>
          <h1 className="mb-4">Find Out More</h1>
          <p className="lead">Learn more about our divisions, expertise, and how we can help with your truck and automotive needs.</p>
          <Link to="/about" className="btn btn-primary py-3 px-5 me-2">About Us</Link>
          <Link to="/services" className="btn btn-outline-primary py-3 px-5">Our Services</Link>
        </div>
      </Container>
    </>
  )
}
