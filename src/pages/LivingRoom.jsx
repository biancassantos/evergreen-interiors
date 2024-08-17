import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroProducts from "../components/HeroProducts";
import ProductsContainer from "../components/ProductsContainer";

const LivingRoom = () => {
  useEffect(() => {
    document.title = "Living Room / Office | Evergreen Interiors"
  }, []);

  return (
    <>
    <Header />
    <main>
        <HeroProducts title="living room / office" imgClass="livingroom"/>
        <ProductsContainer category="livingroom" />
    </main>
    <Footer />
    </>
  )
}

export default LivingRoom;