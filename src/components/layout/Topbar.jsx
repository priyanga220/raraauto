import { siteConfig } from '../../data/siteConfig'

export default function Topbar() {
  const { address, phone, openingHours, whatsappNumber, whatsappMessage, facebookUrl } = siteConfig
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="container-fluid bg-light p-0">
      <div className="row gx-0 d-none d-lg-flex topbar-row">
        <div className="col-lg-7 px-5 text-start">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <small className="fa fa-map-marker-alt text-primary me-2" />
            <small>{address}</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center py-3">
            <small className="far fa-clock text-primary me-2" />
            <small>Mon - Fri : {openingHours.weekdays}</small>
          </div>
        </div>
        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <a href={`tel:${phone.replace(/-/g, '')}`}>
              <small className="fa fa-phone-alt text-primary me-2" />
            </a>
            <small>{phone}</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center">
            <a className="btn btn-sm-square bg-white text-primary me-1" title="Chat on WhatsApp" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp" />
            </a>
            <a className="btn btn-sm-square bg-white text-primary me-1" target="_blank" rel="noopener noreferrer" title="Facebook" href={facebookUrl}>
              <i className="fab fa-facebook-f" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
