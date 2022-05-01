import { Button, Col, Row } from "react-bootstrap";
import { CategoryButton } from "./CategoryButton";
type Props = {
  title?: string;
  children?: JSX.Element;
};

export const MenuCategory: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Row className="m-4 justify-content-center">
        <Col className="m-0" sm={1}>
          <CategoryButton title="cervejas"></CategoryButton>
        </Col>
        <Col className="m-0" sm={1}>
          <CategoryButton title="cervejas"></CategoryButton>
        </Col>
      </Row>
    </>
  );
};
