import { Bolt, Home } from "@mui/icons-material";
import { Button, Card, CardActions, Grid, Typography } from "@mui/material";
import React from "react";
import Zoom from "react-img-zoom";

const ProductInformation = (props) => {
  const { title, price, description, category, image } =
    props.productInformation;
  return (
    <>
      <Card sx={{ mt: 3, mx: 6 }}>
        <Grid container py={5} px={2}>
          <Grid item lg={5}>
            <Zoom img={image} zoomScale={2} width={600} height={600} />
          </Grid>
          <Grid item lg={7} pt={2}>
            <Typography variant="h5" mb={4}>
              {title}
            </Typography>
            <Typography variant="h6" sx={{ lineHeight: "50px", pr: 8, pb: 3 }}>
              {description}
            </Typography>
            <Typography sx={{ color: "purple" }}>
              {(Math.random()*5).toFixed(1) } Rating{" "}
              {Math.floor(Math.random() * Math.floor(Math.random() * 10000))}{" "}
              Reviews
            </Typography>
            <Typography py={5}>
              <span style={{ fontSize: "2rem" }}>
                ${(price - 0.99).toFixed(2)}
              </span>{" "}
              <span
                style={{
                  textDecoration: "line-through",
                  padding: "0 1rem",
                  color: "#4a4c4cc7",
                }}
              >
                ${price.toFixed(2)}
              </span>{" "}
              <span style={{ color: "#ff223c" }}>
                Hurry only {Math.floor(Math.random() * 10)} left
              </span>
            </Typography>

            <p> Free COD Available. &nbsp; &nbsp; 10 Days Refund Policie.</p>
          </Grid>
        </Grid>
        <CardActions sx={{ justifyContent: "center", mb: 5 }}>
          <Button
            onClick={props.homeHandler}
            variant="contained"
            size="medium"
            sx={{ backgroundColor: "#FF9F00 !important", px: 15, py: 1 }}
            startIcon={<Home />}
          >
            Home
          </Button>
          <Button
            onClick={() => props.onClick(props.productInformation)}
            variant="contained"
            size="medium"
            sx={{ backgroundColor: "#FB641B !important", px: 15, py: 1 }}
            startIcon={<Bolt />}
          >
            BUY NOW
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductInformation;
