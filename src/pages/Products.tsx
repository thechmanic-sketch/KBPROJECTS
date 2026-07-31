import { Link } from 'react-router-dom'
import { company, products } from '../data/company'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import { asset } from '../lib/asset'
import './Products.css'

function Products() {
  return (
    <div className="page-products">
      <PageHero
        eyebrow="Our Products"
        title="Quality Aluminium & Glass Products, Built to Last"
        description={`Manufactured proudly in South Africa, our aluminium and glass products are custom-built for homes and businesses across ${company.area}.`}
        photo="/images/glass-aluminium/windows/apartment-windows-2.jpg"
        photoAlt="KB Projects aluminium windows"
        primaryCta={{ label: 'Get a Free Quote', to: '/contact' }}
      />

      <section>
        <div className="container">
          <Reveal as="div" className="products-grid" stagger>
            {products.map((product) => (
              <div className="product-card" key={product.slug}>
                <img src={asset(product.image)} alt={product.name} />
                <div className="product-card-body">
                  <p className="product-category">{product.category}</p>
                  <h2>{product.name}</h2>
                  <p className="product-desc">{product.description}</p>
                  <ul>
                    {product.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-outline btn-sm">Request a Quote</Link>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-dark products-cta">
        <div className="container">
          <h2>Looking for something custom?</h2>
          <p>We manufacture and install to your exact specifications.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
        </div>
      </section>
    </div>
  )
}

export default Products
