import { React, useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import CurrencySwitcher from "./Components/CurrencySwitcher";
import Display from "./Components/Display";
import Home from "./Components/Home";
import Form from "./Components/Form";
import JokesApi from "./Components/JokeApi";
import ApiMeaning from "./Components/ApiMeaning";

import "./App.css";

function App() {
  // my traditional if/else condition
  //   const [currency, setCurrency] = useState("Naira");
  //   function ChangeMe (curr) {   
  //   if (curr == "Naira") {
  //     return "Ponds"
      
  //   } else { 
  //     return "Naira"
      
  //   }
  // }
//   const handleCurrencyChange = (event) =>{setCurrency(ChangeMe(currency));
//   };
//   return(
//       <div>
//           <Display currency ={currency} />
//           <CurrencySwitcher
//           handleChangeCurrency={handleCurrencyChange}
//           currency={currency} />
//       </div>

//   );

// }
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="form">Form</Link>
        <Link to="jokes-api">Jokes</Link>
        <Link to="api-meaning">Api Meaning</Link>

      </nav>
      <h1>This is a basic Router Setup
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="jokes-api" element={<JokesApi />} />
        <Route path="api-meaning" element={<ApiMeaning />} />
      </Routes>
    </div>
  );
}

export default App;
