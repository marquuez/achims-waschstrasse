import { Link, NavLink } from 'react-router-dom'
import { homeHash, publicUrl } from '../lib/publicUrl.js'

const navItems = [
  { hash: 'programm', label: 'Pflegeprogramm' },
  { hash: 'preise', label: 'Preise' },
  { hash: 'fahrzeuge', label: 'Fahrzeuge' },
  { hash: 'kontakt', label: 'Kontakt' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__brand">
          <img src={publicUrl('wordmark.png')} alt="Achim's Waschstraße" className="header__logo" />
        </Link>
        <nav className="header__nav" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <a key={item.hash} href={homeHash(item.hash)} className="header__link">
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
