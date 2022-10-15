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

const Dashboard = (props: any) => {
  const theme = useTheme();
  const [totalNewOrders, setTotalnNwOrders] = useState<IOrder[]>([]);

  const linkStyle = { color: theme.colors.bold, fontSize: "13px" };

  useEffect(() => {
    const newOrders = props.data.filter((ele: any) => {
      return ele.state === "submited";
    });
    setTotalnNwOrders(newOrders);
  }, []);

  return (
    <>
      <DefaultPage title="title">
        <>
          <h3 className="text-center mt-4">Dashboard</h3>
          <Container className="justify-content-md-center w-100 ">
            <Col className="border p-5 shadow-lg w-100">
              <Row className="w-100 justify-content-center">
                <CardCol className="col">
                  <div className="card text-white bg-primary o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fa fa-fw fa-comments"></i>
                      </div>
                      <div className="mr-5">
                        <CardTitle>New Messages!</CardTitle>
                      </div>
                    </div>
                    <a
                      className="card-footer text-white clearfix small z-1"
                      href="#"
                    >
                      <Link href="/orders/list_new_orders">
                        <Nav.Link style={linkStyle} href="#home">
                          View Details
                        </Nav.Link>
                      </Link>{" "}
                      <span className="float-right">
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </a>
                  </div>
                </CardCol>
                <CardCol className="col">
                  <div className="card text-white bg-warning o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fa fa-fw fa-list"></i>
                      </div>
                      <div className="mr-5">
                        <CardTitle>New Messages!</CardTitle>
                      </div>
                    </div>
                    <Link href="/orders/list_new_orders">
                      <Nav.Link style={linkStyle} href="#home">
                        View Details
                      </Nav.Link>
                    </Link>{" "}
                    <RiInformationLine></RiInformationLine>
                  </div>
                </CardCol>
              </Row>

              <Row className="w-100 justify-content-center">
                <CardCol className="col">
                  <div className="card text-white bg-success o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fa fa-fw fa-shopping-cart"></i>
                      </div>
                      <div className="mr-5">
                        <CardTitle>
                          {totalNewOrders.length} New Orders!
                        </CardTitle>
                      </div>
                    </div>
                    <span className="card-footer text-white clearfix small z-1">
                      <Link href="/orders/list_new_orders">
                        <Nav.Link style={linkStyle} href="#home">
                          View Details
                          <RiInformationLine></RiInformationLine>
                        </Nav.Link>
                      </Link>
                    </span>
                  </div>
                </CardCol>
                <CardCol className="col">
                  <div className="card text-white bg-danger o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fa fa-fw fa-support"></i>
                      </div>
                      <div className="mr-5">
                        <CardTitle>New Messages!</CardTitle>
                      </div>
                    </div>
                    <a
                      className="card-footer text-white clearfix small z-1"
                      href="#"
                    >
                      <Link href="/orders/list_new_orders">
                        <Nav.Link style={linkStyle} href="#home">
                          View Details
                        </Nav.Link>
                      </Link>
                      <span className="float-right">
                        <i className="fa fa-angle-right"></i>
                      </span>
                    </a>
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
