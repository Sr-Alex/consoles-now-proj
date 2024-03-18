import PropTypes from "prop-types";

import ProductMiniature from "./ProductMiniature";

function ProductsGrid({ products }) {
  return (
    <ul className="flex flex-wrap justify-evenly w-full h-fit gap-6">
      {products.map((prod) => (
        <ProductMiniature key={prod.id} product={prod} />
      ))}
    </ul>
  );
}

ProductsGrid.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsGrid;