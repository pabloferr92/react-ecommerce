import { Col } from "react-bootstrap";
import styled, { useTheme } from "styled-components";

const CardCol = styled.div`
  margin-top: 10px;
  width: "50%";
  z-index: 10;
  padding: 25px;
  max-width: 400px;
  min-height: 200px;
  /* color: ${({ theme }) => theme.colors.text}; */
`;

const CardTitle = styled.span`
  font-size: 16px;
  word-wrap: break-word;
  //color: ${({ theme }) => theme.colors};
  color: "black";
`;

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

export { CardCol, CardTitle, FooterDiv };
