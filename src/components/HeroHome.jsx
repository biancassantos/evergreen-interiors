import { Link } from "react-router-dom";

const HeroHome = () => {
  return (
    <section className="hero">
        <div className="dark-bg">
            <article className="hero-content">
                <h1>Comfort Living</h1>
                <p>Find the perfect furniture for your home, combining equal amounts of comfort and style.</p>
                <button className="hero-btn"><Link to="all">see all products</Link></button>
            </article>
        </div>
    </section>
  )
}

export default HeroHome;