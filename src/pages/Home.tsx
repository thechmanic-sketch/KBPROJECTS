import { Link } from 'react-router-dom'
import { company, services, sellingPoints, siteStats } from '../data/company'
import Reveal from '../components/Reveal'
import StatCounter from '../components/StatCounter'
import { asset } from '../lib/asset'
import './Home.css'

const beforeAfterShowcase = [
  {
    before: '/images/glass-aluminium/shopfronts/shopfront-before-broken.jpg',
    after: '/images/glass-aluminium/shopfronts/shopfront-after-repaired.jpg',
    label: 'Shopfront Glass Replacement',
  },
  {
    before: '/images/bathrooms/bathroom-before.jpg',
    after: '/images/bathrooms/bathroom-after.jpg',
    label: 'Full Bathroom Renovation',
  },
  {
    before: '/images/glass-aluminium/windows/window-before-bars.jpg',
    after: '/images/glass-aluminium/windows/house-windows-after.jpg',
    label: 'Window & Aluminium Upgrade',
  },
]

function Home() {
  return (
    <div className="page-home">
      <section className="hero">
        <div className="hero-top">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Serving {company.area}</p>
              <h1>{company.tagline}</h1>
            </div>
            <div className="hero-side">
              <p className="hero-sub">{company.subTagline}</p>
              <Link to="/about" className="btn btn-outline hero-who-btn">Who We Are</Link>
            </div>
          </div>
          <div className="hero-arc" />
        </div>
        <div className="hero-photo-wrap">
          <img
            className="hero-photo"
            src={asset('/images/renovations/house-under-construction.jpg')}
            alt="KB Projects team at work on a renovation"
          />
        </div>
        <div className="container hero-cta-row">
          <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
        </div>
      </section>

      <section className="selling-points section-alt">
        <div className="container">
          <Reveal as="div" className="points-grid" stagger>
            {sellingPoints.map((point) => (
              <div className="point-card" key={point}>
                <span className="point-check">✓</span>
                <span>{point}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <Reveal>
            <p className="eyebrow">What We Do</p>
            <h2>One Team. Endless Solutions.</h2>
          </Reveal>
          <Reveal as="div" className="services-grid" stagger delay={0.1}>
            {services.map((service) => (
              <Link to={`/services#${service.slug}`} className="service-card" key={service.slug}>
                <img src={asset(service.image)} alt={service.name} />
                <div className="service-card-body">
                  <h3>{service.name}</h3>
                  <p>{service.shortDescription}</p>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="stats-band section-dark">
        <div className="stats-shape" />
        <div className="container stats-inner">
          <Reveal>
            <p className="eyebrow">The KB Difference</p>
            <h2>Quality Workmanship You Can Trust</h2>
          </Reveal>
          <Reveal as="div" className="stats-grid" stagger delay={0.1}>
            {siteStats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="showcase section-alt">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Real Projects</p>
            <h2>Before &amp; After, Around KZN</h2>
          </Reveal>
          <Reveal as="div" className="showcase-grid" stagger delay={0.1}>
            {beforeAfterShowcase.map((item) => (
              <div className="showcase-card" key={item.label}>
                <div className="showcase-images">
                  <img src={asset(item.before)} alt={`${item.label} before`} />
                  <img src={asset(item.after)} alt={`${item.label} after`} />
                </div>
                <p className="showcase-label">{item.label}</p>
              </div>
            ))}
          </Reveal>
          <div className="showcase-cta">
            <Link to="/gallery" className="btn btn-dark">See Full Gallery</Link>
          </div>
        </div>
      </section>

      <section className="cta-band section-dark">
        <div className="container cta-inner">
          <Reveal>
            <h2>Ready to start your project?</h2>
            <p>Free quotes. No hidden fees. Built to last.</p>
          </Reveal>
          <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
