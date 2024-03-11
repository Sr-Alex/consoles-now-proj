import PropTypes from "prop-types"

function ProductShowCase({product}) {
    return <li className="snap-center flex-shrink-0 w-96 h-full">
        <img className="object-fill w-full h-auto" src={product.imgURL} alt="product" />
    </li>
}

ProductShowCase.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductShowCase;