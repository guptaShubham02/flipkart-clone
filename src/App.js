import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCartHandler = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, quantity) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += quantity;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
    setShowCheckout(false);
  };

  const showCheckoutHandler = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  return (
    <>
      <Navbar
        cartItem={cart.length}
        showCart={showCartHandler}
        hideCart={hideCartHandler}
      />
      {showCart && (
        <Cart
          cart={cart}
          onClose={hideCartHandler}
          add={handleChange}
          setCart={setCart}
          cartItem={cart.length}
          showCheckout={showCheckoutHandler}
        />
      )}

      {showCheckout && <CheckOut onClose={hideCartHandler} />}
      <Products onClick={addToCartHandler} />
    </>
  );
}

export default App;
