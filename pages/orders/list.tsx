import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { IOrder } from "../../../mobile/smart-delivery/src/interfaces/order";
import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import OrderListComponent from "../../components/OrderListComponent";
import ProductListComponent from "../../components/ProductListComponent";
import OrderService from "../../services/OrderService";

export async function getServerSideProps() {
  const service = new OrderService();
  const data = await service.getAll();
  return { props: { data: data.data } };
}

const ProductListPage = (props: any) => {
  const [data, setData] = useState<IOrder[]>(props.data);

  const [filtered, setFiltered] = useState(false);

  const handleDataFilter = (filter) => {
    if (filter.target.value.length > 0) {
      console.log("filtro " + filter.target.value);

      const filtered_data = props.data.filter((element) => {
        return element.state.includes(filter.target.value);
      });
      setFiltered(true);
      setData(filtered_data);
    } else {
      setFiltered(false);
    }
  };

  return (
    <>
      <DefaultPage title="title">
        <>
          <h3 className="text-center mt-4">Lista de Pedidos</h3>
          <Form className="justify-content-center w-50 d-flex">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite para pesquisar no status"
                onChange={handleDataFilter}
              />
              <Form.Text className="text-muted">
                Digite seu texto, apague para retornar!
              </Form.Text>
            </Form.Group>
          </Form>
          <Container className="justify-content-md-center w-100 ">
            <Col className="w-10 border p-5 shadow-lg mb-5 bg-white">
              <OrderListComponent
                data={filtered ? data : props.data}
              ></OrderListComponent>
            </Col>
          </Container>
        </>
      </DefaultPage>
    </>
  );
};

export default ProductListPage;
