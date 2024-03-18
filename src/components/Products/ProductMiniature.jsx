import PropTypes from "prop-types";
import HeartIcon from "../../assets/icons/HeartIcon";

function ProductMiniature({ product }) {
     const formatPrice = (price) => {
          return new Intl.NumberFormat("pt-BR", {
               style: "currency",
               currency: "BRL",
               minimumFractionDigits: 2,
          }).format(price);
     }
     return (
          <li className="relative w-40 h-64 rounded-xl bg-proj-white highlight dark:bg-proj-lightGray">
               <div className="flex flex-col flex-wrap justify-between text-start w-full h-full p-2">
                    <figure className="w-full h-2/3">
                         <img
                              className="w-auto h-full mx-auto object-cover rounded-md"
                              src={product.imgURL}
                              alt={product.name}
                         />
                    </figure>
                    <p className="w-full h-fit font-bold text-sm text-proj-darkGray dark:text-proj-darkGray">
                         {product.name}
                    </p>
                    <h5 className="text-lg">{formatPrice(product.price)}</h5>
               </div>
               <HeartIcon className="absolute right-2 bottom-2 w-6 h-6 fill-proj-black duration-200 hover:fill-proj-darkGray" />
          </li>
     );
}

ProductMiniature.propTypes = {
     product: PropTypes.object.isRequired,
};

export default ProductMiniature;
