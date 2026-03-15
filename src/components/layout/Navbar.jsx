import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container, Nav, Navbar as BSNavbar, NavDropdown } from 'react-bootstrap'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <BSNavbar expand="lg" className={`navbar-rara bg-white navbar-light shadow sticky-top p-0 ${scrolled ? 'scrolled' : ''}`} variant="light">
      <Container fluid className="px-0">
        <BSNavbar.Brand as={Link} to="/" className="d-flex align-items-center px-4 px-lg-5">
          <span className="navbar-brand-logo" aria-hidden />
          <span className="d-none d-lg-block m-0 text-primary ms-2">RARA AuTo Co., LTd</span>
          <span className="d-lg-none m-0 text-primary ms-2" style={{ fontSize: '0.9rem' }}>RARA AuTo Co., LTd</span>
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbarCollapse" className="me-4" />
        <BSNavbar.Collapse id="navbarCollapse">
          <Nav className="ms-auto p-4 p-lg-0">
            <Nav.Link as={NavLink} to="/" end className="nav-link">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link">About</Nav.Link>
            <Nav.Link as={NavLink} to="/services" className="nav-link">Services</Nav.Link>
            <NavDropdown title="Pages" id="pages-dropdown" align="end">
              <NavDropdown.Item as={Link} to="/readmore">Read More</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/booking">Booking</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gallery">Gallery</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/contact" className="nav-link">Contact</Nav.Link>
          </Nav>
          <Link to="/booking" className="btn btn-primary navbar-quote-btn d-none d-lg-flex align-items-center ms-lg-3">
            Get A Quote <i className="fa fa-arrow-right ms-3" />
          </Link>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  )
}
