/* eslint-disable react/prop-types */
import { createContext, useState} from "react";
import products from "../products";

export const CartContext = createContext({});

export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([])
  const [cartQuantity, setCartQuantity] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  function addToCart(id) {
    if (cart.some((item) => item.id === id)) { // if item is in cart
      cart.map((item) => {
        if (item.id === id) {
          item.quantity++;
          setCart([...cart]);
          setCartQuantity(cartQuantity + 1);
          setSubtotal(subtotal + item.productPrice);
          return
        }
      });

    } else { // if it's not
      products.map((product) => {
        if (product.id === id) {
          setCart([...cart, {...product, quantity: 1}]);
          setCartQuantity(cartQuantity + 1);
          setSubtotal(subtotal + product.productPrice);
        }
      });
  }
}

function changeQuantity(action, id) {
  cart.map((item) => {
    if (item.id === id) {
      if (action === 'decrement') {
        if (item.quantity > 1) {
          item.quantity--
          setCart([...cart]);
        } else {
          removeFromCart(item.id);
        }
        setCartQuantity(cartQuantity - 1);
        setSubtotal(subtotal - item.productPrice);

      } else if (action === 'increment') {
        item.quantity++
        setCart([...cart])
        setCartQuantity(cartQuantity + 1);
        setSubtotal(subtotal + item.productPrice);
      }
    }
  })
}

function removeFromCart(id) {
  const newCart = cart.filter((item) => item.id !== id);
  setCart([...newCart]);
}


  return (
  <CartContext.Provider 
  value={{cart, addToCart, changeQuantity, cartQuantity, subtotal}} >
    {children}
  </CartContext.Provider>
  )
}
