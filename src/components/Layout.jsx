import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import InstagramFab from './InstagramFab'

export default function Layout() {
  return (
    <div className="site">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <InstagramFab />
    </div>
  )
}
