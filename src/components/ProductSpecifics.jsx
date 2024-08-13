/* eslint-disable react/prop-types */

const ProductSpecifics = ({ productDescription, descriptionList, productSpecifications }) => {
  return (
    <section className="product-specifics">
        <h2>About the product</h2>
        <p>{productDescription}</p>
        <ul>
            {descriptionList.map((item, key) => {
                return <li key={key}>{item}</li>
            })}
        </ul>
        <h2>Specifications</h2>
        <ul>
            {productSpecifications.map((item, key) => {
                return <li key={key}>{item}</li>
            })}
        </ul>
    </section>
  )
}

export default ProductSpecifics;