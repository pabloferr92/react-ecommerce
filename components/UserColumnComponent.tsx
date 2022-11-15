import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { IUSer } from "../models/User";
import api from "../services/api";
type Props = {
  user: string;
};

export const UserColumnComponent: React.FC<Props> = ({ user }) => {
  const [data, setData] = useState<IUSer>();
  const [loaded, setLoaded] = useState<Boolean>(false);

  useEffect(() => {
    setLoaded(false);
    api.get(`/users/${user}`).then((res) => {
      setData(res.data);
      setLoaded(true);
      console.log("usuário " + JSON.stringify(res.data));
    });
  }, []);

  return (
    <>
      {loaded && data ? (
        <span>{data?.first_name + " " + data?.last_name}</span>
      ) : (
        <span>Usuário</span>
      )}
    </>
  );
};
