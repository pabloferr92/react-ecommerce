import { useRouter } from "next/router";
import { Col, Container } from "react-bootstrap";
import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import { ProductForm } from "../../components/Forms/ProductForm";
import ProductService from "../../services/ProductService";

export async function getServerSideProps(context: any) {
  const id = context.params.id;
  const service = new ProductService();
  const data = await service.retrieve(id);
  return { props: { data: data.data } };
}

const ProductDetail = (props: any) => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <>
      <DefaultPage title="default">
        <Container className="justify-content-md-center w-100 ">
          <Col className="w-10 border p-5 shadow-lg mb-5 bg-white m-3">
            <ProductForm data={props.data}></ProductForm>
          </Col>
        </Container>
      </DefaultPage>
    </>
  );
};

export default ProductDetail;
