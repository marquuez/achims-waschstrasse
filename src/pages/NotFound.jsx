import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { publicUrl } from '../lib/publicUrl.js'

export default function NotFound() {
  useEffect(() => {
    document.title = "Seite nicht gefunden – Achims Waschstraße"
  }, [])

  return (
    <article className="legal container not-found">
      <img src={publicUrl('mascot.png')} alt="" className="not-found__mascot" />
      <h1>Seite nicht gefunden</h1>
      <p>Diese Seite gibt es leider nicht – vielleicht wurde sie verschoben oder der Link ist falsch.</p>
      <Link to="/" className="btn btn--primary">
        Zur Startseite
      </Link>
    </article>
  )
}
