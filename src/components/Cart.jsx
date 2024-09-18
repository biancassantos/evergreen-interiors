/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import DisplayCartProducts from "./ui/DisplayCartProducts";

const Cart = ({showCart, closeCart}) => {
  const {cartQuantity, subtotal} = useContext(CartContext);

  return (
    <article className={`cart ${showCart ? 'showCart' : ''}`}>
      <section className="cart-header">
        <h1>Cart</h1>
        <span>&#40;{cartQuantity} itens&#41;</span>
      </section>
      <section className="display-cart-products">
        <DisplayCartProducts />
      </section>
      <section className="cart-footer">
        <p><strong>Subtotal:</strong> $ {subtotal}</p>
        <div className="cart-footer-btns">
          <button className="close-cart-btn" onClick={closeCart}>close</button>
          <button className="checkout-btn"><Link to="/evergreen-interiors/checkout">checkout</Link></button>
        </div>
      </section>
    </article>
  )
}

export default Cart;