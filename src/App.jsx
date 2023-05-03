import { React, useState } from "react";
import CurrencySwitcher from "./CurrencySwitcher";
import Display from "./Display";
import './App.css'

const App = () => {
    
  const [currency, setCurrency] = useState("Naira");
  const handleCurrencyChange = (event) =>{
      setCurrency(currency === "Naira" ? "USD" : "Naira")
  };

  return (
      <div>
          <Display currency={currency} />
          <CurrencySwitcher handleChangeCurrency={handleCurrencyChange} currency={currency} />
      </div>
  );
}

export default App;


