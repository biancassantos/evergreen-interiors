import { useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutCart from "../components/ui/CheckoutCart";
import CheckoutTotal from "../components/ui/CheckoutTotal";
import Message from "../components/ui/Message";

const Checkout = () => {
  const {cartQuantity} = useContext(CartContext);

  useEffect(() => {
    document.title = "Checkout"
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="checkout-body">
          {cartQuantity > 0 ? 
          (<>
            <CheckoutCart />
            <CheckoutTotal />
          </>) : 
          (<Message msg="Your cart is empty." />)}
          
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Checkout;