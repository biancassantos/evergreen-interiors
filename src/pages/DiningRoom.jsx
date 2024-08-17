import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroProducts from "../components/HeroProducts";
import ProductsContainer from "../components/ProductsContainer";

const DiningRoom = () => {
  useEffect(() => {
    document.title = "Dining Room | Evergreen Interiors"
  }, []);

  return (
    <>
    <Header />
    <main>
        <HeroProducts title="dining room" imgClass="diningroom"/>
        <ProductsContainer category="diningroom"/>
    </main>
    <Footer />
    </>
  )
}

export default DiningRoom;