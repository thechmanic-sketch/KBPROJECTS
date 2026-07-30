import { useMemo, useState } from 'react'
import { galleryImages, company } from '../data/company'
import PageHero from '../components/PageHero'
import { asset } from '../lib/asset'
import './Gallery.css'

function Gallery() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(galleryImages.map((img) => img.category)))],
    [],
  )
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? galleryImages : galleryImages.filter((img) => img.category === active)

  return (
    <div className="page-gallery">
      <PageHero
        eyebrow="Our Work"
        title="Gallery"
        description={`Real before & after projects from around ${company.area}. Filter by category to see the work most relevant to you.`}
        photo="/images/glass-aluminium/shopfronts/shopfront-after-repaired.jpg"
        photoAlt="Completed shopfront glazing project"
        secondaryCta={{ label: 'Request a Free Quote', to: '/contact' }}
      />

      <section>
        <div className="container">
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                className={cat === active ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((img) => (
              <figure className="gallery-item" key={img.src}>
                <img src={asset(img.src)} alt={img.label} loading="lazy" />
                <figcaption>{img.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
