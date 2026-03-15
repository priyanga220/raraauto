import { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { siteConfig } from '../../data/siteConfig'

const divisions = [
  { value: '1', label: 'RARA Auto Truck Body' },
  { value: '2', label: 'RARA Auto Truck Repair' },
  { value: '3', label: 'RARA Auto Mechanical Workshop' },
  { value: '4', label: 'RARA Auto Tyre Workshop' },
]

export default function BookingForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [division, setDivision] = useState('')
  const [date, setDate] = useState(null)
  const [description, setDescription] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    if (siteConfig.bookingFormEndpoint) {
      try {
        const res = await fetch(siteConfig.bookingFormEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, division: divisions.find(d => d.value === division)?.label, date: date?.toISOString(), description }),
        })
        if (res.ok) setSent(true)
      } catch (_) {}
    } else {
      setSent(true)
    }
    setSubmitting(false)
  }

  if (sent) {
    return <p className="text-white mb-0">Thank you! We will contact you shortly.</p>
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="g-3">
        <Col xs={12} sm={6}>
          <Form.Control type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="border-0" style={{ height: 55 }} required />
        </Col>
        <Col xs={12} sm={6}>
          <Form.Control type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-0" style={{ height: 55 }} required />
        </Col>
        <Col xs={12} sm={6}>
          <Form.Select value={division} onChange={(e) => setDivision(e.target.value)} className="border-0" style={{ height: 55 }} required>
            <option value="">Select A Division</option>
            {divisions.map((d) => <option key={d.value} value={d.value}>{d.label}</option>)}
          </Form.Select>
        </Col>
        <Col xs={12} sm={6}>
          <DatePicker selected={date} onChange={setDate} placeholderText="Service Date" className="form-control border-0" style={{ height: 55 }} dateFormat="yyyy-MM-dd" />
        </Col>
        <Col xs={12}>
          <Form.Control as="textarea" rows={3} placeholder="Service description" value={description} onChange={(e) => setDescription(e.target.value)} className="border-0" />
        </Col>
        <Col xs={12}>
          <Button type="submit" className="btn btn-secondary w-100 py-3" disabled={submitting}>
            {submitting ? 'Sending...' : 'Book Now'}
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
