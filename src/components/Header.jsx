import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/#programm', label: 'Pflegeprogramm' },
  { to: '/#preise', label: 'Preise' },
  { to: '/#fahrzeuge', label: 'Fahrzeuge' },
  { to: '/#kontakt', label: 'Kontakt' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__brand">
          <img src="/logo.png" alt="Achims Waschstrasse Logo" className="header__logo" />
          <span className="header__name">
            Achims <span>Waschstrasse</span>
          </span>
        </Link>
        <nav className="header__nav" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <a key={item.to} href={item.to} className="header__link">
              {item.label}
            </a>
          ))}
          <NavLink to="/datenschutz" className="header__link header__link--muted">
            Datenschutz
          </NavLink>
          <NavLink to="/agb" className="header__link header__link--muted">
            AGB
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
