import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

export default function ServicesSection() {
  return (
    <div className="container-xxl service py-5">
      <Container>
        <div className="text-center mb-5">
          <h6 className="text-primary text-uppercase">// Our Services //</h6>
          <h1 className="mb-0">Explore Our Services</h1>
        </div>
        <Row className="g-4">
          <Col lg={4}>
            <div className="nav flex-column nav-pills">
              <Link to="/services" className="nav-link active d-flex align-items-center text-start p-4 mb-3 rounded">
                <i className="fa fa-truck fa-2x me-3" />
                <h4 className="m-0">RARA Auto Truck Body</h4>
              </Link>
              <Link to="/services" className="nav-link d-flex align-items-center text-start p-4 mb-3 rounded">
                <i className="fa fa-tools fa-2x me-3" />
                <h4 className="m-0">RARA Auto Truck Repair</h4>
              </Link>
              <Link to="/services" className="nav-link d-flex align-items-center text-start p-4 mb-3 rounded">
                <i className="fa fa-oil-can fa-2x me-3" />
                <h4 className="m-0">High Quality Auto Repair</h4>
              </Link>
              <Link to="/services" className="nav-link d-flex align-items-center text-start p-4 rounded">
                <i className="fa fa-cog fa-2x me-3" />
                <h4 className="m-0">Excavator Machine Repair</h4>
              </Link>
            </div>
          </Col>
          <Col lg={8}>
            <div className="bg-light p-4 rounded" style={{ minHeight: '320px' }}>
              <h3 className="mb-3">Pioneering unique approaches that distinguish us from the competition.</h3>
              <p><i className="fa fa-check text-success me-3" />Double Down Chassis</p>
              <p><i className="fa fa-check text-success me-3" />Fix Crane</p>
              <p><i className="fa fa-check text-success me-3" />Install A PTO</p>
              <p><i className="fa fa-check text-success me-3" />Make Long Trailer</p>
              <p><i className="fa fa-check text-success me-3" />Shaken</p>
              <Link to="/services" className="btn btn-primary py-3 px-5 mt-3">View All Services <i className="fa fa-arrow-right ms-3" /></Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
