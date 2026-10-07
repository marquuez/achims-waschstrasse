import { Link } from 'react-router-dom'
import { CONTACT } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div>
          <p className="footer__title">Achims Waschstrasse</p>
          <p className="footer__text">Sauber ist schöner.</p>
        </div>
        <div className="footer__links">
          <Link to="/datenschutz">Datenschutz</Link>
          <Link to="/agb">AGB</Link>
          <a href={CONTACT.emailHref}>{CONTACT.email}</a>
        </div>
        <p className="footer__copy">© {year} Achims Waschstrasse</p>
      </div>
    </footer>
  )
}
