import { Col } from "react-bootstrap";
import styled, { useTheme } from "styled-components";

const CardCol = styled.div`
  margin-top: 10px;
  z-index: 10;
  padding: 25px;
  max-width: 400px;
  min-width: 300px;
  min-height: 200px;
  color: ${({ theme }) => theme.colors.text};
`;

const CardTitle = styled.span`
  font-size: 16px;
  word-wrap: break-word;
  //color: ${({ theme }) => theme.colors.section_title};
  color: "white";
`;

export { CardCol, CardTitle };
