import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { ResourceCategory } from '../data/company'
import './Accordion.css'

function Accordion({ items }: { items: ResourceCategory[] }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = index === openIndex
        return (
          <div className={isOpen ? 'accordion-item open' : 'accordion-item'} key={item.title}>
            <button
              type="button"
              className="accordion-trigger"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span className="accordion-icon">{isOpen ? '▲' : '▼'}</span>
            </button>
            <div className="accordion-panel" style={{ maxHeight: isOpen ? `${item.links.length * 34 + 16}px` : '0px' }}>
              <ul>
                {item.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
