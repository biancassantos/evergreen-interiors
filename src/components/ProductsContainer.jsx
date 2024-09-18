/* eslint-disable react/prop-types */
import products from '../products';
import ProductCard from './ui/ProductCard';

const ProductsContainer = ({ category }) => {
  return (
    <section className="products-container">
        {products.map((product) => {
            if (product.category.indexOf(category) > -1) {
              return <ProductCard 
              key={product.id}
              id={product.id}
              productName={product.productName}
              productImg={product.productImg}
              imgAlt={product.productName}
              productPrice={product.productPrice}
              productLink={product.productLink}/>
            }
            
        })}
    </section>
  )
}

export default ProductsContainer;
