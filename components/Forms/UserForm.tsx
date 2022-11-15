import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { IOder } from "../../models/Order";
import * as Yup from "yup";
import Alert from "react-bootstrap/Alert";
import { Formik } from "formik";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import { IUSer } from "../../models/User";
import { SubmitButton } from "../Buttons/SubmitButton";
import { useRouter } from "next/router";
type props = {
  data?: IUSer;
};

export const UserForm = ({ data }: props) => {
  const router = useRouter();

  const hasUser: boolean = data?.id ? true : false;

  const validationSchema = Yup.object().shape({
    // name: Yup.string().required("Required").min(1, "Too short"),
    login: Yup.string().required("Nome obrigatório").min(1, "Too short"),
    first_name: Yup.string()
      .required("Primeiro Nome Obrigatório")
      .min(5, "Too short"),
    last_name: Yup.string()
      .required("último Nome obrigatório")
      .min(1, "Too short"),
    // email: Yup.string().required("Email obrigatório").min(1, "Too short"),
    // address: Yup.string().required("Endereço obrigatório").min(1, "Too short"),
    // phone: Yup.string().required("Telefone obrigatório").min(1, "Too short"),
  });

  return (
    <>
      <Formik
        initialValues={{
          id: data?.id || "",
          login: data?.login || "",
          first_name: data?.first_name || "",
          last_name: data?.last_name || "",
          email: data?.email || "",
          address: data?.address || "",
          phone: data?.phone || "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // same shape as initial values

          if (router.pathname == "/users/[id]") {
            api
              .patch<IUSer>(`/users/${values.id}`, values)
              .then((res) => {
                toast.success("Usuário atualizado com sucesso");
                router.push("/users/list");
              })
              .catch((err) => {
                toast.error("erro ao atualziar usuário");
              });
          } else if (router.pathname == "/users/create") {
            api
              .post<IUSer>(`/users/`, values)
              .then((res) => {
                toast.success("Usuário criado com sucesso");
                router.push("/users/list");
              })
              .catch((err) => {
                toast.error("erro ao atualziar usuário");
              });
          }
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
            {hasUser ? (
              <Form.Group
                className="mb-3"
                controlId="formId"
                onChange={() => {}}
              >
                <Form.Label>#ID</Form.Label>
                <Form.Control
                  type="text"
                  name="id"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  defaultValue={values.id}
                  readOnly={true}
                />
                <Form.Text className="text-muted">
                  Id único do usuário
                </Form.Text>
                {errors.order && touched.order ? (
                  <Alert variant="danger">{errors.order}</Alert>
                ) : null}
              </Form.Group>
            ) : (
              ""
            )}

            <Form.Group className="mb-3" controlId="formLogin">
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="string"
                name="login"
                onBlur={handleBlur}
                onChange={handleChange}
                defaultValue={data?.login}
              />
              {errors.login && touched.login ? (
                <Alert variant="danger">{errors.login}</Alert>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>Primeiro Nome</Form.Label>
              <Form.Control
                type="text"
                defaultValue={data?.first_name}
                name="first_name"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.first_name && touched.first_name ? (
                <Alert variant="danger">{errors.first_name}</Alert>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Último Nome</Form.Label>
              <Form.Control
                name="last_name"
                onBlur={handleBlur}
                onChange={handleChange}
                defaultValue={data?.last_name}
              ></Form.Control>
              {errors.last_name && touched.last_name ? (
                <Alert variant="danger" className="text-muted">
                  {errors.last_name}
                </Alert>
              ) : null}
            </Form.Group>

            <SubmitButton
              title={hasUser ? "Atualizar" : "Criar"}
              disabled={
                Array.isArray(errors) || Object.values(errors).toString() != ""
              }
            ></SubmitButton>
          </Form>
        )}
      </Formik>

      <ToastContainer />
    </>
  );
};
