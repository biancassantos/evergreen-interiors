import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartProduct from "./CartProduct";

const DisplayCartProducts = () => {
  const {cart} = useContext(CartContext);

  return (
    <>
      {cart.map((item) => {
        return (
          <CartProduct 
          key={item.id}
          id={item.id}
          img={item.productImg} 
          title={item.productName}
          price={item.productPrice}
          quantity={item.quantity}
          />
        )
      })}
    </> 
  )
}

export default DisplayCartProducts;