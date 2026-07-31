import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { company } from '../data/company'
import { asset } from '../lib/asset'
import { getLenis } from '../lib/lenis'
import SiteEffects from './SiteEffects'
import CustomCursor from './CustomCursor'
import './Layout.css'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    const lenis = getLenis()
    if (!lenis) return
    if (menuOpen) {
      lenis.stop()
    } else {
      lenis.start()
    }
  }, [menuOpen])

  return (
    <div className="site">
      <SiteEffects />
      <CustomCursor />
      <div className="grain-overlay" aria-hidden="true" />
      <div className="site-topbar">
        <div className="site-topbar-inner">
          <span>Servicing {company.area}</span>
          <div className="site-topbar-links">
            <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <NavLink to="/" className="brand" end>
          <img src={asset('/images/brand/kb-logo.png')} alt={company.name} className="brand-logo" />
        </NavLink>
        <nav className="site-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <a className="nav-cta" href={`tel:${company.phoneHref}`}>
          {company.phone}
        </a>
        <button
          type="button"
          className={menuOpen ? 'menu-toggle open' : 'menu-toggle'}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={menuOpen ? 'mobile-nav open' : 'mobile-nav'}>
        <nav>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? 'mobile-nav-link active' : 'mobile-nav-link')}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <a className="btn btn-primary mobile-nav-cta" href={`tel:${company.phoneHref}`}>
          Call {company.phone}
        </a>
      </div>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src={asset('/images/brand/kb-logo.png')} alt={company.name} className="footer-logo" />
        </div>
        <p>{company.subTagline}</p>
        <div className="footer-contact">
          <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <span>Servicing {company.area}</span>
        </div>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Layout
