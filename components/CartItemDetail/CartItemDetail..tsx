import { Alert, Button } from "react-bootstrap";

import { IoIosBeer } from "react-icons/io";
import { ICart } from "../../models/Cart";
import { IOder } from "../../models/Order";

type Props = {
  carts: ICart[];
  order: IOder;
};
export const CartItemDetail: React.FC<Props> = (data: Props) => {
  return (
    <>
      {data.carts.map((element: ICart) => {
        return (
          <Alert key={element.id} variant={"secondary "}>
            {" "}
            {"Produto: " +
              element.product.description +
              " Quantidade: " +
              element.quantity +
              " Valor: R$ " +
              element.total_price}
          </Alert>
        );
      })}
      <Alert variant="success">
        Total do pedido: R$ {data.order.total_price}
      </Alert>
    </>
  );
};
