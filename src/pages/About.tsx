import { Link } from 'react-router-dom'
import { company, sellingPoints, siteStats } from '../data/company'
import Reveal from '../components/Reveal'
import StatCounter from '../components/StatCounter'
import PageHero from '../components/PageHero'
import { asset } from '../lib/asset'
import './About.css'

const photoStrip = [
  '/images/glass-aluminium/windows/apartment-windows-1.jpg',
  '/images/renovations/house-under-construction.jpg',
  '/images/bathrooms/bathroom-after.jpg',
  '/images/security-gates/trellis-gate-corridor.jpg',
]

function About() {
  return (
    <div className="page-about">
      <PageHero
        eyebrow="About Us"
        title={company.tagline}
        description={`${company.name} is a one-stop building and renovation team proudly servicing ${company.area}. From glass and aluminium installations to full house renovations, we bring quality workmanship, reliable service, and exceptional results to every project.`}
        photo="/images/renovations/house-exterior-white.jpg"
        photoAlt="Completed renovation by KB Projects"
        primaryCta={{ label: 'Get a Free Quote', to: '/contact' }}
      />

      <section>
        <div className="container about-grid">
          <img
            src={asset('/images/roofing/team-on-roof.jpg')}
            alt="KB Projects team on site"
            className="about-image"
          />
          <div>
            <p className="eyebrow">Our Story</p>
            <h2>Transforming Spaces. Building Better Futures.</h2>
            <p>
              What started as a specialist aluminium and glazing outfit has grown into a full building and
              renovation company. Today we handle everything from same-day glass repairs to complete
              structural renovations &mdash; all under one roof, so our clients never have to juggle multiple
              contractors.
            </p>
            <p>
              Every job, big or small, gets the same commitment to quality materials, experienced tradespeople,
              and honest, upfront pricing.
            </p>
            <Link to="/services" className="btn btn-outline btn-sm">See Our Services</Link>
          </div>
        </div>
      </section>

      <section className="section-alt about-stats">
        <div className="container">
          <Reveal as="div" className="about-stats-row" stagger>
            {siteStats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <p className="eyebrow">Why Choose Us</p>
          <h2>Quality Workmanship You Can Trust</h2>
          <ul className="about-points">
            {sellingPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Our Work</p>
            <h2>A Glimpse at Recent Projects</h2>
          </Reveal>
          <Reveal as="div" className="about-photo-strip" stagger delay={0.1}>
            {photoStrip.map((photo) => (
              <img key={photo} src={asset(photo)} alt="KB Projects completed work" />
            ))}
          </Reveal>
          <div className="about-photo-cta">
            <Link to="/gallery" className="btn btn-dark">View Full Gallery</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
