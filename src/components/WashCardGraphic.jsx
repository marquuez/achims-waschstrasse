import { publicUrl } from '../lib/publicUrl.js'

// Kartensymbol "Achims Waschkarte" – skaliert über die Schriftgröße (font-size)
export default function WashCardGraphic({ className = '' }) {
  return (
    <div className={`washcard-graphic ${className}`.trim()} aria-hidden="true">
      <img src={publicUrl('mascot.png')} alt="" className="washcard-graphic__mascot" />
      <p className="washcard-graphic__title">
        Achims
        <br />
        Waschkarte
      </p>
    </div>
  )
}
