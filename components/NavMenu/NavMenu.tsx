import Image from "next/image";
import Link from "next/link";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { IoIosBeer } from "react-icons/io";

const NavMenu = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link href="/" passHref>
              <Nav.Link>
                <IoIosBeer className="h1"></IoIosBeer>
              </Nav.Link>
            </Link>{" "}
          </Navbar.Brand>
          <Row>
            <Col>
              <Link href="/products/list" passHref>
                <Nav.Link>Produtos</Nav.Link>
              </Link>{" "}
            </Col>
          </Row>
          <Link href="/index" passHref>
            <Nav.Link>
              <Button
                className="p-3 mb-2"
                variant="outline-warning bg-white rounded-pill"
              >
                Entrar
              </Button>{" "}
            </Nav.Link>
          </Link>{" "}
        </Container>
      </Navbar>
    </>
  );
};
export default NavMenu;
