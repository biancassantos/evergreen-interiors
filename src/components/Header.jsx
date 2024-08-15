import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header>
        <div className="header-content">
            <h1 className="logo">Evergreen<br />Interiors</h1>
            <nav className="desktop-menu">
                <ul>
                    <li className="menu-link"><Link to="/evergreen-interiors">home</Link></li>
                    <li className="menu-link"><Link to="#">about</Link></li>
                    <li className="menu-link"><Link to="#">my purchases</Link></li>
                </ul>
                <div className="cart">
                    <span className="cart-number">0</span>
                    <button className="cart-btn">
                        <FaShoppingCart />
                    </button>
                </div>
                <button className="menu-mobile-btn">
                    <FaBars />
                </button>
            </nav>

            <nav className="mobile-menu">
                <ul>
                    <li className="menu-link"><Link to="/">home</Link></li>
                    <li className="menu-link"><Link to="#">about</Link></li>
                    <li className="menu-link"><Link to="#">my purchases</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header;