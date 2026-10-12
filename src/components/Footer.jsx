import { Link } from 'react-router-dom'
import { CONTACT, TAX_INFO } from '../data/site'

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
        <div className="footer__legal">
          <p>{TAX_INFO.office}</p>
          <p>St.-Nr.: {TAX_INFO.taxNumber}</p>
          <p>USt.-IdNr.: {TAX_INFO.vatId}</p>
        </div>
        <p className="footer__copy">© {year} Achims Waschstrasse</p>
      </div>
    </footer>
  )
}
