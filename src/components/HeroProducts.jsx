/* eslint-disable react/prop-types */

const HeroProducts = ({ title }) => {
  return (
    <section className="product-hero bedroom">
        <div className="dark-bg">
            <h1 className="hero-title">{title}</h1>
        </div>
    </section>
  )
}

export default HeroProducts;