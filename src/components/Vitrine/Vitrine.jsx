import { useRef } from "react";

import PropTypes from "prop-types";
import ProductVitrine from "./ProductVitrine";
import ArrowIcon from "../../assets/icons/ArrowIcon";

function Vitrine({ products }) {
  const carousel = useRef(null);

  const scroll = (to = 0) => {
    carousel.current.scrollTo(carousel.current.scrollLeft + to, 0);
  };

  console.log("Vitrine renderizada!");

  return (
    <section className="relative">
      <ul
        ref={carousel}
        className="scroll-hidden flex scroll-smooth snap-mandatory snap-x w-screen h-48 overflow-x-auto bg-proj-lightGray dark:bg-proj-darkGray"
      >
        {products.map((prod) => (
          <ProductVitrine key={prod.id} product={prod} />
        ))}
      </ul>
      <button
        className="absolute left-4 bottom-1/2 translate-y-1/2 navArrowButton flex items-center justify-center"
        onClick={() => scroll(-300)}
      >
        <ArrowIcon className="w-6 h-6 fill-proj-darkGray -scale-x-100" />
      </button>
      <button
        className="absolute right-4 bottom-1/2 translate-y-1/2 navArrowButton flex items-center justify-center"
        onClick={() => scroll(300)}
      >
        <ArrowIcon className="w-6 h-6 fill-proj-darkGray" />
      </button>
    </section>
  );
}

Vitrine.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Vitrine;
