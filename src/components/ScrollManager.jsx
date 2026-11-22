import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Beim Seitenwechsel nach oben scrollen; bei "#abschnitt" zum Abschnitt springen.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return undefined
    }
    const id = decodeURIComponent(hash.slice(1))
    let tries = 0
    let timer
    const jump = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ block: 'start' })
        return
      }
      if (tries++ < 20) timer = setTimeout(jump, 50)
    }
    jump()
    return () => clearTimeout(timer)
  }, [pathname, hash, key])

  return null
}
