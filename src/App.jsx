import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Datenschutz from './pages/Datenschutz'
import AGB from './pages/AGB'
import Impressum from './pages/Impressum'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="datenschutz" element={<Datenschutz />} />
        <Route path="agb" element={<AGB />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
