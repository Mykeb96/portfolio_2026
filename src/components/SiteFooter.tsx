export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span className="site-footer__muted">© {new Date().getFullYear()}</span>
      <span className="site-footer__muted">Built with React &amp; Three.js</span>
    </footer>
  )
}
