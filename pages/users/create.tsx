import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import { OrderForm } from "../../components/Forms/OrderForm";
import { UserForm } from "../../components/Forms/UserForm";
import { ICart } from "../../models/Cart";
import UserService from "../../services/UserService";

const UserDetail = (props: any) => {
  return (
    <>
      <DefaultPage title="default">
        <Container className="justify-content-md-center w-100 ">
          <Row>
            <Col className="w-10 border p-5 shadow-lg mb-5 bg-white m-3">
              <UserForm></UserForm>
            </Col>
          </Row>
        </Container>
      </DefaultPage>
    </>
  );
};

export default UserDetail;
