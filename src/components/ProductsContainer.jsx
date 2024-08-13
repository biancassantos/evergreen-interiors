import products from '../products';
import ProductCard from './ProductCard';

const ProductsContainer = () => {
  return (
    <section className="products-container">
        {products.map((product) => {
            return <ProductCard 
            key={product.id}
            id={product.id}
            productName={product.productName}
            productImg={product.productImg}
            imgAlt={product.productName}
            productPrice={product.productPrice}
            productLink={product.productLink}/>
        })}
    </section>
  )
}

export default ProductsContainer;
