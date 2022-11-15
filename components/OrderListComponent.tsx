import DataTable, { createTheme } from "react-data-table-component";
import { useRouter } from "next/router";
import { IProduct } from "../models/Product";
import ProductService from "../services/ProductService";
import { EditButton } from "./Buttons/EditButton";
import { DeleteButton } from "./Buttons/DeleteButton";
import { IOder } from "../models/Order";
import { UserColumnComponent } from "./UserColumnComponent";

type CompProps = {
  data: IProduct[];
};

const OrderListComponent = ({ data }: CompProps) => {
  const router = useRouter();

  const productService = new ProductService();

  function handleEditOrder(order: IOder) {
    router.push(`/orders/${order.id}`);
  }

  const columns = [
    {
      name: "Nº do Pedido",
      selector: (row: any) => row.id,
      sortable: true,
    },
    {
      name: "Usuário",
      selector: (row: any) => row.user?.name || "",
      // cell: (row: any) => (
      //   <UserColumnComponent user={row.user}></UserColumnComponent>
      // ),
    },
    {
      name: "Estado",
      selector: (row: any) => row.state,
      cell: (row: any) => <div>{row.state.display_value?.toUpperCase()}</div>,
    },
    {
      name: "Data do pedido",
      selector: (row: any) => row.created_at,
      sortable: true,
      cell: (row: any) => (
        <div>{new Date(row.created_at).toLocaleDateString()}</div>
      ),
    },
    {
      name: "Actions",
      cell: (row: IOder, index: number) => {
        return (
          <>
            <div
              onClick={() => {
                handleEditOrder(row);
              }}
            >
              <EditButton></EditButton>
            </div>
            <div
              onClick={() => {
                handleEditOrder(row);
              }}
            >
              <DeleteButton></DeleteButton>
            </div>{" "}
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
        // customStyles={customStyles}
      />
      {/* <Row className="justify-content-center">
        <AddButton></AddButton>
      </Row> */}
    </>
  );
};

export default OrderListComponent;
