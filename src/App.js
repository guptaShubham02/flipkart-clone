import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/CheckOut/CheckOut";
import Filter from "./components/Filter/Filter";
import Electronics from "./components/Products/Product/Collection/Electronics";
import Mobiles from "./components/Products/Product/Collection/Mobiles";
import Jwellery from "./components/Products/Product/Collection/Jwellery";
import Men from "./components/Products/Product/Collection/Men";
import Women from "./components/Products/Product/Collection/Womens";
import ProductInformation from "./components/Cart/ProductInformation/ProductInformation";
import Footer from "./components/Footer/Footer";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [cart, setCart] = useState([]);
  const [productInformation, setProductInformation] = useState();
  const [showProductInformation, setShowProductInformation] = useState(false);
  const [topOffers, setTopOffers] = useState(true);
  const [electronics, setElectronics] = useState(false);
  const [mobiles, setMobiles] = useState(false);
  const [jwellery, setJwellery] = useState(false);
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");

  const addToCartHandler = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const ProductInformationHandler = (item) => {
    setProductInformation(item);
    setShowProductInformation(true);
    setWomen(true);
    setMen(false);
    setJwellery(false);
    setMobiles(false);
    setWomen(false);
    setTopOffers(false);
    setElectronics(false);
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
    setShowCheckout(false);
  };

  const showCheckoutHandler = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
    setShowCheckout(false);
  };

  const topOffersHandler = () => {
    setTopOffers(true);
    setElectronics(false);
    setMobiles(false);
    setJwellery(false);
    setMen(false);
    setWomen(false);
    setShowProductInformation(false);
  };

  const homeHandler = () => {
    hideCartHandler();
    topOffersHandler();
    setShowProductInformation(false);
  };

  const electronicsHandler = () => {
    setElectronics(true);
    setTopOffers(false);
    setMobiles(false);
    setJwellery(false);
    setMen(false);
    setWomen(false);
    setShowProductInformation(false);
  };

  const mobilesHandler = () => {
    setMobiles(true);
    setTopOffers(false);
    setElectronics(false);
    setJwellery(false);
    setMen(false);
    setWomen(false);
    setShowProductInformation(false);
  };

  const jwelleryHandler = () => {
    setJwellery(true);
    setMobiles(false);
    setTopOffers(false);
    setElectronics(false);
    setMen(false);
    setWomen(false);
    setShowProductInformation(false);
  };

  const menHandler = () => {
    setMen(true);
    setJwellery(false);
    setMobiles(false);
    setTopOffers(false);
    setElectronics(false);
    setWomen(false);
    setShowProductInformation(false);
  };

  const womenHandler = () => {
    setWomen(true);
    setMen(false);
    setJwellery(false);
    setMobiles(false);
    setTopOffers(false);
    setElectronics(false);
    setShowProductInformation(false);
  };

  return (
    <>
      <Navbar
        cartItem={cart.length}
        showCart={showCartHandler}
        hideCart={homeHandler}
        setSearchFilter={setSearchFilter}
        searchFilter={searchFilter}
        ProductInformationHandler={ProductInformationHandler}
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

      {showCheckout && (
        <CheckOut onClose={hideCartHandler} onBack={showCartHandler} />
      )}
      <Filter
        topOffersHandler={topOffersHandler}
        electronicsHandler={electronicsHandler}
        menHandler={menHandler}
        womenHandler={womenHandler}
        jwelleryHandler={jwelleryHandler}
        mobilesHandler={mobilesHandler}
      />
      {showProductInformation && (
        <ProductInformation
          productInformation={productInformation}
          onClick={addToCartHandler}
          homeHandler={homeHandler}
        />
      )}
      {topOffers && (
        <Products
          onClick={addToCartHandler}
          electronicsHandler={electronicsHandler}
          menHandler={menHandler}
          womenHandler={womenHandler}
          jwelleryHandler={jwelleryHandler}
          mobilesHandler={mobilesHandler}
          ProductInformationHandler={ProductInformationHandler}
        />
      )}
      {electronics && (
        <Electronics
          onClick={addToCartHandler}
          ProductInformationHandler={ProductInformationHandler}
        />
      )}
      {mobiles && (
        <Mobiles
          onClick={addToCartHandler}
          ProductInformationHandler={ProductInformationHandler}
        />
      )}
      {jwellery && (
        <Jwellery
          onClick={addToCartHandler}
          ProductInformationHandler={ProductInformationHandler}
        />
      )}
      {men && (
        <Men
          onClick={addToCartHandler}
          ProductInformationHandler={ProductInformationHandler}
        />
      )}
      {women && (
        <Women
          onClick={addToCartHandler}
          ProductInformationHandler={ProductInformationHandler}
          searchFilter={searchFilter}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
