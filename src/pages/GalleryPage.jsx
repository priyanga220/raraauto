import PageHeader from '../components/layout/PageHeader'
import GalleryGrid from '../components/gallery/GalleryGrid'

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Gallery" breadcrumbs={[{ label: 'Gallery' }]} />
      <GalleryGrid />
    </>
  )
}
