import { Col, Container, Row } from "react-bootstrap";
import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import OrderListComponent from "../../components/OrderListComponent";
import ProductListComponent from "../../components/ProductListComponent";
import OrderService from "../../services/OrderService";

export async function getServerSideProps() {
  const service = new OrderService();
  const data = await service.getOrdersByState("submited");
  return { props: { data: data.data } };
}

const ProductListPage = (props: any) => {
  return (
    <>
      <DefaultPage title="title">
        <>
          <h3 className="text-center mt-4">Lista de Novos Pedidos</h3>
          <Container className="justify-content-md-center w-100 ">
            <Col className="w-10 border p-5 shadow-lg mb-5 bg-white">
              <OrderListComponent data={props.data}></OrderListComponent>
            </Col>
          </Container>
        </>
      </DefaultPage>
    </>
  );
};

export default ProductListPage;
