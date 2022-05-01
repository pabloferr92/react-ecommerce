import { Button, Card } from "react-bootstrap";
type Props = {
  title: string;
  description?: string;
  imageUrl?: string;
};

export const ProductCard: React.FC<Props> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <>
      <Card style={{ width: "10rem" }} className="m-3 p-0">
        <Card.Img
          className="m-0 p-0 w-100"
          variant="top"
          src="/assets/images/beers/heineken.jpg"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Preço: R$ 5,00.</Card.Text>
        </Card.Body>
      </Card>{" "}
    </>
  );
};
