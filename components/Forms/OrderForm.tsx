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
type props = {
  data: IOder;
};

export const OrderForm = ({ data }: props) => {
  const cartService = new CartItemService();
  /*
  
       "user": "Pablo",
      "created_at": "2022-09-25T02:17:41.569Z",
      "state": "submited",
      "total_price": 18.98,
      "id": 11
  */

  const router = useRouter();

  const theme = useTheme();

  const validationSchema = Yup.object().shape({
    order: Yup.string().required("Required").min(1, "Too short"),
    state: Yup.string().required("Estado obrigatório").min(1, "Too short"),
  });

  return (
    <>
      <Formik
        initialValues={{
          state: data.state || "",
          order: data.id || "",
          created_at: data.created_at || "",
          user: data.user || "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // same shape as initial values

          api
            .put<IOder>(`/orders/${values.order}`, values)
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
              onChange={() => {
                console.log(
                  "errors" + errors
                    ? true + JSON.stringify(errors)
                    : false + JSON.stringify(errors)
                );
              }}
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
                placeholder={data.user}
                disabled={true}
                name="user"
                onBlur={handleBlur}
                onChange={handleChange}
                defaultValue={values.user}
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
                defaultValue={values.state}
              >
                <option defaultChecked value={""}>
                  Escolha uma das opções
                </option>
                <option value="submited">Recebido</option>
                <option value="separacao">Em Separação</option>
                <option value="encaminhado">Encaminhado</option>
                <option value="concluido">Concluído</option>
              </Form.Select>{" "}
              {errors.state && touched.state ? (
                <Alert variant="danger" className="text-muted">
                  {errors.state}
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
