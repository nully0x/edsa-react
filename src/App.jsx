import { React, useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import CurrencySwitcher from "./Components/CurrencySwitcher";
import Display from "./Components/Display";
import Home from "./Components/Home";
import Form from "./Components/Form";
import JokesApi from "./Components/JokeApi";
import Register from "./Components/Register";
import Login from "./Components/Login";
import ApiMeaning from "./Components/ApiMeaning";

import "./App.css";

function App() {
  const [logout, setLogout] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [currency, setCurrency] = useState("EUR");

  // const handleCurrencyChange = () => {
  //   //TODO: using traditional if else statement determine the new currency
  //   setCurrency(currency === "EUR" ? "USD" : "EUR");
  // };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLogout(true);
  };

  const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
      isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />  
    )} />
  )

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="form">Form</Link>
        <Link to="jokes-api">Jokes</Link>
        <Link to="register">Register</Link>
        <Link to="api-meaning">Api Meaning</Link>
        <li>{isLoggedIn ? (<button onClick={handleLogout}>Logout</button>) : <Link  to="/login">Login</Link>}</li>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="jokes-api" element={<JokesApi />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <PrivateRoute path="api-meaning" element={<ApiMeaning />} />
      </Routes>
    </>
  );
}

export default App;
