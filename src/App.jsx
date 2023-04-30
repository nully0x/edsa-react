import { React, useState } from "react"
import CurrencySwitcher from "./components/CurrencySwitcher"
import Form from "./components/forms"
import Display from "./components/display"

import "./App.css";

function App() {

  const [currency, setCurrency] = useState("dollar");

  const handleCurrencyChange = () => {
    if (currency === "dollar") {
      setCurrency("USD");
    } else {
      setCurrency("dollar");
    }
  };
  

  return (
    <div>
      <Display currency={currency} />
      <CurrencySwitcher
        handleChangeCurrency={handleCurrencyChange}
        currency={currency} />
      <Form />
    </div>
  );
}

export default App; 