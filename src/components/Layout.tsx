import { NavLink, Outlet } from 'react-router-dom'
import { company } from '../data/company'
import './Layout.css'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

function Layout() {
  return (
    <div className="site">
      <header className="site-header">
        <NavLink to="/" className="brand" end>
          <span className="brand-kb">KB</span>
          <span className="brand-projects">PROJECTS</span>
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
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-kb">KB</span>
          <span className="brand-projects">PROJECTS</span>
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
