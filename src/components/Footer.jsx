import { Link } from 'react-router-dom'
import { CONTACT, OPENING_SUMMARY, TAX_INFO } from '../data/site'
import { publicUrl } from '../lib/publicUrl.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <svg className="footer__swoosh" viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 48 L0 26 Q720 -14 1440 18 L1440 48 Z" />
      </svg>
      <div className="footer__main">
        <div className="footer__inner container">
          <div className="footer__brand">
            <Link to="/" aria-label="Zur Startseite">
              <img src={publicUrl('wordmark.png')} alt="Achims Waschstraße" className="footer__logo" />
            </Link>
            <p className="footer__slogan">Sauber ist schöner.</p>
          </div>

          <div className="footer__col">
            <p className="footer__heading">Kontakt</p>
            <address className="footer__text">
              {CONTACT.address}
              <br />
              {CONTACT.city}
              <br />
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              <br />
              <a href={CONTACT.emailHref}>{CONTACT.email}</a>
            </address>
          </div>

          <div className="footer__col">
            <p className="footer__heading">Öffnungszeiten</p>
            <p className="footer__text">
              {OPENING_SUMMARY.label}: {OPENING_SUMMARY.hours}
              <br />
              {OPENING_SUMMARY.note}
            </p>
            <Link className="footer__cta" to={{ pathname: '/', hash: '#preise' }}>
              Zu den Preisen
            </Link>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner container">
          <p className="footer__copy">© {year} Achims Waschstraße</p>
          <p className="footer__legal">
            USt.-IdNr.: {TAX_INFO.vatId}
          </p>
          <nav className="footer__links" aria-label="Rechtliches">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
            <Link to="/agb">AGB</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
