import DataTable from "react-data-table-component";
import type { NextPage } from "next";
import { Button, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { IProduct } from "../models/Product";
import ProductService from "../services/ProductService";

type CompProps = {
  data: IProduct[];
};

const ProductListComponent = ({ data }: CompProps) => {
  const router = useRouter();

  const productService = new ProductService();

  const columns = [
    {
      name: "Name",
      selector: (row: any) => row.name,
    },
    {
      name: "Description",
      selector: (row: any) => row.description,
    },
    {
      name: "Price",
      selector: (row: any) => row.price,
    },
    {
      name: "Actions",
      cell: (row: IProduct, index: number) => {
        return (
          <>
            <Button
              onClick={() => {
                router.push(`/users/${row.id}`);
              }}
              className="mr-3"
            >
              <i className="bi bi-pencil p-3"></i>
            </Button>
            {/* <Button
              className="ml-3"
              onClick={() => {
                productService.removeUser(row.id).then((res) => {
                  router.push("/users");
                });
              }}
            >
              <i className="bi bi-trash p-3 color-red"></i>
            </Button> */}
          </>
        );
      },
    },
  ];

  return (
    <>
      <DataTable columns={columns} data={data} />
      <Row className="w-100 justify-content-center">
        <Button
          onClick={() => {
            router.push("/users/create-user");
          }}
          className="w-1"
        >
          <i className="bi bi-person-plus"></i>
        </Button>
      </Row>
    </>
  );
};

export default ProductListComponent;
