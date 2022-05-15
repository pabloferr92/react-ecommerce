import DataTable, { createTheme } from "react-data-table-component";
import type { NextPage } from "next";
import { Button, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { IProduct } from "../models/Product";
import ProductService from "../services/ProductService";
import { AiOutlineEdit } from "react-icons/ai";
import { FcEmptyTrash } from "react-icons/fc";
import { IoPersonAddOutline } from "react-icons/io5";

type CompProps = {
  data: IProduct[];
};

const ProductListComponent = ({ data }: CompProps) => {
  const router = useRouter();

  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
        justifyContent: "center",
        fontSize: "15px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        textAlign: "center",
        justifyContent: "center",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
        textAlign: "center",
        justifyContent: "center",
      },
    },
  };
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
              variant="outline-info"
              onClick={() => {
                router.push(`/users/${row.id}`);
              }}
              className="mr-3"
            >
              <AiOutlineEdit></AiOutlineEdit>
            </Button>
            <Button
              variant="outline-info"
              className="ml-3"
              onClick={() => {
                productService.removeProduct(row.id).then((res) => {
                  router.push("/users");
                });
              }}
            >
              <FcEmptyTrash></FcEmptyTrash>
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <DataTable
        className=""
        columns={columns}
        data={data}
        customStyles={customStyles}
      />
      <Row className="w-100 justify-content-center">
        <Button
          className="w-auto"
          variant="outline-info"
          onClick={() => {
            router.push("/products/create");
          }}
        >
          <IoPersonAddOutline></IoPersonAddOutline>
        </Button>
      </Row>
    </>
  );
};

export default ProductListComponent;
