import { React, useState } from "react";
import CurrencySwitcher from "./Components/CurrencySwitcher";
import Display from "./Components/Display";

import "./App.css";

function App() {
  const [currency, setCurrency] = useState("EUR");

  //TODO: using traditional if else statement determine the new currency
  const handleCurrencyChange = () => {
    let newCurrency;
    if (currency === "₤") {
      newCurrency = "$";
    } else {
      newCurrency = "₤";
    }
    setCurrency(newCurrency);
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


