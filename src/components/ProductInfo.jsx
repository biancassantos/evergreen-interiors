/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import ProductSpecifics from "./ui/ProductSpecifics";

const ProductInfo = ({showProduct}) => {
    const navigate = useNavigate();
    const {addToCart} = useContext(CartContext);
    
  return (
    <section className="product-description">
        <button onClick={() => navigate(-1)} className="go-back">
            <FaArrowLeft /> Go back
        </button>

        <section className="product-container">
            <div className="product-img-big">
                <img src={`../${showProduct[0].productImg}`} alt={showProduct[0].productName} />
            </div>
            <div>
                <h1>{showProduct[0].productName}</h1>
                <p className="price">${showProduct[0].productPrice}</p>
                <div className="add-container">
                    <button className="add-to-cart-btn" onClick={() => {
                        addToCart(showProduct[0].id)
                    }}>add to cart</button>
                </div>
                <p>Shipping</p>
                <input type="search" name="Shipping" id="shipping" />
                <button className="search-btn">
                    <FaSearch />
                </button>
                <div className="shipping-options"></div>
            </div>
        </section>

        <ProductSpecifics 
        productDescription={showProduct[0].productDescription}
        descriptionList={showProduct[0].descriptionList}
        productSpecifications={showProduct[0].productSpecifications} />
    </section>
  )
}

export default ProductInfo;