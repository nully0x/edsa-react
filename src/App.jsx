import { React, useState } from "react";
import CurrencySwitcher from "./Components/CurrencySwitcher";
import Display from "./Components/Display";

import "./App.css";

function App() {
  const [currency, setCurrency] = useState("EUR");

  const handleCurrencyChange = () => {
    //TODO: using traditional if else statement determine the new currency
    if (currency === "EUR") {
    setCurrency ("USD") 
  } else {
    setCurrency("EUR")
  };
};
  return (
    <div>
      <Display currency={currency} />
      <CurrencySwitcher
        handleChangeCurrency={handleCurrencyChange}
        currency={currency}
      />
    </div>
  );
}

export default App;


