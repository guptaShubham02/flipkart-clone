import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Box } from "@mui/material";

import carousal1 from "../../assest/carousal1.webp";
import carousal2 from "../../assest/carousal2.webp";
import carousal3 from "../../assest/carousal3.webp";

const Crousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Box sx={{ px: 5, py: 2 }}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={carousal1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousal2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousal3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </Box>
  );
};

export default Crousel;
