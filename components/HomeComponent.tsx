import { Button, Col, Container, Row } from "react-bootstrap";
import { CategoryButton } from "./CategoryButton";
import { ProductCard } from "./ProductCard";
type Props = {
  title?: string;
  children?: JSX.Element;
};

export const HomeComponent: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Container>
        <h3>Cervejas</h3>

        <Row>
          <ProductCard title="Heineken"></ProductCard>
          <ProductCard title="Heineken"></ProductCard>
          <ProductCard title="Heineken"></ProductCard>
          <ProductCard title="Heineken"></ProductCard>
          <ProductCard title="Heineken"></ProductCard>
          <ProductCard title="Heineken"></ProductCard>
          <ProductCard title="Heineken"></ProductCard>
          <ProductCard title="Heineken"></ProductCard>
          <ProductCard title="Heineken"></ProductCard>
          <ProductCard title="Heineken"></ProductCard>
        </Row>
      </Container>
    </>
  );
};
