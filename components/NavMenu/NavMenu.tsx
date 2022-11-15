import Image from "next/image";
import Link from "next/link";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { IoIosBeer } from "react-icons/io";
import { useTheme } from "styled-components";

const NavMenu = () => {
  const theme = useTheme();

  return (
    <>
      <Navbar
        bg={theme.colors.bold}
        variant="dark"
        style={{
          backgroundColor: theme.colors.header,
          color: theme.colors.cold,
        }}
      >
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>
              <IoIosBeer className="h1"></IoIosBeer>
            </Navbar.Brand>
          </Link>{" "}
          <Nav>
            <Row className="d-flex align-items-center">
              <Col>
                <Link href="/dashboard" passHref>
                  <Nav.Link style={{ color: theme.colors.primary }}>
                    Dashboard
                  </Nav.Link>
                </Link>
              </Col>
              <Col>
                <Link href="/products/list" passHref>
                  <Nav.Link style={{ color: theme.colors.primary }}>
                    Produtos
                  </Nav.Link>
                </Link>
              </Col>
              <Col>
                <Link href="/orders/list" passHref>
                  <Nav.Link style={{ color: theme.colors.primary }}>
                    Pedidos
                  </Nav.Link>
                </Link>
              </Col>
              <Col>
                <Link href="/products/list" passHref>
                  <Nav.Link style={{ color: theme.colors.primary }}>
                    Promoções
                  </Nav.Link>
                </Link>
              </Col>
              <Col>
                <Link href="/users/list" passHref>
                  <Nav.Link style={{ color: theme.colors.primary }}>
                    Usuários
                  </Nav.Link>
                </Link>
              </Col>
              <Col>
                <Link href="/products/list" passHref>
                  <Nav.Link style={{ color: theme.colors.primary }}>
                    Configurações
                  </Nav.Link>
                </Link>
              </Col>
              {/* <Col className="m-auto">
                <Link href="/login" passHref>
                  <Nav.Link>
                    <Button
                      className="p-3 mb-2"
                      variant="outline-warning bg-white rounded-pill"
                    >
                      Entrar
                    </Button>{" "}
                  </Nav.Link>
                </Link>{" "}
              </Col> */}
            </Row>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavMenu;
