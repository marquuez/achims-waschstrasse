import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { publicUrl } from '../lib/publicUrl.js'

const navItems = [
  { hash: 'programm', label: 'Pflegeprogramm' },
  { hash: 'anlage', label: 'Anlage' },
  { hash: 'preise', label: 'Preise' },
  { hash: 'waschkarte', label: 'Waschkarte' },
  { hash: 'fahrzeuge', label: 'Fahrzeuge' },
  { hash: 'kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Menü schließen, sobald navigiert wurde
  useEffect(() => {
    setOpen(false)
  }, [location.key])

  // Menü mit Escape schließen
  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`header${open ? ' header--open' : ''}`}>
      <div className="header__inner container">
        <Link to="/" className="header__brand" aria-label="Achims Waschstraße – zur Startseite">
          <img src={publicUrl('wordmark.png')} alt="Achims Waschstraße" className="header__logo" />
        </Link>
        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="hauptnavigation"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="hauptnavigation" className="header__nav" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link key={item.hash} to={{ pathname: '/', hash: `#${item.hash}` }} className="header__link">
              {item.label}
            </Link>
          ))}
          <Link to="/impressum" className="header__link header__link--muted">
            Impressum
          </Link>
        </nav>
      </div>
    </header>
  )
}
