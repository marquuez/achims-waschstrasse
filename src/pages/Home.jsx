import Bubbles from '../components/Bubbles'
import {
  CARE_PROGRAM,
  CONTACT,
  OPENING_HOURS,
  PRICING,
  VEHICLE_LIMITS,
} from '../data/site'

export default function Home() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.mapsQuery)}`

  return (
    <>
      <section className="hero">
        <div className="hero__bubbles" aria-hidden="true" />
        <Bubbles className="bubbles--hero" />
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="hero__eyebrow">Waschstraße in Bünde</p>
            <h1>Sauber ist schöner.</h1>
            <p className="hero__lead">
              Willkommen bei Achims Waschstrasse – moderne Anlage, freundlicher Service und
              gründliche Pflege für Ihr Fahrzeug.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#preise">
                Preise ansehen
              </a>
              <a className="btn btn--outline" href={mapsUrl} target="_blank" rel="noopener noreferrer">
                Route planen
              </a>
            </div>
          </div>
          <div className="hero__visual">
            <img src="/logo.png" alt="Maskottchen – Bär wäscht ein Auto" className="hero__logo" />
          </div>
        </div>
      </section>

      <section id="programm" className="section section--alt section--bubbles">
        <Bubbles className="bubbles--soft" />
        <div className="container">
          <header className="section__header">
            <h2>Unser Pflegeprogramm</h2>
            <p>Vier Schritte für ein strahlend sauberes Ergebnis.</p>
          </header>
          <div className="cards cards--4">
            {CARE_PROGRAM.map((step) => (
              <article key={step.title} className="card card--program">
                <span className="card__icon" aria-hidden="true">
                  {step.icon}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="preise" className="section">
        <div className="container">
          <header className="section__header">
            <h2>EASY – Waschprogramme</h2>
            <p>Transparente Preise für jeden Bedarf.</p>
          </header>
          <div className="pricing-list">
            {PRICING.map((plan) => (
              <article key={plan.name} className="pricing-row">
                <div className="pricing-row__brand">
                  <span className="pricing-row__easy">EASY</span>
                  <span className="pricing-row__name">{plan.name}</span>
                </div>
                <ul className="pricing-row__features">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <p className="pricing-row__price">{plan.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fahrzeuge" className="section section--alt">
        <div className="container">
          <header className="section__header">
            <h2>Fahrzeug-Hinweise</h2>
            <p>Bitte beachten Sie folgende Grenzen vor der Einfahrt.</p>
          </header>
          <div className="cards cards--2">
            <article className="card">
              <h3>Maximale Fahrzeugmaße</h3>
              <ul className="check-list">
                <li>Höhe maximal {VEHICLE_LIMITS.maxHeight}</li>
                <li>Breite maximal {VEHICLE_LIMITS.maxWidth}</li>
              </ul>
            </article>
            <article className="card card--warn">
              <h3>Verbotene Fahrzeuge</h3>
              <ul className="warn-list">
                {VEHICLE_LIMITS.forbidden.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="kontakt" className="section">
        <div className="container contact-grid">
          <article className="card">
            <h2>Kontakt & Anfahrt</h2>
            <address className="contact-block">
              <p>
                {CONTACT.address}
                <br />
                {CONTACT.city}
              </p>
              <p>
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </p>
              <p>
                <a href={CONTACT.emailHref}>{CONTACT.email}</a>
              </p>
            </address>
            <a className="btn btn--primary" href={mapsUrl} target="_blank" rel="noopener noreferrer">
              In Google Maps öffnen
            </a>
          </article>
          <article className="card">
            <h2>Öffnungszeiten</h2>
            <table className="hours-table">
              <tbody>
                {OPENING_HOURS.map((row) => (
                  <tr key={row.day} className={row.closed ? 'hours-table__closed' : ''}>
                    <th scope="row">{row.day}</th>
                    <td>{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        </div>
      </section>
    </>
  )
}
