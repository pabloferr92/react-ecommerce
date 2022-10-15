import { Alert, Button } from "react-bootstrap";

import { IoIosBeer } from "react-icons/io";
import { ICart } from "../../models/Cart";
import { IOder } from "../../models/Order";

/*[
  {
    product: {
      id: "1",
      description: "Heineken 350ml",
      image:
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/cerveja-heineken-lata-350-ml1-157b2e5b56d0a3b51c15676907824683-640-0.jpg",
      price: 5,
      cold: true,
      discount: 0,
      priceFormated: "R$5,00",
      discountFormated: "R$5,00",
    },
    quantity: 1,
    total_price: 5,
    order: 12,
    id: 9,
  },
  {
    product: {
      id: "1",
      description: "Heineken 350ml",
      image:
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/cerveja-heineken-lata-350-ml1-157b2e5b56d0a3b51c15676907824683-640-0.jpg",
      price: 5,
      cold: true,
      discount: 0,
      priceFormated: "R$5,00",
      discountFormated: "R$5,00",
    },
    quantity: 2,
    total_price: 10,
    order: 12,
    id: 10,
  },
  {
    product: {
      id: "1",
      description: "Heineken 350ml",
      image:
        "https://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/cerveja-heineken-lata-350-ml1-157b2e5b56d0a3b51c15676907824683-640-0.jpg",
      price: 5,
      cold: true,
      discount: 0,
      priceFormated: "R$5,00",
      discountFormated: "R$5,00",
    },
    quantity: 2,
    total_price: 10,
    order: 12,
    id: 11,
  },
]; */

type Props = {
  carts: ICart[];
  order: IOder;
};
export const CartItemDetail: React.FC<Props> = (data: Props) => {
  return (
    <>
      {data.carts.map((element: ICart) => {
        return (
          <>
            <Alert key={element.id} variant={"secondary "}>
              {" "}
              {"Produto: " +
                element.product.description +
                " Quantidade: " +
                element.quantity +
                " Valor: R$ " +
                element.total_price}
            </Alert>
          </>
        );
      })}
      <Alert variant="success">
        Total do pedido: R$ {data.order.total_price}
      </Alert>
    </>
  );
};
