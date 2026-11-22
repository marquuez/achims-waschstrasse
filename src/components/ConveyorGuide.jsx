import { CONVEYOR_GUIDE } from '../data/site'

function ManualIcon() {
  // Schaltschema (H-Muster) mit Knauf
  return (
    <svg viewBox="0 0 48 48" className="guide-card__icon" aria-hidden="true">
      <g className="guide-card__icon-line">
        <path d="M12 12 V36 M24 12 V36 M36 12 V36 M12 24 H36" />
      </g>
      <g className="guide-card__icon-dots">
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="24" cy="12" r="3.2" />
        <circle cx="36" cy="12" r="3.2" />
        <circle cx="12" cy="36" r="3.2" />
        <circle cx="24" cy="36" r="3.2" />
        <circle cx="36" cy="36" r="3.2" />
      </g>
      <circle className="guide-card__icon-knob" cx="24" cy="24" r="6" />
    </svg>
  )
}

function AutomaticIcon() {
  // Wählhebel-Anzeige P R N D, "N" hervorgehoben
  return (
    <svg viewBox="0 0 48 48" className="guide-card__icon" aria-hidden="true">
      <rect className="guide-card__icon-frame" x="2" y="11" width="44" height="26" rx="9" />
      <g className="guide-card__icon-letters">
        <text x="9.5" y="29">P</text>
        <text x="18.5" y="29">R</text>
        <text x="39" y="29">D</text>
      </g>
      <rect className="guide-card__icon-active" x="23" y="14.5" width="11" height="19" rx="5.5" />
      <text className="guide-card__icon-n" x="28.5" y="29">
        N
      </text>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 48 48" className="guide-card__icon" aria-hidden="true">
      <rect className="guide-card__icon-frame" x="8" y="6" width="32" height="38" rx="6" />
      <path className="guide-card__icon-check" d="M15 18 l3.5 3.5 L25 15 M15 30 l3.5 3.5 L25 27" />
      <path className="guide-card__icon-line" d="M29 18.5 H34 M29 30.5 H34" />
    </svg>
  )
}

export default function ConveyorGuide() {
  const { rules, before, manual, automatic, automaticNote } = CONVEYOR_GUIDE
  return (
    <div className="guide">
      <div className="guide__intro">
        <h3>So fahren Sie aufs Förderband</h3>
        <p>Damit Ihr Fahrzeug sicher und sauber durch die Anlage läuft – bitte vor der Einfahrt lesen.</p>
      </div>

      <ul className="guide__rules" aria-label="Die wichtigsten Regeln am Förderband">
        {rules.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>

      <div className="guide__cards">
        <article className="guide-card guide-card--prep">
          <header className="guide-card__head">
            <CheckIcon />
            <h4>Vor der Einfahrt</h4>
          </header>
          <ul className="guide-card__checks">
            {before.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="guide-card">
          <header className="guide-card__head">
            <ManualIcon />
            <h4>
              Schaltwagen
              <span>manuelles Getriebe</span>
            </h4>
          </header>
          <ol className="guide-card__steps">
            {manual.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>

        <article className="guide-card">
          <header className="guide-card__head">
            <AutomaticIcon />
            <h4>
              Automatik
              <span>Automatikgetriebe, Elektro &amp; Hybrid</span>
            </h4>
          </header>
          <ol className="guide-card__steps">
            {automatic.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="guide-card__note">{automaticNote}</p>
        </article>
      </div>
    </div>
  )
}
