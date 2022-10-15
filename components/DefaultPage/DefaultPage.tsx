import { ReactNode } from "react";
import NavMenu from "../NavMenu/NavMenu";

type Props = {
  title: string;
  children?: JSX.Element | JSX.Element[];
};

export const DefaultPage: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavMenu></NavMenu>
      {children}
    </>
  );
};
