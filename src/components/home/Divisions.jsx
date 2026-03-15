import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

const divisions = [
  { icon: 'fa-truck', title: 'RARA AUTO TRUCK BODY MAKERS', text: 'Breaking new ground with innovative solutions that set us apart.', to: '/readmore' },
  { icon: 'fa-tools', title: 'RARA AUTO TRUCK REPAIR', text: 'Backed by 20 years of unmatched expertise in truck repairing solutions.', to: '/readmore', light: true },
  { icon: 'fa-car', title: 'RARA AUTO MECHANICAL WORKSHOP', text: 'Vast range of automobile services under one roof.', to: '/readmore' },
]

export default function Divisions() {
  return (
    <div className="container-xxl py-5">
      <Container>
        <Row className="g-4">
          {divisions.map((d, i) => (
            <Col lg={4} md={6} key={i}>
              <div className={`d-flex py-5 px-4 ${d.light ? 'bg-light' : ''}`} style={{ borderRadius: 'var(--radius)' }}>
                <i className={`fa ${d.icon} fa-3x text-primary flex-shrink-0`} />
                <div className="ps-4">
                  <h6 className="mb-3">{d.title}</h6>
                  <p className="mb-2">{d.text}</p>
                  <Link to={d.to} className="text-secondary border-bottom text-decoration-none">Read More</Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
