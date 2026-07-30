import { useMemo, useState } from 'react'
import { galleryImages } from '../data/company'
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
      <section className="gallery-hero section-dark">
        <div className="container">
          <p className="eyebrow">Our Work</p>
          <h1>Gallery</h1>
          <p>Real before &amp; after projects from around KZN.</p>
        </div>
      </section>

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
