import PropTypes from "prop-types";

import ProductsGrid from "./ProductsGrid";
import HeartIcon from "../../assets/icons/HeartIcon";

function RoundedShowcaseContainer({ productList }) {
  const productTags = new Set(productList.map((prod) => prod.tag));
  return (
    <section className="w-full min-h-fit px-6 py-8 rounded-t-3xl bg-proj-lightGray dark:bg-proj-darkGray">
      <ul
        id="tags"
        className="flex items-center overflow-x-auto scroll-hidden w-full h-8 gap-8"
      >
        {Array.from(productTags).map((tag, index) => (
          <li key={index}>
            <button className="w-24 h-6 text-center text-sm font-bold rounded-full text-proj-lightGray bg-proj-purple dark:text-proj-darkGray dark:bg-proj-orange">
              {tag}
            </button>
          </li>
        ))}
      </ul>
      <article className="relative w-11/12 max-w-md aspect-video my-6 mx-auto rounded-lg bg-proj-white dark:bg-proj-lightGray">
        <HeartIcon className="absolute bottom-2 right-2 w-6 h-6 fill-proj-black" />
      </article>
      <section>
        <h2 className="my-6 font-bold text-xl">Mais populares</h2>
        <ProductsGrid products={productList} />
      </section>
    </section>
  );
}

RoundedShowcaseContainer.propTypes = {
  productList: PropTypes.array.isRequired,
};

export default RoundedShowcaseContainer;