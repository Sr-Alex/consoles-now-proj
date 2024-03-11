import { useRef } from "react";

import PropTypes from "prop-types";
import ProductShowCase from "./ProductShowcase";
import ArrowIcon from "../../assets/icons/ArrowIcon";

function CarouselShowcaseContainer({ products }) {
  const carousel = useRef(null);

  const scroll = (to = 0) => {
    carousel.current.scrollTo(carousel.current.scrollLeft + to, 0);
  };

  return (
    <section className="relative">
      <ul
        ref={carousel}
        className="flex scroll-smooth scroll-hidden overflow-x-auto  overflow-y-hidden snap-mandatory snap-x w-screen h-48 bg-proj-lightGray dark:bg-proj-darkGray"
      >
        {products.map((prod) => (
          <ProductShowCase key={prod.id} product={prod} />
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

CarouselShowcaseContainer.propTypes = {
  products: PropTypes.array.isRequired,
};

export default CarouselShowcaseContainer;
