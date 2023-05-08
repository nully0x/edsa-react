import { React,useState } from 'react';
import CurrencySwitcher from './Components/CurrencySwitcher';
import Display from './Components/Display';

import './App.css'

function App() {
const [currency, setCurrency] = useState('JPY');

// const handleCurrencyChange = () => {
//   setCurrency(currency === 'JPY' ? 'USD' : 'JPY');
// };

const handleCurrencyChange = () => {
  if (currency === "JPY") {
    setCurrency("USD");
  } else {
    setCurrency("JPY");
  }
};

  return (
    <div>
      <Display currency={currency} />
      <CurrencySwitcher 
      handleChangeCurrency={handleCurrencyChange}
      currency={currency} />
    </div>

  );
  
}

export default App
