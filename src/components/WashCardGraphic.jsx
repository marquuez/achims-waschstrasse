import { publicUrl } from '../lib/publicUrl.js'

// Kartensymbol "Achim's Waschkarte" – skaliert über die Schriftgröße (font-size)
export default function WashCardGraphic({ className = '' }) {
  return (
    <div className={`washcard-graphic ${className}`.trim()} aria-hidden="true">
      <img src={publicUrl('mascot.png')} alt="" className="washcard-graphic__mascot" />
      <p className="washcard-graphic__title">
        Achim&apos;s
        <br />
        Waschkarte
      </p>
    </div>
  )
}
