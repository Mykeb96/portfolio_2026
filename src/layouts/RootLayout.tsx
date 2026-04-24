import { Outlet } from 'react-router-dom'
import { HeroScene } from '../components/HeroScene'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

export function RootLayout() {
  return (
    <div className="page">
      <div className="page__bg" />
      <HeroScene />

      <SiteHeader />

      <div className="site-main">
        <Outlet />
      </div>

      <SiteFooter />
    </div>
  )
}
