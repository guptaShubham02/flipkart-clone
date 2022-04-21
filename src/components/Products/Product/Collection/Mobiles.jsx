import React from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  CardActions,
  Divider,
} from "@mui/material";
import jsonData from "../../../../db.json";
import classes from "../Product.module.css";
import { ShoppingCartCheckout } from "@mui/icons-material";

const Mobiles = (props) => {
  const mobiles = jsonData.filter((cat) => cat.category === "mobiles");

  return (
    <>
      <Grid item md={12} sx={{ background: "white", mx: 2, mb: 7 }}>
        <Typography
          variant="h5"
          sx={{ mt: 2, mb: 3, pl: 2, position: "relative" }}
        >
          Top Mobiles <sup className={classes.discount}>Min. {Math.floor(Math.random()*50)}% OFF</sup>
          <Button
            onClick={props.mobilesHandler}
            variant="contained"
            sx={{ position: "absolute", right: "15px" }}
          >
            View All
          </Button>
        </Typography>
        <Divider sx={{ opacity: "0.1" }} />
        <Grid container mt={3}>
          {mobiles.map((item) => {
            const productTitle =
              item.title.length > 22
                ? `${item.title.slice(0, 22)}...`
                : item.title;

            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={2}
                key={item.id}
                className={classes.productBox}
              >
                <Card
                  onClick={() => props.ProductInformationHandler(item)}
                  varient="outlined"
                  className={classes.productCard}
                  sx={{
                    backgroundColor: "#d2d6dc12;",
                    boxShadow: "none",
                  }}
                >
                  <Grid
                    container
                    sx={{ flexDirection: "column", alignItems: "center" }}
                  >
                    <Grid item>
                      <CardMedia
                        image={item.image}
                        className={classes.productImage}
                      />
                    </Grid>
                    <Grid item>
                      <CardContent className={classes.productTitle}>
                        <Grid container justifyContent="space-between">
                          <Grid item>
                            <Typography gutterBottom>{productTitle}</Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Grid>
                    <Grid item>
                      <CardActions
                        sx={{
                          justifyContent: "space-between",
                          flexDirection: "column",
                        }}
                      >
                        <CardActions>
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="h6"
                            sx={{
                              textDecoration: "line-through",
                              fontSize: "0.9rem",
                            }}
                          >
                            {`$ ${item.price}`}
                          </Typography>{" "}
                          &nbsp;
                          <Typography gutterBottom variant="h6" component="h6">
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
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default Mobiles;
