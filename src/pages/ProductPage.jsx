import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductInfo from "../components/ProductInfo";
import products from '../products';

const ProductPage = () => {
  const { id } = useParams();
  let showProduct = products.filter(product => product.id == id);

  useEffect(() => {
    document.title = `${showProduct[0].productName} | Evergreen Interiors`
  }, [showProduct]);

return (
  <>
    <Header />
    <main>
      <ProductInfo showProduct={showProduct}/>
    </main>
    <Footer />
  </>
  )
}

export default ProductPage;