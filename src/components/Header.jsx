import { useState, useContext } from 'react';
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';
import MobileMenu from './ui/MobileMenu';
import Cart from './Cart';
import { FaShoppingCart, FaBars } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const {cartQuantity} = useContext(CartContext);

  const closeMenu = () => {setOpen(false);}
  const closeCart = () => {setShowCart(false);}
  const cartBtnActions = () => {
    setShowCart(true);
    setOpen(false);
  }

  return (
    <header>
      <div className="header-content">
        <h1 className="logo">Evergreen<br />Interiors</h1>
        <nav className="desktop-menu">
            <ul>
                <li className="menu-link">
                  <Link to="/evergreen-interiors">home</Link>
                </li>
                <li className="menu-link">
                  <Link to="/evergreen-interiors/about">about</Link>
                </li>
                <li className="menu-link">
                  <Link to="/evergreen-interiors/purchases">my purchases</Link>
                </li>
            </ul>
            <div className="cart-icon">
                <span className="cart-number">{cartQuantity}</span>
                <button className="cart-btn" onClick={cartBtnActions}>
                    <FaShoppingCart />
                </button>
            </div>
            <button className="menu-mobile-btn" onClick={() => setOpen(!open)}>
                <FaBars />
            </button>
        </nav>

        <MobileMenu open={open} closeMenu={closeMenu} />
      </div>
      <Cart showCart={showCart} closeCart={closeCart} />
    </header>
  )
}

export default Header;