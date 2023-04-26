import React, { useState } from 'react';
import Button from './Button'

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div>
      <h1>Perizel Enterprise</h1>
      <h2>Login details</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      {/* <Button text="Login" onClick={() => alert('login successful!')} /> */}
      <Button text = "Login" onClickHandler={props.onClickHandler} ></Button>
    </div>
  );
};

export default Login;
