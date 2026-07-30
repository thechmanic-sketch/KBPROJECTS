import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { services, company } from '../data/company'
import { asset } from '../lib/asset'
import './Services.css'

function Services() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const target = document.getElementById(hash.slice(1))
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <div className="page-services">
      <section className="services-hero section-dark">
        <div className="container">
          <p className="eyebrow">Our Services</p>
          <h1>One Team. Endless Solutions.</h1>
          <p>Your one-stop solution for all building and renovation needs across {company.area}.</p>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          id={service.slug}
          key={service.slug}
          className={index % 2 === 1 ? 'service-detail section-alt' : 'service-detail'}
        >
          <div className="container service-detail-grid">
            <img
              src={asset(service.image)}
              alt={service.name}
              className={index % 2 === 1 ? 'service-detail-image order-2' : 'service-detail-image'}
            />
            <div>
              <h2>{service.name}</h2>
              <p className="service-detail-desc">{service.description}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="section-dark services-cta">
        <div className="container">
          <h2>Not sure which service you need?</h2>
          <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
        </div>
      </section>
    </div>
  )
}

export default Services
