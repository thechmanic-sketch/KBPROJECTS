import { Link } from 'react-router-dom'
import { company, services, sellingPoints, siteStats, resourceCategories } from '../data/company'
import Reveal from '../components/Reveal'
import StatCounter from '../components/StatCounter'
import Accordion from '../components/Accordion'
import SpotlightSlider from '../components/SpotlightSlider'
import { asset } from '../lib/asset'
import './Home.css'

const projectSpotlights = [
  {
    image: '/images/glass-aluminium/doors-enclosures/enclosure-sea-view.jpg',
    title: 'Sea View Glass Enclosure',
    category: 'Glass & Aluminium',
  },
  {
    image: '/images/bathrooms/bathroom-after.jpg',
    title: 'Full Bathroom Renovation',
    category: 'Building Renovations',
  },
  {
    image: '/images/security-gates/trellis-gate-patio.jpg',
    title: 'Patio Security Upgrade',
    category: 'Security & Trellis Gates',
  },
]

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

      <section className="difference">
        <div className="container difference-rail">
          <Reveal as="div" className="difference-announcement">
            <p className="eyebrow">Available Now</p>
            <h2>Free Quotes on Every Project</h2>
            <div className="difference-announcement-body">
              <img
                src={asset('/images/roofing/team-on-roof.jpg')}
                alt="KB Projects team on site"
                className="announcement-img"
              />
              <div>
                <p>
                  With years of hands-on experience across glass &amp; aluminium, renovations, and
                  general building, KB Projects brings every trade under one roof so you never have
                  to juggle multiple contractors.
                </p>
                <p>
                  <strong>Same-Day Glass Repairs</strong> &mdash; most breakages and shopfront glazing
                  jobs are handled the same day you call.{' '}
                  <Link to="/services#glass-aluminium">Learn More</Link>
                </p>
                <p>
                  <strong>Full Renovation Projects</strong> &mdash; from concept to completion, one
                  team manages the whole build.{' '}
                  <Link to="/services#building-renovations">Learn More</Link>
                </p>
                <Link to="/contact" className="btn btn-outline btn-sm">Contact Us</Link>
              </div>
            </div>
          </Reveal>

          <Reveal as="div" className="difference-numbers" delay={0.1}>
            <p className="eyebrow">In Numbers</p>
            <h2>The KB Difference</h2>
            <div className="difference-highlight">
              <div className="difference-highlight-stat">
                <StatCounter value={siteStats[0].value} suffix={siteStats[0].suffix} label={siteStats[0].label} />
                <Link to="/services">Core Services &rarr;</Link>
              </div>
              <img
                src={asset('/images/renovations/house-under-construction.jpg')}
                alt="KB Projects renovation project"
                className="difference-photo"
              />
            </div>
            <div className="difference-row">
              {siteStats.slice(1).map((stat) => (
                <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
              ))}
            </div>
          </Reveal>

          <div className="difference-shape" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="resources">
        <div className="resources-top">
          <div className="container resources-top-inner">
            <Reveal className="resources-copy">
              <p className="eyebrow">Insights</p>
              <h2>Resources For Your Project</h2>
              <p>
                KB Projects is committed to serving clients of every size across {company.area} with
                rigorous, reliable building and renovation solutions. Click a category below to
                quickly find the services and information most relevant to you.
              </p>
            </Reveal>
          </div>
          <div className="resources-photo-wrap">
            <img
              src={asset('/images/glass-aluminium/doors-enclosures/bifold-doors-pool.jpg')}
              alt="KB Projects aluminium and glazing work"
              className="resources-photo"
            />
          </div>
        </div>

        <div className="resources-bottom section-alt">
          <div className="container resources-bottom-inner">
            <Reveal as="div" className="resources-accordion-col">
              <Accordion items={resourceCategories} />
            </Reveal>
            <Reveal as="div" className="resources-side-col" delay={0.1}>
              <p>
                KB Projects can help provide a complete solution for your property &mdash; from
                initial quote and design through to installation and aftercare. These services can be
                tailored to fit projects of any size, residential or commercial.
              </p>
              <Link to="/contact" className="btn btn-outline btn-sm">Learn More</Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="spotlight section-dark">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Featured Work</p>
            <h2>KB Projects, One Completed Job at a Time</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <SpotlightSlider>
              {projectSpotlights.map((item) => (
                <Link to="/gallery" className="spotlight-card" key={item.title}>
                  <img src={asset(item.image)} alt={item.title} />
                  <span className="spotlight-view">View Project</span>
                  <div className="spotlight-caption">
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                  </div>
                </Link>
              ))}
            </SpotlightSlider>
          </Reveal>
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
