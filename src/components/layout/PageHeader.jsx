import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { galleryImages } from '../../data/galleryImages'

function getRandomGalleryImage() {
  if (!galleryImages.length) return '/imgs/carousel-bg-1.jpg'
  const i = Math.floor(Math.random() * galleryImages.length)
  return galleryImages[i]
}

export default function PageHeader({ title, breadcrumbs = [] }) {
  const [bgImage, setBgImage] = useState(() => getRandomGalleryImage())

  useEffect(() => {
    setBgImage(getRandomGalleryImage())
  }, [title])

  return (
    <div
      className="container-fluid page-header mb-5 p-0"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container-fluid page-header-inner py-5">
        <Container className="text-center">
          <h1 className="page-header-title text-white mb-3 mb-md-4">{title}</h1>
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
