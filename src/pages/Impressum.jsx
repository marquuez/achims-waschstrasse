import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CONTACT, IMPRINT, TAX_INFO } from '../data/site'

export default function Impressum() {
  useEffect(() => {
    document.title = "Impressum – Achim's Waschstraße"
  }, [])

  return (
    <article className="legal container">
      <Link to="/" className="legal__back">
        ← Zur Startseite
      </Link>
      <h1>Impressum</h1>

      <section>
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          {IMPRINT.company}
          <br />
          {IMPRINT.owner ? (
            <>
              {IMPRINT.owner}
              <br />
            </>
          ) : null}
          {CONTACT.address}
          <br />
          {CONTACT.city}
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon: <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          <br />
          E-Mail: <a href={CONTACT.emailHref}>{CONTACT.email}</a>
        </p>
      </section>

      <section>
        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          <br />
          {TAX_INFO.vatId}
        </p>
      </section>

      <section>
        <h2>Verbraucherstreitbeilegung</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section>
        <h2>Haftung für Inhalte</h2>
        <p>
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte – insbesondere der Preise und Programme –
          können wir jedoch keine Gewähr übernehmen. Verbindlich sind die vor Ort ausgehängten
          Angaben.
        </p>
      </section>

      <section>
        <h2>Haftung für Links</h2>
        <p>
          Unsere Website enthält Links zu externen Websites Dritter (z. B. Google Maps),
          auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
        </p>
      </section>
    </article>
  )
}
