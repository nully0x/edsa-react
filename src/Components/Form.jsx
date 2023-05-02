import React, { useState } from "react";
export default function Form(props) {
  const [userName, setUsername] = useState("");
  const [userDetails, setUserDetails] = useState("");
  

  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleUserDetailsChange = (e) => {
    setUserDetails(e.target.value);
  };
  return (
    <div>
      <form >
        <input
          type="text"
          name="username"
          value={userName}
          onChange={handleChange}
        />
        <p>Username is: {userName}</p>
        <textarea
          name="userdetails"
          cols="30"
          row="10"
          value={userDetails}
          onChange={handleUserDetailsChange}
        ></textarea>
        <p>User details are: {userDetails}</p>
      </form>
    </div>
  );
}
