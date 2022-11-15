import { useRouter } from "next/router";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { AddButton } from "../../components/Buttons/AddButton";
import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import { ListTitle } from "../../components/Titles/ListTitle";
import UserListComponent from "../../components/UserListComponent";
import { IUSer } from "../../models/User";
import UserService from "../../services/UserService";
import { ToastContainer, toast } from "react-toastify";

export async function getServerSideProps() {
  const service = new UserService();
  const data = await service.getAll();
  return { props: { data: data.data } };
}

const UserListPage = (props: any) => {
  const [data, setData] = useState<IUSer[]>(props.data);

  const [filtered, setFiltered] = useState(false);

  const handleDataFilter = (filter) => {
    if (filter.target.value.length > 0) {
      const filtered_data = props.data.filter((element) => {
        return element.state.value == filter.target.value;
      });
      setFiltered(true);
      setData(filtered_data);
    } else {
      setFiltered(false);
    }
  };

  const router = useRouter();

  const handleAdd = () => {
    router.push(`/users/create`);
  };

  return (
    <>
      <DefaultPage title="title">
        <>
          <ListTitle title="Usuários"></ListTitle>
          <Form className="justify-content-center w-50 d-flex">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Select
                aria-label="Default select example"
                // defaultValue={data.state}
                defaultChecked={true}
                name="state"
                onChange={handleDataFilter}
              >
                <option defaultChecked value={""}>
                  Escolha uma das opções
                </option>
                <option value="1">Solicitado</option>
                <option value="2">Em Separação</option>
                <option value="3">Encaminhado</option>
                <option value="4">Concluído</option>
              </Form.Select>
              <Form.Text className="text-muted">
                Pesquisar por status!
              </Form.Text>
            </Form.Group>
          </Form>
          <Container className="justify-content-md-center w-100 ">
            <Col className="w-10 border p-5 shadow-lg mb-5 bg-white">
              <Row className="justify-content-end w-100">
                <div onClick={handleAdd}>
                  <AddButton></AddButton>
                </div>
              </Row>
              <UserListComponent
                data={filtered ? data : props.data}
              ></UserListComponent>
            </Col>
          </Container>
        </>
      </DefaultPage>
    </>
  );
};

export default UserListPage;
