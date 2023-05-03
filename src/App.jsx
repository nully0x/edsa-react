import { React, useState } from 'react'
import Display from './Components/Display';
import CurrencySwitcher from './Components/CurrencySwitcher';
import Form from './Components/Form';
import './App.css'

function App(props) 
{  const [currency, setCurrency] = useState("EUR");
  const handleCurrencyChange = (event) => {
       if (currency === "USSD") {
        setCurrency ("NAIRA");
      } else {
        setCurrency("USSD")
      }
    
    // setCurrency(currency === "EUR" ? "USSD" : "NAIRA");
  };
  return (
    <div>
      <Display currency={currency} />
      <CurrencySwitcher handleChangeCurrency={handleCurrencyChange} currency={currency} />
      <Form />
    </div>
  );
}
export default App
