import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroProducts from "../components/HeroProducts";
import ProductsContainer from "../components/ProductsContainer";

const AllProducts = () => {
  useEffect(() => {
    document.title = "All | Evergreen Interiors"
  }, []);

  return (
    <>
    <Header />
    <main>
        <HeroProducts title="all" imgClass="all"/>
        <ProductsContainer category="all" />
    </main>
    <Footer />
    </>
  )
}

export default AllProducts;