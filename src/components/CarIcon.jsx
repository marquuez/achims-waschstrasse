// Auto-Icons für die Waschprogramme (Frontansicht, angelehnt an die Preistafel).
// Auto in Dunkelgrau, Deko (Schaum, Blasen, Glitzer) im Markengrün.

function Sparkle({ x, y, r }) {
  return (
    <path
      className="car-icon__accent-fill"
      d={`M${x} ${y - r} Q${x} ${y} ${x + r} ${y} Q${x} ${y} ${x} ${y + r} Q${x} ${y} ${x - r} ${y} Q${x} ${y} ${x} ${y - r}Z`}
    />
  )
}

function Bubble({ x, y, r }) {
  return <circle className="car-icon__accent-stroke" cx={x} cy={y} r={r} />
}

function Foam() {
  return (
    <path
      className="car-icon__accent-stroke"
      d="M17 19.5a4.2 4.2 0 0 1 4.6-5.6a5.6 5.6 0 0 1 10.4-2.4a5.4 5.4 0 0 1 9.6 1.8a4.4 4.4 0 0 1 5.4 6.2"
    />
  )
}

function Car({ open = false }) {
  return (
    <g className="car-icon__car">
      {/* Spiegel */}
      <rect x="7" y="27.5" width="6" height="3.6" rx="1.8" />
      <rect x="51" y="27.5" width="6" height="3.6" rx="1.8" />
      {/* Räder */}
      <rect x="12" y="44" width="9" height="8" rx="2.5" />
      <rect x="43" y="44" width="9" height="8" rx="2.5" />
      {open ? (
        <>
          {/* Cabrio: Rahmen der Frontscheibe + Sitze */}
          <path d="M14.5 31 L19.5 22.5 L44.5 22.5 L49.5 31 Z" className="car-icon__frame" />
          <rect x="22" y="24.5" width="7.5" height="6" rx="2.4" />
          <rect x="34.5" y="24.5" width="7.5" height="6" rx="2.4" />
          <path d="M11 33 Q11 30 15 30 L49 30 Q53 30 53 33 L54.5 44 Q54.5 46.5 52 46.5 L12 46.5 Q9.5 46.5 9.5 44 Z" />
        </>
      ) : (
        <path d="M14.5 30.5 L19.3 19 Q20.6 16 24 16 L40 16 Q43.4 16 44.7 19 L49.5 30.5 Q54.5 31.5 54.5 36.5 L54.5 44 Q54.5 46.5 52 46.5 L12 46.5 Q9.5 46.5 9.5 44 L9.5 36.5 Q9.5 31.5 14.5 30.5 Z" />
      )}
      {/* Frontscheibe */}
      {!open && (
        <path className="car-icon__glass" d="M18.6 29.5 L22.4 20.6 Q23 19.2 24.6 19.2 L39.4 19.2 Q41 19.2 41.6 20.6 L45.4 29.5 Z" />
      )}
      {/* Scheinwerfer */}
      <path className="car-icon__light" d="M12.6 35.4 Q12.6 34 14 34 L19.6 35 Q21 35.3 21 36.6 L21 37.4 Q21 38.6 19.8 38.6 L14 38.6 Q12.6 38.6 12.6 37.2 Z" />
      <path className="car-icon__light" d="M51.4 35.4 Q51.4 34 50 34 L44.4 35 Q43 35.3 43 36.6 L43 37.4 Q43 38.6 44.2 38.6 L50 38.6 Q51.4 38.6 51.4 37.2 Z" />
      {/* Kühlergrill */}
      <rect className="car-icon__light" x="25" y="38.5" width="14" height="3.4" rx="1.7" />
    </g>
  )
}

const VARIANTS = {
  'foam-sparkle': (
    <>
      <Foam />
      <Sparkle x={53} y={8} r={4.5} />
      <Bubble x={11} y={14} r={2.2} />
    </>
  ),
  sparkle: (
    <>
      <Sparkle x={45} y={7.5} r={4.5} />
      <Sparkle x={54} y={15} r={3.2} />
      <Sparkle x={36} y={6} r={2.4} />
    </>
  ),
  bubbles: (
    <>
      <Bubble x={27} y={10} r={3.2} />
      <Bubble x={36} y={5.5} r={3.6} />
      <Bubble x={44} y={11} r={2.4} />
    </>
  ),
  foam: <Foam />,
  cabrio: (
    <>
      <Sparkle x={20} y={10} r={4} />
      <Sparkle x={47} y={8} r={4.5} />
    </>
  ),
}

export default function CarIcon({ variant = 'sparkle', className = '' }) {
  return (
    <svg
      className={`car-icon ${className}`.trim()}
      viewBox="0 0 64 56"
      aria-hidden="true"
      focusable="false"
    >
      {VARIANTS[variant]}
      <Car open={variant === 'cabrio'} />
    </svg>
  )
}
