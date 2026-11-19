import Bubbles from '../components/Bubbles'
import CarIcon from '../components/CarIcon'
import { publicUrl } from '../lib/publicUrl.js'
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
              Willkommen bei Achim's Waschstraße – moderne Anlage, freundlicher Service und
              gründliche Pflege für Ihr Fahrzeug.
            </p>
            <div className="hero__actions">
              <a className="btn btn--light" href="#preise">
                Preise ansehen
              </a>
              <a className="btn btn--ghost" href={mapsUrl} target="_blank" rel="noopener noreferrer">
                Route planen
              </a>
            </div>
          </div>
          <div className="hero__visual">
            <img
              src={publicUrl('mascot.png')}
              alt="Waschbär-Maskottchen von Achim's Waschstraße"
              className="hero__mascot"
            />
          </div>
        </div>
        <svg className="hero__swoosh" viewBox="0 0 1440 56" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 56 L0 30 Q720 -18 1440 22 L1440 56 Z" />
        </svg>
      </section>

      <section id="programm" className="section section--alt section--bubbles">
        <Bubbles className="bubbles--soft" />
        <div className="container">
          <header className="section__header">
            <h2>Unser Pflegeprogramm</h2>
          </header>
          <div className="cards cards--5">
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
            <h2>Unsere Waschprogramme</h2>
          </header>
          <div className="pricing-list">
            {PRICING.map((plan, index) => (
              <article key={plan.name} className="pricing-row">
                <div className="pricing-row__brand">
                  <CarIcon variant={plan.icon} className="pricing-row__icon" />
                  <div>
                    <span className="pricing-row__number">{index + 1}.</span>
                    <h3 className="pricing-row__name">{plan.name}</h3>
                  </div>
                </div>
                <ul className="pricing-row__features">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="pricing-row__aside">
                  <p className="pricing-row__price">{plan.price}</p>
                  {plan.freeVacuum ? (
                    <p className="pricing-row__gift">+ Gratis staubsaugen</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fahrzeuge" className="section section--alt">
        <div className="container">
          <header className="section__header">
            <h2>Fahrzeug-Hinweise</h2>
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
