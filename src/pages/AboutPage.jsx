import PageHeader from '../components/layout/PageHeader'
import Divisions from '../components/home/Divisions'
import AboutSection from '../components/home/AboutSection'
import { Container, Row, Col } from 'react-bootstrap'

const stats = [
  { icon: 'fa-check', value: 20, label: 'Years Experience' },
  { icon: 'fa-users-cog', value: 30, label: 'Expert Technicians' },
  { icon: 'fa-users', value: 1000, label: 'Satisfied Clients' },
  { icon: 'fa-car', value: 600, label: 'Complete Projects' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" breadcrumbs={[{ label: 'About' }]} />
      <Divisions />
      <AboutSection />
      <div className="container-fluid fact bg-dark my-5 py-5">
        <Container>
          <Row className="g-4">
            {stats.map((s, i) => (
              <Col md={6} lg={3} key={i} className="text-center">
                <i className={`fa ${s.icon} fa-2x text-white mb-3`} />
                <h2 className="text-white mb-2">{s.value}</h2>
                <p className="text-white mb-0">{s.label}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}
