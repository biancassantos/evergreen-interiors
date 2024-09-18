import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CheckoutTotal = () => {
  const {cartQuantity, subtotal} = useContext(CartContext);

  return (
    <section className="total-display">
      <h2>Total</h2>
      <div className="total-summary">
        <p>Subtotal &#40;{cartQuantity} itens&#41;: ${subtotal}</p>
        <p>Discounts: - $0</p>
        <p>Shipping: $ 9.99</p>
      </div>
      <p id="total-price"><strong>Total: $ {subtotal + 9.99}</strong></p>
      <button>Go to payment</button>
    </section>
  )
}

export default CheckoutTotal;