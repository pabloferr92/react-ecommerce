import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { IOder } from "../../models/Order";
import * as Yup from "yup";
import Alert from "react-bootstrap/Alert";
import { Formik } from "formik";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";
import CartItemService from "../../services/CartItemService";
import { ICart } from "../../models/Cart";
import styled from "styled-components";
import { IUSer } from "../../models/User";
type props = {
  data: IOder;
};

export const OrderForm = ({ data }: props) => {
  const cartService = new CartItemService();

  const [user, setUser] = useState<IUSer>({
    id: 0,
    login: "",
    name: "",
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    phone: "",
  });

  // useEffect(() => {
  //   console.log("id user" + data.user);
  //   api.get<IUSer>(`/users/${data.user}`).then((res) => {
  //     setUser(res.data);
  //   });
  // }, []);

  const router = useRouter();

  const theme = useTheme();

  const validationSchema = Yup.object().shape({
    order: Yup.string().required("Required").min(1, "Too short"),
    state: Yup.string().required("Estado obrigatório").min(1, "Too short"),
  });

  function getState(value: number | string) {
    if (value == 1) return { value: 1, display_value: "Recebido" };
    if (value == 2) return { value: 2, display_value: "Em separação" };
    if (value == 3) return { value: 3, display_value: "Enviado" };
    if (value == 4) return { value: 4, display_value: "Entregue" };
  }

  return (
    <>
      <Formik
        initialValues={{
          state: data.state.value || "",
          order: data.id || "",
          created_at: data.created_at || "",
          user: data.user.name || "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // same shape as initial values

          let payload = {
            user: data.user,
            state: getState(values.state),
          };

          api
            .patch<IOder>(`/orders/${values.order}`, payload)
            .then((res) => {
              toast.success("Pedido atualizado com sucesso");
              router.push("/orders/list");
            })
            .catch((err) => {
              toast.error("erro ao atualziar pedido");
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
              controlId="formOrder"
              onChange={() => {}}
            >
              <Form.Label>Nº do Pedido</Form.Label>
              <Form.Control
                type="text"
                name="order"
                onBlur={handleBlur}
                onChange={handleChange}
                defaultValue={values.order}
                readOnly={true}
              />
              <Form.Text className="text-muted">
                Identificador do pedido
              </Form.Text>
              {errors.order && touched.order ? (
                <Alert variant="danger">{errors.order}</Alert>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>Data da solicitação</Form.Label>
              <Form.Control
                readOnly={true}
                type="string"
                name="order"
                onBlur={handleBlur}
                onChange={handleChange}
                defaultValue={
                  new Date(data.created_at).toLocaleDateString() +
                    " " +
                    new Date(data.created_at).toLocaleTimeString() || ""
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formClient">
              <Form.Label>Cliente</Form.Label>
              <Form.Control
                type="text"
                placeholder={data.user.name}
                disabled={true}
                name="user"
                onBlur={handleBlur}
                onChange={handleChange}
                defaultValue={data.user.name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formState">
              <Form.Label>Estado</Form.Label>
              <Form.Select
                aria-label="Default select example"
                // defaultValue={data.state}
                defaultChecked={true}
                name="state"
                onBlur={handleBlur}
                onChange={handleChange}
                defaultValue={data.state.value}
              >
                <option defaultChecked value={""}>
                  Escolha uma das opções
                </option>
                <option value="1">Solicitado</option>
                <option value="2">Em Separação</option>
                <option value="3">Encaminhado</option>
                <option value="4">Concluído</option>
              </Form.Select>
              {errors.state && touched.state ? (
                <Alert variant="danger" className="text-muted">
                  {errors.state}
                </Alert>
              ) : null}
            </Form.Group>

            <Alert variant={"info"}>Entregar em: {data.user.address}</Alert>
            <Alert variant={"info"}>Contato: {data.user.phone}</Alert>
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
