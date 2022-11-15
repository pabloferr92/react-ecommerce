import { collectAssets } from "next/dist/build/webpack/plugins/middleware-plugin";
import { Button, Row } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";
import { useTheme } from "styled-components";
type Props = {
  title?: string;
  icon?: string;
};

export const ListTitle: React.FC<Props> = ({ title }: Props) => {
  const theme = useTheme();
  return (
    <>
      <Row className="w-100 mt-5 justify-content-center">
        <div className="w-5 d-flex justify-content-center">
          <span className="h4 text-align-center font-size">{title}</span>
        </div>
      </Row>
    </>
  );
};
