import { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { siteConfig } from '../../data/siteConfig'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    if (siteConfig.contactFormEndpoint) {
      try {
        const res = await fetch(siteConfig.contactFormEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, subject, message }),
        })
        if (res.ok) setSent(true)
      } catch (_) {}
    } else {
      setSent(true)
    }
    setSubmitting(false)
  }

  if (sent) {
    return <p className="text-success mb-0">Thank you! We will get back to you shortly.</p>
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="g-3">
        <Col md={6}>
          <Form.Floating>
            <Form.Control id="name" type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <label htmlFor="name">Your Name</label>
          </Form.Floating>
        </Col>
        <Col md={6}>
          <Form.Floating>
            <Form.Control id="email" type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label htmlFor="email">Your Email</label>
          </Form.Floating>
        </Col>
        <Col xs={12}>
          <Form.Floating>
            <Form.Control id="subject" type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
            <label htmlFor="subject">Subject</label>
          </Form.Floating>
        </Col>
        <Col xs={12}>
          <Form.Floating>
            <Form.Control as="textarea" id="message" placeholder="Message" style={{ height: 100 }} value={message} onChange={(e) => setMessage(e.target.value)} required />
            <label htmlFor="message">Message</label>
          </Form.Floating>
        </Col>
        <Col xs={12}>
          <Button type="submit" className="btn btn-primary w-100 py-3" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send Message'}
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
