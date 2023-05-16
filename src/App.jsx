import { React, useState, useEffect } from "react";
import { Routes, Route, Link, Outlet, NavLink, Navigate } from "react-router-dom";
// import CurrencySwitcher from "./Components/CurrencySwitcher";
// import Display from "./Components/Display";
import Home from "./Components/Home";
import Form from "./Components/Form";
import JokesApi from "./Components/JokeApi";
import Register from "./Components/Register";
import Login from "./Components/Login";
import ApiMeaning from "./Components/ApiMeaning";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);



  const handleLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  const ProtectedRoute = ({path,element}) => {
    return isLoggedIn ? element : <Navigate to="/login" />
  }
    

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="form">Form</Link>
        <Link to="jokes-api">Jokes</Link>
        <Link to="register">Register</Link>
        <Link to="api-meaning">Api Meaning</Link>
        <li>{isLoggedIn ? (<button onClick={handleLogout}>Logout</button>) : <Link  to="login">Login</Link>}</li>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="jokes-api" element={<JokesApi />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={isLoggedIn ? <Navigate to="/"/> : <Login onLogin={handleLogin} />} />
        <Route path="api-meaning" element={<ProtectedRoute path="api-meaning" element={<ApiMeaning />} />} />
      </Routes>
    </div>
  );
}

export default App;
