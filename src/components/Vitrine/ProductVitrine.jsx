import PropTypes from "prop-types"

function ProductVitrine({product}) {
    return <li className="snap-center flex-shrink-0 w-96 h-full">
        <img className="object-fill w-full h-auto" src={product.imgURL} alt="product" />
    </li>
}

ProductVitrine.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductVitrine;