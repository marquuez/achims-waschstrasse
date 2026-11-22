import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Bubbles from '../components/Bubbles'
import CarIcon from '../components/CarIcon'
import ConveyorGuide from '../components/ConveyorGuide'
import VehicleDiagram from '../components/VehicleDiagram'
import WashCardGraphic from '../components/WashCardGraphic'
import { publicUrl } from '../lib/publicUrl.js'
import {
  CARE_PROGRAM,
  CONTACT,
  OPENING_HOURS,
  OPENING_SUMMARY,
  PAYMENT_METHODS,
  PRICING,
  VEHICLE_LIMITS,
  WASHCARD,
} from '../data/site'

export default function Home() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.mapsQuery)}`
  const lowestPrice = PRICING.map((plan) => plan.price).sort(
    (a, b) => parseFloat(a.replace(',', '.')) - parseFloat(b.replace(',', '.')),
  )[0]

  useEffect(() => {
    document.title = "Achim's Waschstraße – Bünde"
  }, [])

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
              <Link className="btn btn--light" to={{ pathname: '/', hash: '#preise' }}>
                Preise ansehen
              </Link>
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

      <section id="anlage" className="section">
        <div className="container">
          <header className="section__header">
            <h2>Unsere Anlage</h2>
          </header>

          <div className="feature">
            <div className="feature__text">
              <p className="feature__eyebrow">Ihre Waschstraße in Bünde</p>
              <h3>Einfach reinfahren – sauber rausfahren.</h3>
              <p>
                Unsere Waschstraße an der {CONTACT.address} ist leicht zu finden: Der grüne
                Schriftzug und unser Waschbär Achim zeigen Ihnen den Weg zur Einfahrt.
              </p>
              <ul className="check-list feature__list">
                <li>
                  {OPENING_SUMMARY.note}: {OPENING_SUMMARY.hours}
                </li>
                <li>Waschprogramme ab {lowestPrice}</li>
                <li>Bezahlung bar, mit Karte, Tankkarte oder Waschkarte</li>
              </ul>
            </div>
            <figure className="feature__media">
              <img
                src={publicUrl('photos/aussenansicht.webp')}
                alt="Außenansicht von Achim's Waschstraße mit grünem Schriftzug und Einfahrt"
                width="1280"
                height="960"
                loading="lazy"
              />
            </figure>
          </div>

          <div className="feature feature--reverse">
            <div className="feature__text">
              <p className="feature__badge">Neu eingebaut</p>
              <h3>Moderne WashTec-Waschanlage</h3>
              <p>
                Wir haben in eine brandneue Waschstraße von WashTec investiert – einem der
                führenden Hersteller von Fahrzeugwaschanlagen. Modernste Technik sorgt für ein
                gründliches, schonendes und schnelles Waschergebnis.
              </p>
              <ul className="check-list feature__list">
                <li>Neueste WashTec-Waschtechnik</li>
                <li>Schonende Reinigung für Lack und Felgen</li>
                <li>Bequem per Förderband durch die Anlage</li>
              </ul>
            </div>
            <figure className="feature__media feature__media--washtec">
              <img
                src={publicUrl('photos/washtec-anlage.webp')}
                alt="Neu eingebaute WashTec-Waschstraße mit grünem Portal und Förderband"
                width="1040"
                height="1004"
                loading="lazy"
              />
              <figcaption className="feature__caption">
                <span>Neu</span> Modernste WashTec-Technik
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="preise" className="section section--alt">
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
                    <p className="pricing-row__gift">inkl. 1× Saugen</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="waschkarte" className="washcard">
        <Bubbles className="bubbles--hero" />
        <div className="container washcard__inner">
          <header className="washcard__header">
            <p className="washcard__badge">Neu</p>
            <h2>{WASHCARD.title}</h2>
            <p className="washcard__claim">{WASHCARD.claim}</p>
          </header>

          <div className="washcard__tiers">
            {WASHCARD.tiers.map((tier) => (
              <article key={tier.charge} className="washcard-tier">
                <p className="washcard-tier__charge">
                  {tier.charge}
                  <span>aufladen</span>
                </p>
                <span className="washcard-tier__arrow" aria-hidden="true">
                  →
                </span>
                <p className="washcard-tier__credit">
                  {tier.credit}
                  <span>Guthaben</span>
                </p>
                <p className="washcard-tier__bonus">
                  {tier.bonus}
                  <span>Bonus</span>
                </p>
              </article>
            ))}
          </div>

          <div className="washcard__info">
            <WashCardGraphic className="washcard__card" />
            <div className="washcard__text">
              <h3>{WASHCARD.highlight}</h3>
              <ul className="washcard__benefits">
                {WASHCARD.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
              <p className="washcard__note">{WASHCARD.note}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="fahrzeuge" className="section">
        <div className="container">
          <header className="section__header">
            <h2>Fahrzeug-Hinweise</h2>
          </header>
          <div className="vehicle-grid">
            <article className="card vehicle-card">
              <h3>Bitte beachten: maximale Fahrzeugmaße</h3>
              <VehicleDiagram
                height={VEHICLE_LIMITS.maxHeight}
                width={VEHICLE_LIMITS.maxWidth}
                clearance={VEHICLE_LIMITS.groundClearance}
                tireWidth={VEHICLE_LIMITS.maxTireWidth}
              />
              <ul className="dimension-list">
                <li>
                  <span>Höhe</span> max. {VEHICLE_LIMITS.maxHeight}
                </li>
                <li>
                  <span>Breite</span> max. {VEHICLE_LIMITS.maxWidth}
                </li>
                <li>
                  <span>Bodenfreiheit</span> min. {VEHICLE_LIMITS.groundClearance}
                </li>
                <li>
                  <span>Reifenbreite</span> max. {VEHICLE_LIMITS.maxTireWidth}
                </li>
              </ul>
              <p className="vehicle-card__note">{VEHICLE_LIMITS.note}</p>
            </article>
            <div className="vehicle-aside">
              <article className="card card--warn">
                <h3>Verbotene Fahrzeuge</h3>
                <ul className="warn-list">
                  {VEHICLE_LIMITS.forbidden.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="card help-card">
                <img src={publicUrl('mascot.png')} alt="" className="help-card__mascot" />
                <div>
                  <h3>Unsicher?</h3>
                  <p>
                    Unser Personal hilft Ihnen gern vor Ort – oder rufen Sie uns an:{' '}
                    <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                  </p>
                </div>
              </article>
            </div>
          </div>
          <ConveyorGuide />
        </div>
      </section>

      <section id="bezahlung" className="section section--alt">
        <div className="container">
          <header className="section__header">
            <h2>Zahlungsmöglichkeiten</h2>
            <p>Bezahlen Sie bequem bar, mit Karte, mit Tankkarte oder mit Achim&apos;s Waschkarte.</p>
          </header>
          <ul className="payment-list">
            {PAYMENT_METHODS.map((method) => (
              <li key={method.name} className="payment-tile">
                <img src={publicUrl(method.logo)} alt="" className="payment-tile__logo" />
                <span>{method.name}</span>
              </li>
            ))}
            <li className="payment-tile">
              <span className="payment-tile__logo payment-tile__logo--card">
                <WashCardGraphic className="washcard-graphic--mini" />
              </span>
              <span>Achim&apos;s Waschkarte</span>
            </li>
          </ul>
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
