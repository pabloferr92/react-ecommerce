import { Col, Container, Nav, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import OrderService from "../../services/OrderService";
import Link from "next/link";
import { IOrder } from "../../../mobile/smart-delivery/src/interfaces/order";
import { CardCol, CardTitle } from "./style";
import { useTheme } from "styled-components";

import { RiInformationLine } from "react-icons/ri";

export async function getServerSideProps() {
  const service = new OrderService();
  const data = await service.getAll();
  return { props: { data: data.data } };
}

type TotalOrders = {
  recebido: number;
  separacao: number;
  enviado: number;
  entregue: number;
};

const Dashboard = (props: any) => {
  const theme = useTheme();
  const [totalOrders, setTotalOrders] = useState<TotalOrders>({
    recebido: 0,
    separacao: 0,
    enviado: 0,
    entregue: 0,
  });

  const linkStyle = { color: theme.colors.bold, fontSize: "13px" };

  useEffect(() => {
    const quantities = {
      recebido: 0,
      separacao: 0,
      enviado: 0,
      entregue: 0,
    };
    props.data.forEach((ele: any) => {
      if (ele.state.value == 1) quantities.recebido += 1;
      if (ele.state.value == 2) quantities.separacao += 1;
      if (ele.state.value == 3) quantities.enviado += 1;
      if (ele.state.value == 4) quantities.entregue += 1;
    });

    setTotalOrders(quantities);
  }, []);

  return (
    <>
      <DefaultPage title="title">
        <>
          <h3 className="text-center mt-4">Dashboard</h3>
          <Container className="justify-content-md-center w-100 ">
            <Col className="border p-5 shadow-lg w-100">
              <Row className="w-100 justify-content-center m-3">
                <CardCol className="col w-50">
                  <div className="card text bg-danger o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fa fa-fw fa-comments"></i>
                      </div>
                      <div className="mr-5">
                        <CardTitle>Novos Pedidos!</CardTitle>
                      </div>
                      <div className="mr-5">
                        <CardTitle>Total: {totalOrders.recebido}</CardTitle>
                      </div>
                    </div>
                    <div className="card-footer text-white clearfix small z-1">
                      <Link href="/orders/list?status=1">
                        <Nav.Link style={linkStyle} href="#home">
                          View Details
                        </Nav.Link>
                      </Link>
                    </div>
                  </div>
                </CardCol>
                <CardCol className="col w-50">
                  <div className="card text bg-warning o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fa fa-fw fa-list"></i>
                      </div>
                      <div className="mr-5">
                        <CardTitle>Pedidos em separação!</CardTitle>
                      </div>
                      <div className="mr-5">
                        <CardTitle>Total: {totalOrders.separacao} </CardTitle>
                      </div>
                    </div>
                    <div className="card-footer text-white clearfix small z-1 ">
                      <Link href="/orders/list?status=2">
                        <Nav.Link style={linkStyle} href="#home">
                          View Details
                          <RiInformationLine></RiInformationLine>
                        </Nav.Link>
                      </Link>
                    </div>
                  </div>
                </CardCol>
              </Row>

              <Row className="w-100 justify-content-center m-3">
                <CardCol className="col w-50">
                  <div className="card text bg-primary o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fa fa-fw fa-shopping-cart"></i>
                      </div>
                      <div className="mr-5">
                        <CardTitle>Pedidos Enviados!</CardTitle>
                      </div>
                      <div className="mr-5">
                        <CardTitle>Total: {totalOrders.enviado} </CardTitle>
                      </div>
                    </div>
                    <span className="card-footer text-white clearfix small z-1">
                      <Link href="/orders/list?status=3">
                        <Nav.Link style={linkStyle} href="#home">
                          View Details
                          <RiInformationLine></RiInformationLine>
                        </Nav.Link>
                      </Link>
                    </span>
                  </div>
                </CardCol>
                <CardCol className="col w-50">
                  <div className="card text bg-success o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fa fa-fw fa-support"></i>
                      </div>
                      <div className="mr-5">
                        <CardTitle>Pedidos Entregues!</CardTitle>
                      </div>
                      <div className="mr-5">
                        <CardTitle>Total: {totalOrders.entregue} </CardTitle>
                      </div>
                    </div>
                    <div className="card-footer text-white clearfix small z-1">
                      <Link href="/orders/list?status=4">
                        <Nav.Link style={linkStyle} href="#home">
                          View Details
                        </Nav.Link>
                      </Link>
                      <span className="float-right">
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </div>
                  </div>
                </CardCol>
              </Row>
            </Col>
          </Container>
        </>
      </DefaultPage>
    </>
  );
};

export default Dashboard;
