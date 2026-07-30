import { useState } from 'react'
import { Link } from 'react-router-dom'
import { company, services, sellingPoints } from '../data/company'
import PageHero from '../components/PageHero'
import './Contact.css'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page-contact">
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Start Your Project"
        description="Free quotes. No hidden fees. Reach out and we'll get back to you shortly."
        photo="/images/renovations/house-under-construction.jpg"
        photoAlt="KB Projects team on a renovation site"
      />

      <section>
        <div className="container contact-grid">
          <div className="contact-details">
            <h2>Contact Details</h2>
            <p>
              <strong>Phone / WhatsApp:</strong>{' '}
              <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            </p>
            <p>
              <strong>Email:</strong> <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <p>
              <strong>Service Area:</strong> {company.area}
            </p>
            <ul className="contact-why">
              {sellingPoints.slice(0, 4).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link to="/faq" className="contact-faq-link">Have a question? Check our FAQ &rarr;</Link>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Request a Free Quote</h2>
            {submitted ? (
              <p className="contact-success">
                Thanks! Your request has been noted — call or WhatsApp {company.phone} for the fastest
                response.
              </p>
            ) : (
              <>
                <label>
                  Name
                  <input type="text" name="name" required />
                </label>
                <label>
                  Phone or Email
                  <input type="text" name="contact" required />
                </label>
                <label>
                  Service Needed
                  <select name="service" defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Message
                  <textarea name="message" rows={4} required />
                </label>
                <button type="submit" className="btn btn-primary">
                  Send Request
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
