import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";

const Filter = () => {
  return <>
  <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label='All' />
  </FormGroup>
  </>;
};

export default Filter;
