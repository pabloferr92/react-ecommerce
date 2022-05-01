import NavMenu from "../NavMenu";

type Props = {
  title: string;
  children: JSX.Element;
};

export const DefaultPage: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavMenu></NavMenu>
      {children}
    </>
  );
};
