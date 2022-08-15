import { Box } from "@mui/material";
import React from "react";
import ProductList from "../components/products/ProductList";

const ProductsPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <ProductList />
    </Box>
  );
};

export default ProductsPage;
