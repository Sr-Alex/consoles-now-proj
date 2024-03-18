import PropTypes from "prop-types";

import ProductsGrid from "../ProductsGrid";
import TagScroller from "./TagScroller";
import TopSoldShowCase from "./TopSoldShowCase";

function RoundedShowcaseContainer({ productList }) {
     const productTags = Array.from(
          new Set(productList.map((prod) => prod.tag))
     );
     const topSoldProduct = productList.sort((a, b) => a.sold - b.sold)[0];

     return (
          <section className="w-full min-h-fit px-6 py-8 rounded-t-3xl bg-proj-lightGray dark:bg-proj-darkGray">
               <TagScroller tagList={productTags} />
               <TopSoldShowCase product={topSoldProduct} />
               <section>
                    <h2 className="my-6 font-bold text-xl">Mais populares</h2>
                    <hr />
                    <ProductsGrid products={productList} />
               </section>
          </section>
     );
}

RoundedShowcaseContainer.propTypes = {
     productList: PropTypes.array.isRequired,
};

export default RoundedShowcaseContainer;
