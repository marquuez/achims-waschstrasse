import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import InstagramFab from './InstagramFab'
import ScrollManager from './ScrollManager'

export default function Layout() {
  return (
    <div className="site">
      <ScrollManager />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <InstagramFab />
    </div>
  )
}
