import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import context from "react-bootstrap/esm/AccordionContext";
import { CartItemDetail } from "../../components/CartItemDetail/CartItemDetail.";
import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import { OrderForm } from "../../components/Forms/OrderForm";
import { ICart } from "../../models/Cart";
import CartItemService from "../../services/CartItemService";
import OrderService from "../../services/OrderService";
import ProductService from "../../services/ProductService";

export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const service = new OrderService();
  const data = await service.retrieve(id);
  return { props: { data: data.data } };
}

const OrderDetail = (props: any) => {
  const cartService = new CartItemService();

  const [carItens, serCartItens] = useState<ICart[]>([]);

  useEffect(() => {
    cartService.getCartByOrder(props.data.id).then((res) => {
      serCartItens(res.data);
    });
  }, []);

  console.log("atualizar " + JSON.stringify(props.data));
  return (
    <>
      <DefaultPage title="default">
        <Container className="justify-content-md-center w-100 ">
          <Row>
            <Col className="w-10 border p-5 shadow-lg mb-5 bg-white m-3">
              <OrderForm data={props.data}></OrderForm>
            </Col>
            <Col className="w-10 border p-5 shadow-lg mb-5 bg-white m-3">
              <Row>Itens do pedido</Row>
              <Row>
                <CartItemDetail
                  carts={carItens}
                  order={props.data}
                ></CartItemDetail>
              </Row>
            </Col>
          </Row>
        </Container>
      </DefaultPage>
    </>
  );
};

export default OrderDetail;
