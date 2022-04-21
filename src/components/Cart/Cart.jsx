import React, { useEffect, useState } from "react";
import { Box, Button, Typography, CardMedia, IconButton, Grid } from "@mui/material";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import { AddCircleOutlineSharp, Delete, RemoveCircleOutlineSharp } from "@mui/icons-material";
import cartImg from "../../assest/cart.webp";

const Cart = ({ cart, onClose, add, setCart, cartItem, showCheckout }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * (item.price - 0.99)));
    setTotalPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const cartIsEmpty = !cartItem ? (
    <section className={classes.emptyCart}>
      <img src={cartImg} alt='Home'/>
      <p>Your cart is empty!</p>
      <p>
        <span>Add items to it now.</span>
      </p>
      <Button onClick={onClose} >Shop now</Button>
    </section>
  ) : (
    <section>
      <Box className={classes.mainBox}>
        {cart.map((item) => {
          const { id, title, price, image, amount } = item;

          const disableButton = amount === 1 ? true : false;

          const maxItemButton = amount >= 5 ? true : false;

          return (
            <Grid container px={3} my={4} key={id} className={classes.cartItem}>
              <Grid item lg={2} md={1}>
                <CardMedia
                  image={image}
                  className={classes.productImage}
                />
              </Grid>
              <Grid item lg={5} md={5} className={classes.cartTitle}>{title}</Grid>
              <Grid item lg={5} md={6} className={classes.cartAmount}>
                <div>
                  <IconButton  color="primary"
                    onClick={() => {
                      add(item, -1);
                    }}
                    disabled={disableButton}
                  >
                    <RemoveCircleOutlineSharp/>
                  </IconButton>
                  &nbsp;
                  {amount}&nbsp;
                  <IconButton  color="primary"
                    onClick={() => {
                      add(item, 1);
                    }}
                    disabled={maxItemButton}
                  >
                    <AddCircleOutlineSharp />
                  </IconButton >
                  <IconButton
                    sx={{ color: "#ee3232" }}
                    onClick={() => {
                      handleRemove(id);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </div>
                <div>{`$ ${(amount * (price - 0.99)).toFixed(2)}`}</div>
              </Grid>
            </Grid>
          );
        })}
        <Typography varient="h4" sx={{ textAlign: "right" }} px={5}>
          Total Amount
          <p>$ {totalPrice.toFixed(2)}</p>
        </Typography>
      </Box>
      <Typography varient="div" sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{ background: "#2874F0", margin: "0 15px" }}
          px={2}
          onClick={onClose}
        >
          back
        </Button>
        <Button variant="contained" color="success" sx={{ margin: "0 15px" }} onClick={showCheckout} >
          Process to checkout
        </Button>
      </Typography>
    </section>
  );

  return (
    <Modal onClose={onClose}>
      <h3 className={classes.cartHeading}>
        My Cart {cartItem >= 1 ? <span>({cartItem})</span> : ""}
      </h3>
      {cartIsEmpty}
    </Modal>
  );
};

export default Cart;
