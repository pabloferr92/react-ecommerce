import { Button } from "react-bootstrap";
type Props = {
  title: string;
  icon: string;
};
import { IoIosBeer } from "react-icons/io";

export const CategoryButton: React.FC<Props> = ({ title, icon }) => {
  return (
    <>
      <Button className="p-3" variant="outline-warning">
        {title == "cervejas" ? <IoIosBeer></IoIosBeer> : ""}
        {title}
      </Button>{" "}
    </>
  );
};
