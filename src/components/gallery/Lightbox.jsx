import { useEffect } from 'react'

export default function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Image lightbox">
      <span className="lightbox-close" onClick={onClose} aria-label="Close">&times;</span>
      <img src={src} alt={alt || 'Gallery'} onClick={(e) => e.stopPropagation()} />
    </div>
  )
}
