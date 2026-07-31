import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { company, services, sellingPoints, siteStats, resourceCategories } from '../data/company'
import Reveal from '../components/Reveal'
import StatCounter from '../components/StatCounter'
import Accordion from '../components/Accordion'
import SpotlightSlider from '../components/SpotlightSlider'
import HeroSlider from '../components/HeroSlider'
import PointsStrip from '../components/PointsStrip'
import { asset } from '../lib/asset'
import './Home.css'

const heroSlides = [
  { src: '/images/renovations/house-under-construction.jpg', alt: 'Double-storey renovation under construction' },
  { src: '/images/glass-aluminium/doors-enclosures/enclosure-sea-view.jpg', alt: 'Sea view glass enclosure' },
  { src: '/images/bathrooms/bathroom-after.jpg', alt: 'Completed bathroom renovation' },
  { src: '/images/security-gates/trellis-gate-patio.jpg', alt: 'Patio security trellis gate' },
  { src: '/images/glass-aluminium/shopfronts/shopfront-after-repaired.jpg', alt: 'Repaired shopfront glazing' },
]

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

const featuredHighlights = [
  {
    tag: 'Same-Day Service',
    title: 'Fast Glass & Aluminium Repairs',
    to: '/services#glass-aluminium',
  },
  {
    tag: 'Full Service',
    title: 'Concept-to-Completion Renovations',
    to: '/services#building-renovations',
  },
]

const latestUpdates = [
  {
    image: '/images/glass-aluminium/shopfronts/shopfront-after-repaired.jpg',
    tag: 'Glass & Aluminium',
    title: 'Shopfront Glazing Repaired and Reopened Same Day',
  },
  {
    image: '/images/renovations/house-under-construction.jpg',
    tag: 'Building Renovations',
    title: 'Double-Storey Renovation Nearing Completion',
  },
  {
    image: '/images/showers/bathroom-shower-vanity.jpg',
    tag: 'Shower Solutions',
    title: 'Frameless Shower & Vanity Installation Complete',
  },
  {
    image: '/images/plumbing/jojo-tank-installed.jpg',
    tag: 'Plumbing',
    title: 'JoJo Water Tank Installed for New Client',
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
          <HeroSlider slides={heroSlides} />
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

      <section className="impact">
        <div className="container impact-inner">
          <Reveal className="impact-copy">
            <h2>Ready to Start Your Project?</h2>
            <p>
              We are committed to serving every client across {company.area} with safe, reliable and
              high-quality workmanship. Whether it's a same-day repair or a full renovation, your
              project matters to us.
            </p>
          </Reveal>
          <Link to="/contact" className="btn btn-dark impact-cta">Get a Free Quote</Link>
        </div>
      </section>

      <section className="highlights">
        <div className="container">
          <Reveal as="div" className="highlights-box">
            <div className="highlights-intro">
              <h2>Featured Highlights</h2>
              <Link to="/services">&rarr; Explore All Services</Link>
            </div>
            {featuredHighlights.map((item) => (
              <Fragment key={item.title}>
                <span className="highlights-divider" aria-hidden="true" />
                <div className="highlights-item">
                  <span className="highlights-tag">{item.tag}</span>
                  <Link to={item.to}>{item.title}</Link>
                </div>
              </Fragment>
            ))}
          </Reveal>

          <div className="news-row">
            <div className="news-blocks" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="news-intro">
              <h2>KB Projects Latest Updates</h2>
              <Link to="/gallery">&rarr; Explore Full Gallery</Link>
            </div>
            <Reveal as="div" className="news-grid" stagger delay={0.1}>
              {latestUpdates.map((item) => (
                <Link to="/gallery" className="news-card" key={item.title}>
                  <img src={asset(item.image)} alt={item.title} />
                  <span className="news-tag">{item.tag}</span>
                  <p>{item.title}</p>
                </Link>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="selling-points section-alt">
        <PointsStrip items={sellingPoints} />
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
