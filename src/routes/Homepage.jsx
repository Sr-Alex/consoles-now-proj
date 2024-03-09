import { useState } from "react";

import Vitrine from "../components/Vitrine/Vitrine.jsx";

function Homepage() {
  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "PlayStation 5",
      price: 3500,
      imgURL:
        "https://infostore.vteximg.com.br/arquivos/ids/250371-0-0/console_playstation_5_slim_1tb_ssd_spider_man_2_-_sony_02.jpg?v=638362868111200000",
    },
    {
      id: 2,
      name: "Xbox Series X",
      price: 3500,
      imgURL:
        "https://target.scene7.com/is/image/Target/GUEST_350eb4ce-48a6-4503-9e6c-f59212b6b584?wid=800&hei=800&qlt=80&fmt=webp",
    },
    {
      id: 3,
      name: "Nintendo Switch",
      price: 25000,
      imgURL:
        "https://a-static.mlcdn.com.br/800x560/nintendo-switch-32gb-hac-001-01-1-controle-joy-con-vermelho-e-azul/magazineluiza/043082000/d38296e874a7d5f3e06ff0d8704bb123.jpg",
    },
  ]);

  return (
    <main className="">
      <Vitrine products={productList} />
    </main>
  );
}

export default Homepage;
