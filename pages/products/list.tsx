import { Col, Container, Row } from "react-bootstrap";
import ProductListComponent from "../../components/ProductListComponent";
import { DefaultPage } from "./../../components/NavMenu/DefaultPage/DefaultPage";
import ProductService from "./../../services/ProductService";

export async function getServerSideProps() {
  const productService = new ProductService();
  const data = await productService.getAll();

  return { props: { data: data.data } };
}

const ProductListPage = (props: any) => {
  return (
    <>
      <DefaultPage title="title">
        <>
          <h3 className="text-center mt-3">Lista de Usuários</h3>
          <Container className="justify-content-md-center w-100 ">
            <Col className="w-10">
              <ProductListComponent data={props.data}></ProductListComponent>
            </Col>
          </Container>
        </>
      </DefaultPage>
    </>
  );
};

export default ProductListPage;
