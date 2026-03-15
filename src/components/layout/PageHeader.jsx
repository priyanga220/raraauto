import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export default function PageHeader({ title, breadcrumbs = [] }) {
  return (
    <div
      className="container-fluid page-header mb-5 p-0"
      style={{ backgroundImage: 'url(/imgs/carousel-bg-1.jpg)' }}
    >
      <div className="container-fluid page-header-inner py-5">
        <Container className="text-center">
          <h1 className="display-3 text-white mb-3">{title}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white text-decoration-none">Home</Link>
              </li>
              {breadcrumbs.map(({ label, to }) => (
                <li key={label} className="breadcrumb-item">
                  {to ? <Link to={to} className="text-white text-decoration-none">{label}</Link> : <span className="text-white active">{label}</span>}
                </li>
              ))}
            </ol>
          </nav>
        </Container>
      </div>
    </div>
  )
}
