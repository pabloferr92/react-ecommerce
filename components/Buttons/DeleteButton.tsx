import { Button } from "react-bootstrap";
import { BsTrash2 } from "react-icons/bs";
type Props = {
  title?: string;
  icon?: string;
};
import { useTheme } from "styled-components";

export const DeleteButton: React.FC<Props> = () => {
  const theme = useTheme();
  return (
    <>
      <Button
        style={{
          color: "red",
          fontSize: "25px",
          padding: 0,
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.border,
          margin: 5,
          fontWeight: 400,
        }}
        className="p-1"
      >
        <BsTrash2></BsTrash2>
      </Button>
    </>
  );
};
