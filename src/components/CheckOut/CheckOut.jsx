import React, { useEffect, useRef, useState } from "react";

import classes from "./CheckOut.module.css";
import Modal from "../UI/Modal/Modal";
import { Button } from "@mui/material";

const isEmpty = (value) => value.trim() === "";
const isSixChars = (value) => value.trim().length === 6;
const isTenChars = (value) => value.trim().length === 10;

const CheckOut = ({ onClose, onBack }) => {
  //  const [emptyName, setEmptyName] = useState(null);
  // const [emptyMobile, setEmptyMobile] = useState(null);
  // const [emptyPin, setEmptyPin] = useState(null);
  // const [emptyLocality, setEmptyLocality] = useState(null);
  // const [emptyAddress, setEmptyAddress] = useState(null);
  // const [emptyState, setEmptyState] = useState(null);
  const [getLocation, setGetLocation] = useState(null);
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    mobile: true,
    pin: true,
    locality: true,
    address: true,
    state: true,
  });

  useEffect(() => {
    const fetchState = async () => {
      const response = await fetch(
        "https://indian-state-9c7fc-default-rtdb.firebaseio.com/indianstate.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();

      const loadedState = [];

      for (const key in responseData) {
        loadedState.push({
          id: key,
          name: responseData[key].name,
        });
      }

      setState(loadedState);
      setIsLoading(false);
    };

    fetchState().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const getUserGeolocationDetails = () => {
    const params = {
      access_key: "60de003b03a979d45466a8ddf9106b5f",
    };
    fetch("https://api.positionstack.com/v1/reverse", { params })
      //    fetch(
      //   "https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708"
      // )
      .then((response) => response.json())
      .then((data) => setGetLocation(data));
  };

  const nameRef = useRef();
  const mobileRef = useRef();
  const pinRef = useRef();
  const localityRef = useRef();
  const addressRef = useRef();
  const stateRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredMobile = mobileRef.current.value;
    const enteredPin = pinRef.current.value;
    const enteredLocality = localityRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredState = stateRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredLocalityIsValid = !isEmpty(enteredLocality);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredstateIsValid = !isEmpty(enteredState);
    const enteredMoileIsValid = isTenChars(enteredMobile);
    const enteredPinIsValid = isSixChars(enteredPin);

    setFormInputsValidity({
      name: enteredNameIsValid,
      mobile: enteredMoileIsValid,
      pin: enteredPinIsValid,
      locality: enteredLocalityIsValid,
      address: enteredAddressIsValid,
      state: enteredstateIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredLocalityIsValid &&
      enteredAddressIsValid &&
      enteredstateIsValid &&
      enteredMoileIsValid &&
      enteredPinIsValid;

    if (!formIsValid) {
      return;
    }

    // enteredName.trim().length ===0  ? setEmptyName(false) : setEmptyName(true);
    // enteredMobile.trim().length ===10  ? setEmptyMobile(true) : setEmptyMobile(false);
    // enteredPin.trim().length ===6  ? setEmptyPin(true) : setEmptyPin(false);
    // enteredLocality.trim().length ===0  ? setEmptyLocality(false) : setEmptyLocality(true);
    // enteredAddress.trim().length ===0  ? setEmptyAddress(false) : setEmptyAddress(true);
    // enteredState.trim().length ===0  ? setEmptyState(false) : setEmptyState(true);
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const mobileControlClasses = `${classes.control} ${
    formInputsValidity.mobile ? "" : classes.invalid
  }`;
  const pinControlClasses = `${classes.control} ${
    formInputsValidity.pin ? "" : classes.invalid
  }`;
  const localityControlClasses = `${classes.control} ${
    formInputsValidity.locality ? "" : classes.invalid
  }`;
  const addressControlClasses = `${classes.control} ${
    formInputsValidity.address ? "" : classes.invalid
  }`;
  const stateControlClasses = `${classes.control} ${
    formInputsValidity.state ? "" : classes.invalid
  }`;

  if (isLoading) {
    return (
      <Modal onClose={onClose}>
        <section className={classes.loading}>
          <h3 className={classes.loadingErrorH3}>Loading...</h3>
        </section>
      </Modal>
    );
  }

  if (httpError) {
    return (
      <Modal onClose={onClose}>
        <section className={classes.error}>
          <h3 className={classes.loadingErrorH3}>
            {httpError}
            <Button
              onClick={onBack}
              sx={{ display: "block", marginTop: "30px" }}
            >
              Go Back
            </Button>
          </h3>
        </section>
      </Modal>
    );
  }

  const stateList = state.map((st) => (
    <option value={st.name} key={st.id} id={st.id}>
      {st.name}
    </option>
  ));

  console.log(getLocation);

  return (
    <Modal onClose={onClose}>
      <section className={classes.savedAddress}>
        <p>Saved Address</p>
        {/* <p>{getLocation.city}</p>
        <p>{getLocation.country_name}</p>
        <p>{getLocation.postal}</p>
        <p>{getLocation.state}</p> */}
      </section>
      <section className={classes.AddAddress}>
        <div>Add A New Address</div>
        <Button onClick={getUserGeolocationDetails}>
          Use my current location
        </Button>
        <form onSubmit={submitHandler} className={classes.form}>
          <div className={nameControlClasses}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameRef} />
            {!formInputsValidity.name && <p>Please enter your name!</p>}
          </div>
          <div className={mobileControlClasses}>
            <label htmlFor="mobile">Mobile No.</label>
            <input type="tel" name="mobile" id="mobile" ref={mobileRef} />
            {!formInputsValidity.mobile && (
              <p>Mobile number must be 10 digit</p>
            )}
          </div>
          <div className={pinControlClasses}>
            <label htmlFor="pinCode">Pin Code</label>
            <input type="number" name="pinCode" id="pinCode" ref={pinRef} />
            {!formInputsValidity.pin && <p>Please Enter Your 6 digit number</p>}
          </div>
          <div className={localityControlClasses}>
            <label htmlFor="locality">Locality</label>
            <input
              type="text"
              name="locality"
              id="locality"
              ref={localityRef}
            />
            {!formInputsValidity.locality && <p>Please Enter Your Locality</p>}
          </div>
          <div className={addressControlClasses}>
            <label htmlFor="fullAddress">Address (Area and Street)</label>
            <input
              type="text"
              name="fullAddress"
              id="fullAddress"
              ref={addressRef}
            />
            {!formInputsValidity.address && (
              <p>Please Enter Your Full Address</p>
            )}
          </div>
          <div className={stateControlClasses}>
            <label htmlFor="state">
              --Select State--
              <select
                name="state"
                id="state"
                className="form-control"
                ref={stateRef}
              >
                {stateList}
              </select>
            </label>
            {!formInputsValidity.state && <p>Please choose your state</p>}
          </div>
          <div className={classes.control}>
            <label htmlFor="landmark">Landmark (Optional)</label>
            <input type="text" name="landmark" id="" />
          </div>
          <div className={classes.control}>
            <p>Address Type</p>
            <label htmlFor="HOME">
              <input type="radio" name="addressType" />
              <span>Home</span>
            </label>
            <label htmlFor="WORK">
              <input type="radio" name="addressType" />
              <span>Work</span>
            </label>
          </div>
          <div className={classes.action}>
            <Button type="submit" className={classes.submit}>
              Next
            </Button>
            <Button onClick={onBack}>Back</Button>
          </div>
        </form>
      </section>
    </Modal>
  );
};

export default CheckOut;
