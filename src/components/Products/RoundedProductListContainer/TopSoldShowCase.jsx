import PropTypes from "prop-types";

import HeartIcon from "../../../assets/icons/HeartIcon";

function TopSoldShowCase({ product }) {
     return (
          <article className="relative overflow-hidden w-11/12 max-w-md aspect-video my-6 mx-auto rounded-lg bg-proj-white highlight dark:bg-proj-lightGray">
               <figure className="w-full h-auto">
                    <img
                         src={product.imgURL}
                         alt={product.name}
                         className="w-full h-full"
                    />
               </figure>
               <HeartIcon className="cursor-pointer absolute bottom-2 right-2 w-6 h-6 fill-proj-black duration-200 hover:fill-proj-darkGray" />
          </article>
     );
}

TopSoldShowCase.propTypes = {
     product: PropTypes.object,
};

export default TopSoldShowCase;
