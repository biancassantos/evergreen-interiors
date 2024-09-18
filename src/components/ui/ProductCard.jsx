/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ id, productImg, imgAlt, productName, productPrice }) => {
    const {addToCart} = useContext(CartContext);
  return (
    <section className="product-card" id={id}>
        <div className="product-img">
            <Link to={`${id}`}>
                <img src={productImg} alt={imgAlt} />
            </Link>
        </div>
        <div className="product-info">
            <div className="product-header">
                <h3>{productName.length > 13 ? `${productName.substring(0, 11)}...` : productName}</h3>
            </div>
            <p>${productPrice}</p>
            <button 
            className="add-to-cart-btn" 
            onClick={() => addToCart(id)}>
            add to cart
            </button>
        </div>
    </section>
  )
}

export default ProductCard;