import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      Products
      <button onClick={() => navigate("/admin/products/create-product")}>
        Create
      </button>
      <Outlet />
    </>
  );
};

export default Products;