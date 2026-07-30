import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { services, company } from '../data/company'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
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
      <PageHero
        eyebrow="Our Services"
        title="One Team. Endless Solutions."
        description={`Your one-stop solution for all building and renovation needs across ${company.area}. Explore our full range of services below.`}
        photo="/images/glass-aluminium/doors-enclosures/bifold-doors-pool.jpg"
        photoAlt="KB Projects bifold doors installation"
        primaryCta={{ label: 'Get a Free Quote', to: '/contact' }}
      />

      {services.map((service, index) => (
        <section
          id={service.slug}
          key={service.slug}
          className={index % 2 === 1 ? 'service-detail section-alt' : 'service-detail'}
        >
          <div className="container service-detail-grid">
            <Reveal as="div" className={index % 2 === 1 ? 'order-2' : undefined}>
              <img
                src={asset(service.image)}
                alt={service.name}
                className="service-detail-image"
              />
            </Reveal>
            <Reveal as="div" delay={0.1}>
              <h2>{service.name}</h2>
              <p className="service-detail-desc">{service.description}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to="/gallery" className="btn btn-outline btn-sm">See Related Projects</Link>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="section-dark services-cta">
        <div className="container">
          <Reveal>
            <h2>Not sure which service you need?</h2>
            <p>Contact us and we'll help you find the right solution for your project.</p>
          </Reveal>
          <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
        </div>
      </section>
    </div>
  )
}

export default Services
