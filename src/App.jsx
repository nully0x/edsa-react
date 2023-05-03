import {React,useState } from "react";
import CurrencySwitcher from "./Component/CurrencySwitcher";
import Display from "./Component/Display";

import "./App.css";

function App() {
  const [currency, setCurrency] = useState("EUR");

  const handleCurrencyChange = () => {
    if (currency === "EUR") {
      setCurrency("USD");
    } else {
      setCurrency("EUR");
    }
  };
  
  return (
  <div>
    <Display currency= {currency} />
    <CurrencySwitcher
      handleChangeCurrency={handleCurrencyChange}
      currency={currency}
       />
  </div>
  );
}

export default App;
