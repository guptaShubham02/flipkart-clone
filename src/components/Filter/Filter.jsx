import React from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import "./Filter.css";

import electronics from "../../assest/electronics.webp";
import jwellery from "../../assest/jwellery.webp";
import men from "../../assest/men.webp";
import mobiles from "../../assest/mobiles.webp";
import topOffers from "../../assest/topOffers.webp";
import women from "../../assest/women.webp";

const Filter = (props) => {
  return (
    <>
      <Box sx={{ backgroundColor: "white" }}>
        <Container maxWidth="md">
          <Grid
            container
            className="filterItems"
            sx={{ justifyContent: "space-between" }}
          >
            <Grid item>
              <Button
                onClick={props.topOffersHandler}
                className="filterButton"
                size="small"
                sx={{ flexDirection: "column" }}
              >
                <img src={topOffers} />
                <Typography>Top Offers</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={props.mobilesHandler}
                className="filterButton"
                size="small"
                sx={{ flexDirection: "column" }}
              >
                <img src={mobiles} />
                <Typography>Mobiles</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={props.electronicsHandler}
                className="filterButton"
                size="small"
                sx={{ flexDirection: "column" }}
              >
                <img src={electronics} />
                <Typography>Electronics</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={props.menHandler}
                className="filterButton"
                size="small"
                sx={{ flexDirection: "column" }}
              >
                <img src={men} />
                <Typography>Men's </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={props.womenHandler}
                className="filterButton"
                size="small"
                sx={{ flexDirection: "column" }}
              >
                <img src={women} />
                <Typography>Women's </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={props.jwelleryHandler}
                className="filterButton"
                size="small"
                sx={{ flexDirection: "column" }}
              >
                <img src={jwellery} />
                <Typography>Jwellery</Typography>
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Divider />
      </Box>
    </>
  );
};

export default Filter;
