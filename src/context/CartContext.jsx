/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import products from "../products";

export const CartContext = createContext({});

// if the item exists in localstorage, the state receives it
// if not, state gets a initial value
const getCart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
const getCartQuantity = localStorage.getItem("cartQuantity") ? JSON.parse(localStorage.getItem("cartQuantity")) : 0;
const getSubtotal = localStorage.getItem("subtotal") ? JSON.parse(localStorage.getItem("subtotal")) : 0;

export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState(getCart)
  const [cartQuantity, setCartQuantity] = useState(getCartQuantity);
  const [subtotal, setSubtotal] = useState(getSubtotal);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartQuantity", JSON.stringify(cartQuantity));
    localStorage.setItem("subtotal", JSON.stringify(subtotal));
  }, [cart, cartQuantity, subtotal])

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
          updateCartValues('plus', product.productPrice);
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
        updateCartValues('minus', item.productPrice);

      } else if (action === 'increment') {
        item.quantity++
        setCart([...cart])
        updateCartValues('plus', item.productPrice);
      }
    }
  })
}

function removeFromCart(id) {
  const newCart = cart.filter((item) => item.id !== id);
  setCart([...newCart]);
}

function updateCartValues(action, value) {
  if (action === 'plus') {
    setCartQuantity(cartQuantity + 1);
    setSubtotal(subtotal + value);
  } else if (action === 'minus') {
    setCartQuantity(cartQuantity - 1);
    setSubtotal(subtotal - value);
  }
}


  return (
  <CartContext.Provider 
  value={{cart, addToCart, changeQuantity, cartQuantity, subtotal}} >
    {children}
  </CartContext.Provider>
  )
}
