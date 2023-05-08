import { React, useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import CurrencySwitcher from "./Components/CurrencySwitcher";
import Display from "./Components/Display";
import Home from "./Components/Home";
import Form from "./Components/Form";

import "./App.css";

function App() {
  const [currency, setCurrency] = useState("EUR");

  const handleCurrencyChange = () => {
  //   //TODO: using traditional if else statement determine the new currency
  //   setCurrency(currency === "EUR" ? "USD" : "EUR");

  if (currency === "₤") {
    setCurrency("$")
  } else if (currency === "$") {
    setCurrency("₦")
  } else{
    setCurrency("₤")
  }
  };

  return (
    <>
    <Display currency={currency} />
    <CurrencySwitcher handleChangeCurrency={handleCurrencyChange} currency={currency}/>
    </>
  );
}

export default App;
