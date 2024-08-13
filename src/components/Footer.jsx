import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookSquare, FaPinterestSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <section className="footer-content">
            <div className="logo-and-socials">
                <p id="footer-logo">Evergreen<br />Interiors</p>
                <div className="logo-socials">
                    <Link to="#"><FaInstagram /></Link>
                    <Link to="#"><FaFacebookSquare /></Link>
                    <Link to="#"><FaPinterestSquare /></Link>
                </div>
            </div>
            <div>
                <ul>
                    <li><Link to="#">Company Policy</Link></li>
                    <li><Link to="#">Work Work Us</Link></li>
                    <li><Link to="#">Collaborators</Link></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <p>(00) 0000-0000</p>
                <p>company@email.com</p>
            </div>
        </section>
        <section className="footer-address">
            <p>123 Company Adress - Boston, MA</p>
        </section>
    </footer>
  )
}

export default Footer;