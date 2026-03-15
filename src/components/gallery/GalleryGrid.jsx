import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Lightbox from './Lightbox'
import { galleryImages } from '../../data/galleryImages'

export default function GalleryGrid() {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  if (!galleryImages.length) {
    return (
      <Container className="py-5 text-center">
        <p className="text-muted">No gallery images yet. Add paths in <code>src/data/galleryImages.js</code> and place files in <code>public/imgs/gallery/</code>.</p>
      </Container>
    )
  }

  return (
    <>
      <Container className="py-5">
        <Row className="gallery-grid g-4">
          {galleryImages.map((src, i) => (
            <Col key={i} xs={6} md={4} lg={3}>
              <a href="#lightbox" onClick={(e) => { e.preventDefault(); setLightboxSrc(src) }} className="d-block rounded overflow-hidden">
                <img src={src} alt={`Gallery ${i + 1}`} className="img-thumbnail border-0 p-0 w-100" />
              </a>
            </Col>
          ))}
        </Row>
      </Container>
      {lightboxSrc && <Lightbox src={lightboxSrc} alt="Gallery" onClose={() => setLightboxSrc(null)} />}
    </>
  )
}
