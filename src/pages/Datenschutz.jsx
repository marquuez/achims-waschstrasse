import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CONTACT, IMPRINT } from '../data/site'

export default function Datenschutz() {
  useEffect(() => {
    document.title = "Datenschutz – Achims Waschstraße"
  }, [])

  return (
    <article className="legal container">
      <Link to="/" className="legal__back">
        ← Zur Startseite
      </Link>
      <h1>Datenschutzerklärung</h1>
      <p className="legal__updated">Stand: November 2026</p>

      <section>
        <h2>1. Verantwortlicher</h2>
        <p>
          {IMPRINT.company}
          <br />
          {CONTACT.address}
          <br />
          {CONTACT.city}
          <br />
          Telefon: <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          <br />
          E-Mail: <a href={CONTACT.emailHref}>{CONTACT.email}</a>
        </p>
      </section>

      <section>
        <h2>2. Allgemeine Hinweise</h2>
        <p>
          Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Personenbezogene Daten
          werden auf dieser Website nur im technisch notwendigen Umfang verarbeitet. Eine
          Weitergabe an Dritte erfolgt nicht, sofern gesetzlich nicht erforderlich.
        </p>
      </section>

      <section>
        <h2>3. Hosting und Server-Logfiles</h2>
        <p>
          Diese Website wird über GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San
          Francisco, CA 94107, USA) bereitgestellt. Beim Aufruf der Website werden automatisch
          Informationen durch Ihren Browser an den Server übermittelt (z. B. IP-Adresse, Datum
          und Uhrzeit, aufgerufene Seite, Browsertyp). Diese Daten dienen der technischen
          Bereitstellung und Sicherheit der Website und werden nicht mit anderen Datenquellen
          zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
          Interesse an einer sicheren und stabilen Website). Eine Übermittlung in die USA ist
          möglich; GitHub ist unter dem EU-US Data Privacy Framework zertifiziert.
        </p>
      </section>

      <section>
        <h2>4. Cookies</h2>
        <p>
          Diese Website setzt keine Cookies und verwendet keine Analyse- oder Tracking-Dienste.
        </p>
      </section>

      <section>
        <h2>5. Schriftarten</h2>
        <p>
          Die auf dieser Website verwendeten Schriftarten werden lokal von unserem eigenen
          Webspace geladen. Es findet keine Verbindung zu Servern von Google oder anderen
          Schriftanbietern statt.
        </p>
      </section>

      <section>
        <h2>6. Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns per Telefon oder E-Mail kontaktieren, verarbeiten wir die von Ihnen
          mitgeteilten Daten zur Bearbeitung Ihrer Anfrage. Die Verarbeitung erfolgt auf
          Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit.
          f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
        </p>
      </section>

      <section>
        <h2>7. Externe Links</h2>
        <p>
          Diese Website enthält Links zu externen Diensten (z. B. Google Maps). Für
          die Datenverarbeitung auf diesen Seiten sind die jeweiligen Anbieter verantwortlich.
          Bitte beachten Sie deren Datenschutzhinweise.
        </p>
      </section>

      <section>
        <h2>8. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
          Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung
          personenbezogener Daten. Zudem steht Ihnen ein Beschwerderecht bei einer
          Aufsichtsbehörde zu.
        </p>
      </section>
    </article>
  )
}
