import { Link } from 'react-router-dom'
import { asset } from '../lib/asset'
import './PageHero.css'

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  photo: string
  photoAlt: string
  primaryCta?: { label: string; to: string }
  secondaryCta?: { label: string; to: string }
}

function PageHero({ eyebrow, title, description, photo, photoAlt, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-top">
        <div className="container page-hero-inner">
          <div className="page-hero-copy">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
          </div>
          <div className="page-hero-side">
            <p className="page-hero-sub">{description}</p>
            {secondaryCta && (
              <Link to={secondaryCta.to} className="btn btn-outline page-hero-btn">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
        <div className="page-hero-arc" />
      </div>
      <div className="page-hero-photo-wrap">
        <img className="page-hero-photo" src={asset(photo)} alt={photoAlt} />
      </div>
      {primaryCta && (
        <div className="container page-hero-cta-row">
          <Link to={primaryCta.to} className="btn btn-primary">
            {primaryCta.label}
          </Link>
        </div>
      )}
    </section>
  )
}

export default PageHero
