import { Link } from 'react-router-dom'
import { faqs } from '../data/company'
import Faq from '../components/Faq'
import './FaqPage.css'

function FaqPage() {
  return (
    <div className="page-faq">
      <section className="faq-hero section-dark">
        <div className="container">
          <p className="eyebrow">FAQ</p>
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know before starting your project with KB Projects.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <Faq items={faqs} />
        </div>
      </section>

      <section className="section-dark faq-cta">
        <div className="container">
          <h2>Still have a question?</h2>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </div>
  )
}

export default FaqPage
