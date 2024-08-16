/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import ProductSpecifics from "./ProductSpecifics";

const ProductInfo = ({showProduct}) => {
  return (
    <section className="product-description">
        <Link to="/evergreen-interiors/bedroom" className="go-back">
            <p><FaArrowLeft /> Go back</p>
        </Link>

        <section className="product-container">
            <div className="product-img-big">
                <img src={`../public/${showProduct[0].productImg}`} alt={showProduct[0].productName} />
            </div>
            <div>
                <h1>{showProduct[0].productName}</h1>
                <p className="price">${showProduct[0].productPrice}</p>
                <div className="add-container">
                    <button>add to cart</button>
                    <select name="quantity" id="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
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