/* eslint-disable react/prop-types */

const HeroProducts = ({ title, imgClass }) => {
  return (
    <section className={`product-hero ${imgClass}`}>
        <div className="dark-bg">
            <h1 className="hero-title">{title}</h1>
        </div>
    </section>
  )
}

export default HeroProducts;