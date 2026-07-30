import { Link } from 'react-router-dom'
import { company, services, sellingPoints } from '../data/company'
import './Home.css'

function Home() {
  return (
    <div className="page-home">
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">Serving {company.area}</p>
          <h1>{company.tagline}</h1>
          <p className="hero-sub">{company.subTagline}</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
            <Link to="/gallery" className="btn btn-outline">View Our Work</Link>
          </div>
        </div>
        <img
          className="hero-image"
          src="/images/renovations/house-under-construction.jpg"
          alt="KB Projects renovation in progress"
        />
      </section>

      <section className="selling-points section-alt">
        <div className="container points-grid">
          {sellingPoints.map((point) => (
            <div className="point-card" key={point}>
              <span className="point-check">✓</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <p className="eyebrow">What We Do</p>
          <h2>One Team. Endless Solutions.</h2>
          <div className="services-grid">
            {services.map((service) => (
              <Link to={`/services#${service.slug}`} className="service-card" key={service.slug}>
                <img src={service.image} alt={service.name} />
                <div className="service-card-body">
                  <h3>{service.name}</h3>
                  <p>{service.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band section-dark">
        <div className="container cta-inner">
          <div>
            <h2>Ready to start your project?</h2>
            <p>Free quotes. No hidden fees. Built to last.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
