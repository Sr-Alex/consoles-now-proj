import { useState } from "react";

import Vitrine from "../components/Vitrine/Vitrine";

function Homepage() {
  const [ topProductList, setTopProductList] = useState([
    {
      id: 1,
      name: "PlayStation 5",
      price: 3500,
      imgURL: "https://infostore.vteximg.com.br/arquivos/ids/250371-0-0/console_playstation_5_slim_1tb_ssd_spider_man_2_-_sony_02.jpg?v=638362868111200000"
    },
    {
      id: 2,
      name: "Xbox Series X",
      price: 3500,
      imgURL: "https://target.scene7.com/is/image/Target/GUEST_350eb4ce-48a6-4503-9e6c-f59212b6b584?wid=800&hei=800&qlt=80&fmt=webp"
    }
  ]);

  return (
    <main className="">
      <Vitrine products={topProductList} />
    </main>
  );
}

export default Homepage;
