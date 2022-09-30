import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyle";
const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeaders>
        Products
        <PrimaryButton
          onClick={() => navigate("/admin/products/create-product")}
        >
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
};

export default Products;
