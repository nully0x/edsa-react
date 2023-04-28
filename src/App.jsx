import { React, useState } from "react";
import CurrencySwitcher from "./Components/CurrencySwitcher";
import Display from "./Components/Display";

import "./App.css";

function App() {
  const [currency, setCurrency] = useState("Naira");

  function ChangeMe (curr) {   
  if (curr == "Naira") {
    return "Ponds"
    
  } else { 
    return "Naira"
    
  }
}
    const handleCurrencyChange = (event) =>{setCurrency(ChangeMe(currency));
    };
    return(
        <div>
            <Display currency ={currency} />
            <CurrencySwitcher
            handleChangeCurrency={handleCurrencyChange}
            currency={currency} />
        </div>
  
    );
  
  }
  
  export default App;

