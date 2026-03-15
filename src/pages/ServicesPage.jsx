import PageHeader from '../components/layout/PageHeader'
import Divisions from '../components/home/Divisions'
import ServicesTabs from '../components/services/ServicesTabs'
import OurWorkCarousel from '../components/home/OurWorkCarousel'

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services" breadcrumbs={[{ label: 'Services' }]} />
      <ServicesTabs />
      <OurWorkCarousel />
    </>
  )
}
