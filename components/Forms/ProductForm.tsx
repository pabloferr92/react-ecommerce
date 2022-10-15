import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import Alert from "react-bootstrap/Alert";
import { Formik } from "formik";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";
import { IProduct } from "../../models/Product";

type props = {
  data: IProduct;
};

export const ProductForm = ({ data }: props) => {
  const router = useRouter();

  console.log("Dados do form " + JSON.stringify(data));

  const theme = useTheme();

  const validationSchema = Yup.object().shape({
    description: Yup.string()
      .required("Descrição obrigatória")
      .min(1, "Too short"),
    category: Yup.string()
      .required("Categoria obrigatório")
      .min(1, "Too short"),
  });

  console.log("props " + JSON.stringify(data));

  return (
    <>
      <Formik
        initialValues={{
          id: data.id || "",
          description: data.description || "",
          image: data.image || "",
          price: data.price || "",
          discount: data.discount || "",
          category: data.category || "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // same shape as initial values

          api
            .put<IProduct>(`/products/${values.id}`, values)
            .then((res) => {
              toast.success("Produto atualizado com sucesso");
              router.push("/products/list");
            })
            .catch((err) => {
              toast.error("Erro ao atualziar produto");
            });
        }}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          formik,
        }: any) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="formID"
              onChange={() => {
                console.log(
                  "errors" + errors
                    ? true + JSON.stringify(errors)
                    : false + JSON.stringify(errors)
                );
              }}
            >
              <Form.Label>Nº do Produto</Form.Label>
              <Form.Control
                type="text"
                name="id"
                onBlur={handleBlur}
                onChange={handleChange}
                defaultValue={values.id}
                readOnly={true}
              />
              <Form.Text className="text-muted">
                identificador do produto
              </Form.Text>
              {errors.id && touched.id ? (
                <Alert variant="danger">{errors.id}</Alert>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="string"
                name="description"
                onBlur={handleBlur}
                onChange={handleChange}
                defaultValue={data.description}
              />
              {errors.description && touched.description ? (
                <Alert variant="danger">{errors.description}</Alert>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImage">
              <Form.Label>Imagem</Form.Label>
              <Form.Control
                type="text"
                name="image"
                onBlur={handleBlur}
                onChange={handleChange}
                defaultValue={values.image}
              />
              {errors.image && touched.image ? (
                <Alert variant="danger">{errors.image}</Alert>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Preço</Form.Label>
              <Form.Control
                type="text"
                name="price"
                onBlur={handleBlur}
                onChange={handleChange}
                defaultValue={values.price}
              />
              {errors.price && touched.price ? (
                <Alert variant="danger">{errors.price}</Alert>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Categoria</Form.Label>
              <Form.Select
                aria-label="Default select example"
                // defaultValue={data.state}
                name="category"
                onBlur={handleBlur}
                onChange={handleChange}
                defaultValue={values.category}
              >
                <option value={""}>Escolha uma das opções</option>
                <option value="beer">Cerveja</option>
                <option value="wine">Vinho</option>
                <option value="spirits">Destilados</option>
                <option value="no_alcohol">Bebidas sem álcool</option>
                <option value="foods">Comidas</option>
              </Form.Select>
              {errors.category && touched.category ? (
                <Alert variant="danger" className="text-muted">
                  {errors.category}
                </Alert>
              ) : null}
            </Form.Group>

            <Button
              variant="primary"
              style={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.bold,
                borderColor: theme.colors.border,
              }}
              type="submit"
              disabled={errors.state && touched.state}
            >
              Enviar
            </Button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
};
