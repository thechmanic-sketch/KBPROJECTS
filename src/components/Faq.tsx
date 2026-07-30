import { useState } from 'react'
import type { Faq as FaqType } from '../data/company'
import './Faq.css'

function Faq({ items }: { items: FaqType[] }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = index === openIndex
        return (
          <div className={isOpen ? 'faq-item open' : 'faq-item'} key={item.question}>
            <button
              type="button"
              className="faq-trigger"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span className="faq-icon">{isOpen ? '▲' : '▼'}</span>
            </button>
            <div className="faq-panel" style={{ maxHeight: isOpen ? '220px' : '0px' }}>
              <p>{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Faq
