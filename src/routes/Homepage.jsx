import { useState } from "react";

import LinkProductSearcher from "../components/Searcher/LinkProductSearcher";
import CarouselShowcaseContainer from "../components/Products/CarouselShowcaseContainer";
import RoundedShowcaseContainer from "../components/Products/RoundedProductListContainer";

function Homepage() {
  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "PlayStation 5",
      tag: "Consoles",
      sold: 521,
      price: 3500,
      imgURL:
        "https://infostore.vteximg.com.br/arquivos/ids/250371-0-0/console_playstation_5_slim_1tb_ssd_spider_man_2_-_sony_02.jpg?v=638362868111200000",
    },
    {
      id: 2,
      name: "Xbox GamePass Ultimate - 1 mês",
      tag: "GamePass",
      sold: 1560,
      price: 50,
      imgURL:
        "https://eoszsmvknnh.exactdn.com/wp-content/uploads/2024/01/Xbox-Game-Pass-Ultimate-esta-perdendo-2-jogos-hoje.jpg?strip=all&lossy=1&ssl=1&fit=800%2C400",
    },
    {
      id: 3,
      name: "Nintendo Switch",
      tag: "Portáteis",
      sold: 231,
      price: 25000,
      imgURL:
        "https://a-static.mlcdn.com.br/800x560/nintendo-switch-32gb-hac-001-01-1-controle-joy-con-vermelho-e-azul/magazineluiza/043082000/d38296e874a7d5f3e06ff0d8704bb123.jpg",
    },
  ]);

  return (
    <main className="">
      <CarouselShowcaseContainer products={productList} />
      <LinkProductSearcher />
     <RoundedShowcaseContainer productList={productList}>

     </RoundedShowcaseContainer>
    </main>
  );
}

export default Homepage;
