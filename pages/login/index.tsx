import { NextPage } from "next";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "../../components/LoginForm/login_form";
import NavMenu from "../../components/NavMenu/NavMenu";

const Login: NextPage = () => {
  return (
    <>
      <NavMenu></NavMenu>
      <Container className="h-100">
        <Row className="w-100  border z-index-modal shadow-lg h-100 justify-content-center align-items-center ">
          <Col className="d-flex justify-content-center">
            <LoginForm></LoginForm>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
