import React from "react";

import classes from "./CheckOut.module.css";
import Modal from "../UI/Modal/Modal";
import { Button } from "@mui/material";

const CheckOut = ({ onClose }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submited");
  };

  return (
    <Modal onClose={onClose}>
      <section className={classes.savedAddress}>Saved Address</section>
      <section className={classes.AddAddress}>
        <div>Add A New Address</div>
        <Button>Use my current location</Button>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="mobile">Mobile No.</label>
          <input type="tel" name="mobile" id="mobile" />
          <label htmlFor="pinCode">Pin Code</label>
          <input type="number" name="pinCode" id="pinCode" />
          <label htmlFor="locality">Locality</label>
          <input type="text" name="locality" id="locality" />
          <label htmlFor="fullAddress">Address (Area and Street)</label>
          <input type="text" name="fullAddress" id="fullAddress" />
          <label htmlFor="state">
            --Select State--
            <select name="state" id="state" className="form-control">
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">
                Dadar and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </label>
          <label htmlFor="landmark">Landmark (Optional)</label>
          <input type="text" name="landmark" id="" />
          <div className={classes.addressType}>
            <p>Address Type</p>
            <label htmlFor="HOME">
              <input type="radio" name="addressType" id="" />
              <span>Home</span>
            </label>
            <label htmlFor="WORK">
              <input type="radio" name="addressType" id="" />
              <span>Work</span>
            </label>
          </div>
          <Button type="submit">Next</Button>
          <Button onClick={onClose}>Back</Button>
        </form>
      </section>
    </Modal>
  );
};

export default CheckOut;
