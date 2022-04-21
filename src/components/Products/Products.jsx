import React from "react";

import { Grid } from "@mui/material";
import Product from "./Product/Product";

const Products = (props) => {
  return (
    <>
      <Grid container justify="center" mt={5} px={2}>
        <Product
          onClick={props.onClick}
          womenHandler={props.womenHandler}
          electronicsHandler={props.electronicsHandler}
          menHandler={props.menHandler}
          jwelleryHandler={props.jwelleryHandler}
          mobilesHandler={props.mobilesHandler}
          ProductInformationHandler={props.ProductInformationHandler}
        />
      </Grid>
    </>
  );
};

export default Products;
