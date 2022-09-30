import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { items } = useSelector((state) => state.products);

  const rows =
    items &&
    items.map((item) => {
      return {
        id: item._id,
        imageUrl: item.image.url,
        pName: item.name,
        pDesc: item.desc,
        price: item.price,
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    {
      field: "imageUrl",
      headerName: "Image",
      width: 80,
      renderCell: (params) => {
        return (
          <ImageContainer>
            <img src={params.row.imageUrl} alt="" />
          </ImageContainer>
        );
      },
    },
    { field: "pName", headerName: "Name", width: 130 },
    {
      field: "pDesc",
      headerName: "Description",

      width: 90,
    },
    {
      field: "price",
      headerName: "Price",

      width: 80,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 170,
      renderCell: (params) => {
        return (
            <Actions>
            <Delete>Delete</Delete>
            <View>View</View>

            </Actions>
          
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;

const ImageContainer = styled.div`
  img {
    height: 40px;
  }
`;
const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {

      outline: none;
      padding: 3px 5px;
      color: white;
      border-radius: 3px;
      cursor: pointer;
    }
`;
const Delete = styled.div`
background-color: red;
`
const View = styled.div`
background-color: green;
`
