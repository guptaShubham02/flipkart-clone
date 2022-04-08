import { Home, ShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Container, Grid, IconButton } from "@mui/material";
import classes from "./Navbar.module.css";
import React from "react";

const Navbar = ({ cartItem, showCart, hideCart }) => {
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

  return (
    <>
      <Box pb={2} pt={1} className="navbar">
        <Container>
          <Grid container justifyContent="space-between">
            <Button item onClick={hideCart} >
              <Home sx={{fontSize:'2rem'}} />
            </Button>
            <Button item onClick={showCart}>
              <ShoppingCartOutlined />
              cart
              {cartIsFill}
            </Button>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
