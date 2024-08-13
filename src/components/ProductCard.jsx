/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductCard = ({ id, productImg, imgAlt, productName, productPrice }) => {
  return (
    <section className="product-card" id={id}>
        <div className="product-img">
            <Link to={`${id}`}>
                <img src={productImg} alt={imgAlt} />
            </Link>
        </div>
        <div className="product-info">
            <div className="product-header">
                <h3>{productName}</h3>
                <select name="quantity" id="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
            <p>${productPrice}</p>
            <button>add to cart</button>
        </div>
    </section>
  )
}

export default ProductCard;