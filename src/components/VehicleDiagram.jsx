// Maßskizze (Frontansicht) – angelehnt an das "Bitte beachten"-Schild an der Anlage.

function Label({ x, y, text, anchor = 'middle' }) {
  const w = text.length * 10.4 + 26
  const left = anchor === 'middle' ? x - w / 2 : anchor === 'end' ? x - w : x
  return (
    <g className="vehicle-diagram__pill">
      <rect x={left} y={y - 16} width={w} height={32} rx={16} />
      <text x={left + w / 2} y={y + 7} textAnchor="middle">
        {text}
      </text>
    </g>
  )
}

export default function VehicleDiagram({ height, width, clearance, tireWidth }) {
  return (
    <svg
      className="vehicle-diagram"
      viewBox="0 0 500 330"
      role="img"
      aria-label={`Maximale Fahrzeugmaße: Breite ${width}, Höhe ${height}, Bodenfreiheit mindestens ${clearance}, Reifenbreite maximal ${tireWidth}`}
    >
      <defs>
        <marker id="vd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" className="vehicle-diagram__arrowhead" />
        </marker>
        <linearGradient id="vd-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a4e4c" />
          <stop offset="1" stopColor="#232524" />
        </linearGradient>
        <linearGradient id="vd-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eef5f7" />
          <stop offset="1" stopColor="#b3c8d0" />
        </linearGradient>
        <radialGradient id="vd-shadow">
          <stop offset="0" stopColor="#000" stopOpacity="0.28" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="vd-floor-fade" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#dff0dc" />
          <stop offset="1" stopColor="#dff0dc" stopOpacity="0" />
        </radialGradient>
        <clipPath id="vd-below-ground">
          <rect x="0" y="262" width="500" height="68" />
        </clipPath>
      </defs>

      {/* Boden */}
      <ellipse cx="250" cy="262" rx="240" ry="60" fill="url(#vd-floor-fade)" clipPath="url(#vd-below-ground)" />
      <ellipse cx="240" cy="263" rx="150" ry="9" fill="url(#vd-shadow)" />
      <line className="vehicle-diagram__ground" x1="30" y1="262" x2="470" y2="262" />

      {/* Hilfslinien */}
      <g className="vehicle-diagram__guide">
        <line x1="106" y1="122" x2="106" y2="20" />
        <line x1="374" y1="122" x2="374" y2="20" />
        <line x1="276" y1="62" x2="442" y2="62" />
        <line x1="128" y1="236" x2="70" y2="236" />
        <line x1="296" y1="264" x2="296" y2="286" />
        <line x1="334" y1="264" x2="334" y2="286" />
      </g>

      {/* Räder */}
      <g className="vehicle-diagram__tire">
        <rect x="146" y="218" width="38" height="44" rx="8" />
        <rect x="296" y="218" width="38" height="44" rx="8" />
      </g>
      <g className="vehicle-diagram__tread">
        <line x1="151" y1="242" x2="179" y2="242" />
        <line x1="151" y1="249" x2="179" y2="249" />
        <line x1="151" y1="256" x2="179" y2="256" />
        <line x1="301" y1="242" x2="329" y2="242" />
        <line x1="301" y1="249" x2="329" y2="249" />
        <line x1="301" y1="256" x2="329" y2="256" />
      </g>

      {/* Karosserie */}
      <path fill="url(#vd-body)" d="M176 120 L194 73 Q198 62 211 62 L269 62 Q282 62 286 73 L304 120 Z" />
      <path fill="url(#vd-body)" d="M131 128 L112 124 Q106 124 106 130 L106 136 Q106 141 112 141 L131 141 Z" />
      <path fill="url(#vd-body)" d="M349 128 L368 124 Q374 124 374 130 L374 136 Q374 141 368 141 L349 141 Z" />
      <path fill="url(#vd-body)" d="M152 118 L328 118 Q346 120 349 140 L352 214 Q352 236 330 236 L150 236 Q128 236 128 214 L131 140 Q134 120 152 118 Z" />
      <path className="vehicle-diagram__crease" d="M146 133 Q240 125 334 133" />

      {/* Frontscheibe */}
      <path fill="url(#vd-glass)" d="M187 114 L202 78 Q205 70 213 70 L267 70 Q275 70 278 78 L293 114 Z" />
      <path className="vehicle-diagram__shine" d="M214 74 L232 74 L214 110 L198 110 Z" />

      {/* Scheinwerfer */}
      <path className="vehicle-diagram__light" d="M141 150 L195 156 Q202 157 202 163 L202 168 Q202 173 196 173 L148 171 Q139 170 139 162 Z" />
      <path className="vehicle-diagram__light" d="M339 150 L285 156 Q278 157 278 163 L278 168 Q278 173 284 173 L332 171 Q341 170 341 162 Z" />
      <path className="vehicle-diagram__led" d="M146 155 L194 160" />
      <path className="vehicle-diagram__led" d="M334 155 L286 160" />

      {/* Kühlergrill */}
      <rect className="vehicle-diagram__grille" x="206" y="151" width="68" height="31" rx="9" />
      <g className="vehicle-diagram__slats">
        <line x1="213" y1="159" x2="267" y2="159" />
        <line x1="213" y1="166.5" x2="267" y2="166.5" />
        <line x1="213" y1="174" x2="267" y2="174" />
      </g>
      <circle className="vehicle-diagram__badge" cx="240" cy="166.5" r="6.5" />

      {/* Kennzeichen + Stoßfänger */}
      <rect className="vehicle-diagram__plate" x="213" y="184" width="54" height="13" rx="2.5" />
      <path className="vehicle-diagram__bumper" d="M137 200 L343 200 L345 214 Q345 227 332 229 L148 229 Q135 227 135 214 Z" />
      <rect className="vehicle-diagram__grille" x="196" y="207" width="88" height="14" rx="7" />
      <circle className="vehicle-diagram__light" cx="157" cy="214" r="5.5" />
      <circle className="vehicle-diagram__light" cx="323" cy="214" r="5.5" />

      {/* Maßpfeile */}
      <g className="vehicle-diagram__dim">
        <line x1="109" y1="34" x2="371" y2="34" markerStart="url(#vd-arrow)" markerEnd="url(#vd-arrow)" />
        <line x1="430" y1="65" x2="430" y2="259" markerStart="url(#vd-arrow)" markerEnd="url(#vd-arrow)" />
        <line x1="82" y1="238.5" x2="82" y2="259.5" markerStart="url(#vd-arrow)" markerEnd="url(#vd-arrow)" />
        <line x1="299" y1="280" x2="331" y2="280" markerStart="url(#vd-arrow)" markerEnd="url(#vd-arrow)" />
      </g>

      <Label x={240} y={34} text={width} />
      <Label x={432} y={162} text={height} />
      <Label x={78} y={300} text={`min. ${clearance}`} />
      <Label x={315} y={306} text={`max. ${tireWidth}`} />
    </svg>
  )
}
