/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartProduct = ({id, img, title, price, quantity}) => {
  const {changeQuantity} = useContext(CartContext);

  return (
    <section className="cart-product">
      <img src={img} alt="" />
      <p>{title.length > 10 ? `${title.substring(0, 8)}...` : title}</p>
      <span>$ {price * quantity}</span>
      <div className="quantity-btns">
        <button onClick={() => changeQuantity('decrement', id)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => changeQuantity('increment', id)}>+</button>
      </div>
    </section>
  )
}

export default CartProduct