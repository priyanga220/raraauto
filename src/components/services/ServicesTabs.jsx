import { useState } from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'

const tabs = [
  { key: '1', icon: 'fa-truck', title: 'RARA Auto Truck Body', img: '/imgs/truckrepair1.jpeg', heading: 'Pioneering unique approaches that distinguish us from the competition.', items: ['Double Down Chassis', 'Fix Crane', 'Install A PTO', 'Make Long Trailer', 'Shaken'] },
  { key: '2', icon: 'fa-tools', title: 'RARA Auto Truck Repair', img: '/imgs/truckrepair2.jpeg', heading: 'Unmatched expertise in truck repairing solutions.', items: ['Engine Repair', 'Gear Box repair', 'Truck Body Painting', 'Crane Painting'] },
  { key: '3', icon: 'fa-oil-can', title: 'High Quality Auto Repair', img: '/imgs/carrepair1.jpeg', heading: 'High Quality Auto Repair With 20 Years Japanese Experience', items: ['Oil Change & Lube', 'Timing Belt', 'Transmission Repair', 'Wiper Inserts', 'A/C & Heating', 'Maintenance', 'Any Repair or Service'] },
  { key: '4', icon: 'fa-cog', title: 'Excavator Machine Repair', img: '/imgs/carrepair1.jpeg', heading: 'All your heavy machinery repair needs', items: ['Quality Servicing', 'Expert Workers', 'Modern Equipment'] },
]

export default function ServicesTabs() {
  const [activeKey, setActiveKey] = useState('1')

  return (
    <div className="container-xxl service py-5">
      <Container>
        <div className="text-center mb-5">
          <h6 className="text-primary text-uppercase">// Our Services //</h6>
          <h1 className="mb-0">Explore Our Services</h1>
        </div>
        <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
          <Row className="g-4">
            <Col lg={4}>
              <Nav variant="pills" className="flex-column">
                {tabs.map((t) => (
                  <Nav.Item key={t.key}>
                    <Nav.Link eventKey={t.key} className="d-flex align-items-center text-start p-4 mb-3 rounded">
                      <i className={`fa ${t.icon} fa-2x me-3`} />
                      <h4 className="m-0">{t.title}</h4>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col lg={8}>
              <Tab.Content>
                {tabs.map((t) => (
                  <Tab.Pane key={t.key} eventKey={t.key}>
                    <Row className="g-4">
                      <Col md={6} style={{ minHeight: 350 }}>
                        <div className="position-relative h-100 rounded overflow-hidden">
                          <img className="position-absolute img-fluid w-100 h-100" src={t.img} style={{ objectFit: 'cover' }} alt="" />
                        </div>
                      </Col>
                      <Col md={6}>
                        <h3 className="mb-3">{t.heading}</h3>
                        {t.items.map((item, i) => (
                          <p key={i}><i className="fa fa-check text-success me-3" />{item}</p>
                        ))}
                      </Col>
                    </Row>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  )
}
