import DataTable, { createTheme } from "react-data-table-component";
import { useRouter } from "next/router";
import { EditButton } from "./Buttons/EditButton";
import { DeleteButton } from "./Buttons/DeleteButton";
import { IOder } from "../models/Order";
import { IUSer } from "../models/User";
import UserService from "../services/UserService";
import { ToastContainer, toast } from "react-toastify";

type CompProps = {
  data: IUSer[];
};

const UserListComponent = ({ data }: CompProps) => {
  const router = useRouter();

  const userService = new UserService();

  function handleEdit(user: IUSer) {
    router.push(`/users/${user.id}`);
  }

  function handleDelete(user: IUSer) {
    if (user.id != 1) {
      userService.remove(user.id).then((res) => {
        router.push(`/users/list`);
        toast.success("Usuário removido com sucesso");
      });
    } else {
      toast.error("Usuário não pode ser removido!");
    }
  }

  const columns = [
    {
      name: "Id",
      selector: (row: any) => row.id,
      sortable: true,
    },
    {
      name: "Nome",
      selector: (row: IUSer) => row.name || "",
      cell: (row: IUSer) => (
        <span> {row.first_name + " " + row.last_name} </span>
      ),
    },
    {
      name: "E-mail",
      selector: (row: any) => row.email,
    },
    {
      name: "Telefone",
      selector: (row: any) => row.phone,
    },
    {
      name: "Actions",
      cell: (row: IUSer, index: number) => {
        return (
          <>
            <div
              onClick={() => {
                handleEdit(row);
              }}
            >
              <EditButton></EditButton>
            </div>
            <div
              onClick={() => {
                handleDelete(row);
              }}
            >
              <DeleteButton></DeleteButton>
            </div>
          </>
        );
      },
    },
  ];

  return (
    <>
      <DataTable
        className=""
        striped={true}
        pagination={true}
        columns={columns}
        data={data}
        paginationPerPage={10}
      />
      <ToastContainer></ToastContainer>
    </>
  );
};

export default UserListComponent;
