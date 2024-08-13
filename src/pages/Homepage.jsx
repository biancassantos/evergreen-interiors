import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroHome from "../components/HeroHome";
import Categories from "../components/Categories";
import About from "../components/About";
import Newsletter from "../components/Newsletter";

const Homepage = () => {
  useEffect(() => {
    document.title = "Evergreen Interiors"
  }, []);
  
  return (
    <>
      <Header />
      <main>
        <HeroHome />
        <Categories />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

export default Homepage;