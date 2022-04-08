import React from "react";

import { Grid } from "@mui/material";
import Product from "./Product/Product";

const Products = (props) => {
  return (
    <>
      <Grid container justify="center" spacing={4} mt={10} px={2}>
        <Product onClick={props.onClick} />
      </Grid>
    </>
  );
};

export default Products;
