import { collectAssets } from "next/dist/build/webpack/plugins/middleware-plugin";
import { Button } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
type Props = {
  title: string;
  icon?: string;
  disabled?: boolean;
};
import { IoIosAdd, IoIosBeer } from "react-icons/io";
import { useTheme } from "styled-components";

export const SubmitButton: React.FC<Props> = ({ title, disabled }: Props) => {
  const theme = useTheme();
  return (
    <>
      <Button
        style={{
          color: theme.colors.text,
          fontSize: "15px",
          padding: "10px",
          backgroundColor: theme.colors.primary,
          borderColor: theme.colors.border,
          margin: 5,
          fontWeight: 400,
        }}
        type="submit"
        disabled={disabled}
      >
        {title}
      </Button>
    </>
  );
};
