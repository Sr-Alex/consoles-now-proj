import PropTypes from "prop-types";

function ProductMiniature({ product }) {
  return (
    <li className="flex flex-col flex-wrap flex-shrink items-center cursor-pointer w-48 h-64 p-2 space-y-2 text-center rounded-xl bg-proj-white duration-200 hover:shadow-md hover:shadow-proj-purple hover:scale-105 active:scale-100 dark:hover:shadow-proj-orange dark:bg-proj-lightGray">
      <figure className="w-full h-2/3">
        <img
          className="w-auto h-full mx-auto object-cover rounded-md"
          src={product.imgURL}
          alt={product.name}
        />
      </figure>
      <p className="w-full h-fit font-bold text-proj-darkGray dark:text-proj-darkGray">
        {product.name}
      </p>
    </li>
  );
}

ProductMiniature.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductMiniature;
