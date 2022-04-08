import React from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  CardActions,
} from "@mui/material";
import classes from "./Product.module.css";
import { ShoppingCartCheckout } from "@mui/icons-material";
import jsonData from "../../../db.json";

const Product = (props) => {
  return (
    <>
      {jsonData.map((item) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} className={classes.productBox}>
            <Card
              varient="outlined"
              sx={{
                height: 450,
                marginBottom: "20px",
                backgroundColor: "#2874f012",
              }}
            >
              <CardMedia image={item.image} className={classes.productImage} />
              <CardContent>
                <div>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography gutterBottom variant="h6" component="h2">
                        {item.title.slice(0, 55)}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <Typography variant="p" color="#4d5046">
                  {item.description.slice(0, 60)}...{" "}
                  <span style={{ cursor: "pointer", color: "#1620d8d4" }}>
                    {" "}
                    Read more
                  </span>
                </Typography>
              </CardContent>
              <CardActions
                sx={{ justifyContent: "space-between", marginTop: "20px" }}
              >
               <CardActions>
               <Typography gutterBottom variant="h5" component="h2" sx={{textDecoration:'line-through', fontSize:'1.2rem'}}>
                  {`$ ${item.price}`}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {`$ ${(item.price - 0.99).toFixed(2)}`}
                </Typography>
               </CardActions>
                <Button
                  aria-label="Add to Cart"
                  endIcon={<ShoppingCartCheckout />}
                  onClick={() => props.onClick(item)}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

export default Product;
