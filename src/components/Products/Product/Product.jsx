import React from "react";

import Crousel from "../../Crousel/Crousel";
import Womens from "./Collection/Womens";
import Men from "./Collection/Men";
import Jwellery from "./Collection/Jwellery";
import Electronics from "./Collection/Electronics";
import Mobiles from "./Collection/Mobiles";

const Product = (props) => {
  return (
    <>
      <Crousel />

      <Womens
        onClick={props.onClick}
        womenHandler={props.womenHandler}
        ProductInformationHandler={props.ProductInformationHandler}
      />

      <Electronics
        onClick={props.onClick}
        electronicsHandler={props.electronicsHandler}
        ProductInformationHandler={props.ProductInformationHandler}
      />

      <Jwellery
        onClick={props.onClick}
        jwelleryHandler={props.jwelleryHandler}
        ProductInformationHandler={props.ProductInformationHandler}
      />

      <Men
        onClick={props.onClick}
        menHandler={props.menHandler}
        ProductInformationHandler={props.ProductInformationHandler}
      />

      <Mobiles
        onClick={props.onClick}
        mobilesHandler={props.mobilesHandler}
        ProductInformationHandler={props.ProductInformationHandler}
      />
    </>
  );
};

export default Product;
