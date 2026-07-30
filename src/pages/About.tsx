import { company, sellingPoints } from '../data/company'
import { asset } from '../lib/asset'
import './About.css'

function About() {
  return (
    <div className="page-about">
      <section className="about-hero section-dark">
        <div className="container">
          <p className="eyebrow">About Us</p>
          <h1>{company.tagline}</h1>
          <p className="about-lead">
            {company.name} is a one-stop building and renovation team proudly servicing {company.area}.
            From glass and aluminium installations to full house renovations, we bring quality workmanship,
            reliable service, and exceptional results to every project.
          </p>
        </div>
      </section>

      <section>
        <div className="container about-grid">
          <img
            src={asset('/images/renovations/house-exterior-white.jpg')}
            alt="Completed renovation by KB Projects"
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
          </div>
        </div>
      </section>

      <section className="section-alt">
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
    </div>
  )
}

export default About
