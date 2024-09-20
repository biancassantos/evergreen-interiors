/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MobileMenu = ({open, closeMenu}) => {
  return (
    <nav className={`mobile-menu ${open ? 'open-mobile-menu' : ''}`}>
      <ul>
        <li className="menu-link" onClick={closeMenu}>
            <Link to="/evergreen-interiors">home</Link>
        </li>
        <li className="menu-link" onClick={closeMenu}>
            <Link to="/evergreen-interiors/about">about</Link>
        </li>
        <li className="menu-link" onClick={closeMenu}>
            <Link to="/evergreen-interiors/purchases">my purchases</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MobileMenu;