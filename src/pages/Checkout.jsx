import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CheckoutCart from "../components/ui/CheckoutCart";
import CheckoutTotal from "../components/ui/CheckoutTotal";

const Checkout = () => {
  useEffect(() => {
    document.title = "Checkout"
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="checkout-body">
          <CheckoutCart />
          <CheckoutTotal />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Checkout;