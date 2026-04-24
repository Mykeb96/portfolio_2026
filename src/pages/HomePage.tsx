import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <div className="home">
      <section className="hero" aria-labelledby="hero-heading">
        <p className="eyebrow">Portfolio · 2026</p>
        <h1 id="hero-heading" className="hero__title">
          Calm interfaces,
          <span className="hero__title-line"> considered engineering.</span>
        </h1>
        <p className="hero__lede">
          A minimal home for selected work and writing. Inner pages will fill in
          as the site grows.
        </p>
        <div className="hero__actions">
          <Link className="btn btn--primary" to="/work">
            View work
          </Link>
          <Link className="btn btn--ghost" to="/about">
            Say hello
          </Link>
        </div>
      </section>
    </div>
  )
}
