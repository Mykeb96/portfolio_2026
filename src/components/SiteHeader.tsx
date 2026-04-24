import { NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `site-nav__link${isActive ? ' site-nav__link--active' : ''}`

export function SiteHeader() {
  return (
    <header className="site-header">
      <NavLink
        className={({ isActive }) => `wordmark${isActive ? ' wordmark--active' : ''}`}
        to="/"
        end
      >
        Mykael Barnes
      </NavLink>
      <nav className="site-nav" aria-label="Primary">
        <NavLink className={navLinkClass} to="/work">
          Work
        </NavLink>
        <NavLink className={navLinkClass} to="/about">
          About
        </NavLink>
      </nav>
    </header>
  )
}
