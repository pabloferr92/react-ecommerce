import { collectAssets } from "next/dist/build/webpack/plugins/middleware-plugin";
import { Button } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
type Props = {
  title?: string;
  icon?: string;
};
import { IoIosBeer } from "react-icons/io";
import { useTheme } from "styled-components";

export const EditButton: React.FC<Props> = () => {
  const theme = useTheme();
  return (
    <>
      <Button
        style={{
          color: theme.colors.primary,
          fontSize: "25px",
          padding: 0,
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.border,
          margin: 5,
          fontWeight: 400,
        }}
        className="p-1"
      >
        <AiOutlineEdit></AiOutlineEdit>
      </Button>
    </>
  );
};
