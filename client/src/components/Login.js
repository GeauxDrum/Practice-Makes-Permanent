import React, { useState } from "react";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [welcome, setWelcome] = useState("Please enter a userame");

  // make a function that sets input to true

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (username) {
      console.log(`${username} submitted`);
      setUsername("");
      setWelcome(`Welcome back ${username}`);
      props.setUserInput(true);
    }
  };

  return (
    <div>
      <h2>{welcome}</h2>
      <form onSubmit={handleUsernameSubmit}>
        <input
          placeholder="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
