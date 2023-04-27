import { useState } from 'react'
import CurrencySwitcher from "./components/CurrencySwitcher";
import Display from "./components/Display";
import Form from './components/Form';

import './App.css'

const App = () => {
  const [currency, setCurrency] = useState('€');

  const handleChangeCurrency = () => {
    setCurrency(currency === '€' ? '$' : '€');
  };

  return (
    <div>
      <Display currency={currency} />
      <CurrencySwitcher currency={currency} handleChangeCurrency={handleChangeCurrency} />
   <Form />
    </div>
  );
};

export default App;
