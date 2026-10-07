import { Link } from 'react-router-dom'
import { CONTACT } from '../data/site'

export default function AGB() {
  return (
    <article className="legal container">
      <Link to="/" className="legal__back">
        ← Zur Startseite
      </Link>
      <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
      <p className="legal__updated">Stand: Oktober 2026</p>

      <section>
        <h2>1. Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der Waschstraße von
          Achims Waschstrasse, {CONTACT.address}, {CONTACT.city}.
        </p>
      </section>

      <section>
        <h2>2. Leistungsbeschreibung</h2>
        <p>
          Die Waschstraße bietet automatisierte Fahrzeugreinigung nach den ausgewählten
          Waschprogrammen. Der Leistungsumfang ergibt sich aus der Beschilderung vor Ort bzw.
          der Programmbeschreibung auf dieser Website.
        </p>
      </section>

      <section>
        <h2>3. Nutzung der Anlage</h2>
        <ul>
          <li>Es gelten die ausgewiesenen maximalen Fahrzeugmaße und Fahrzeugbeschränkungen.</li>
          <li>
            Der Fahrer ist verpflichtet, die Hinweise der Anlage, Beschilderung und Bedienung
            zu befolgen.
          </li>
          <li>
            Bei Nichtbeachtung der Hinweise kann die Nutzung abgelehnt werden; für entstandene
            Schäden haftet der Nutzer im gesetzlichen Rahmen.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Preise und Zahlung</h2>
        <p>
          Es gelten die vor Ort ausgewiesenen Preise. Die auf dieser Website genannten Preise
          sind unverbindliche Orientierungswerte, sofern vor Ort keine abweichende Preisliste
          ausgehängt ist. Die Bezahlung erfolgt an den vor Ort bereitgestellten
          Zahlungsmöglichkeiten.
        </p>
      </section>

      <section>
        <h2>5. Haftung</h2>
        <p>
          Wir haften nach den gesetzlichen Vorschriften für Schäden, die durch vorsätzliches
          oder grob fahrlässiges Verhalten verursacht wurden. Für leichte Fahrlässigkeit haften
          wir nur bei Verletzung wesentlicher Vertragspflichten und beschränkt auf den
          vorhersehbaren, typischen Schaden.
        </p>
      </section>

      <section>
        <h2>6. Schlussbestimmungen</h2>
        <p>
          Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist – soweit zulässig
          – der Sitz des Betreibers. Sollten einzelne Bestimmungen unwirksam sein, bleibt die
          Wirksamkeit der übrigen Regelungen unberührt.
        </p>
        <p>
          Kontakt: <a href={CONTACT.emailHref}>{CONTACT.email}</a>,{' '}
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
        </p>
      </section>
    </article>
  )
}
