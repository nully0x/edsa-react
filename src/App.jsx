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
  // const [currency, setCurrency] = useState("EUR");

  // const handleCurrencyChange = () => {
  //   //TODO: using traditional if else statement determine the new currency
  //   setCurrency(currency === "EUR" ? "USD" : "EUR");
  // };

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
