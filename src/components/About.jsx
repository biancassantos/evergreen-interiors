import { FaRecycle, FaSeedling } from "react-icons/fa";

const About = () => {
  return (
    <section className="about">
        <h2>Beauty. Quality. Sustainability.</h2>
        <div className="about-icons">
            <FaRecycle />
            <FaSeedling />
        </div>
        <p>Based on these three pilars, we bring to you designs that not only provide comfort, but meets different tastes and needs. It is our mission that each piece is carefully designed to combine functionality, aesthetics and sustainability.</p>
    </section>
  )
}

export default About;