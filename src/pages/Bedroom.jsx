import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroProducts from "../components/HeroProducts";
import ProductsContainer from "../components/ProductsContainer";

const Bedroom = () => {
  useEffect(() => {
    document.title = "Bedroom | Evergreen Interiors"
  }, []);

  return (
    <>
    <Header />
    <main>
        <HeroProducts title="bedroom"/>
        <ProductsContainer />
    </main>
    <Footer />
    </>
  )
}

export default Bedroom;