import { Home, Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Container, Grid, IconButton } from "@mui/material";
import classes from "./Navbar.module.css";
import React from "react";
import JsonData from "../../db.json";

const Navbar = ({
  cartItem,
  showCart,
  hideCart,
  setSearchFilter,
  searchFilter,
  ProductInformationHandler,
}) => {
  const cartIsFill =
    cartItem <= 0 ? (
      ""
    ) : (
      <IconButton
        className={classes.cartQuantity}
        fontSize="small"
        color="primary"
      >
        {cartItem}
      </IconButton>
    );

  const searchItem = JsonData.filter((val) => {
    if (searchFilter === "") {
      return;
    } else if (val.title.toLowerCase().includes(searchFilter.toLowerCase())) {
      return val;
    }
  });

  const filteredProduct = searchItem.map((item, key) => {
    // if(item.length === 0){
    //   // return <p>No data found!</p>
    // }
    // console.log(Object.getOwnPropertyNames(item).length)

    return (
      <p key={key}>
        <button onClick={() => ProductInformationHandler(item)}>
          <img src={item.image} alt={item.category} />
          <p>
            {item.title.slice(0, 55)}
            <br />
            <span>in {item.category}</span>
          </p>
        </button>
      </p>
    );
  });

  return (
    <>
      <Box pb={2} pt={1} className="navbar">
        <Container>
          <Grid container justifyContent="space-between" alignItems={"center"}>
            <Grid item md={2}>
              <Button onClick={hideCart}>
                <Home sx={{ fontSize: "2rem" }} />
              </Button>
            </Grid>
            <Grid item md={6} style={{ position: "relative" }}>
              <input
                type="search"
                onChange={(e) => {
                  setSearchFilter(e.target.value);
                }}
                placeholder="Search for products..."
              />
              <Search className={classes.searchIcon} />
              <div className={classes.suggestionBox}>{filteredProduct}</div>
            </Grid>
            <Grid item md={2}>
              <Button onClick={showCart}>
                <ShoppingCartOutlined />
                cart
                <sup style={{ top: "-1.2em" }}>{cartIsFill}</sup>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
