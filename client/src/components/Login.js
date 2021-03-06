import React, { useState } from "react";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [welcome, setWelcome] = useState("Please enter a username");

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
      props.getUserID(username);
    }
  };

  return (
    <div id="login">
      <form onSubmit={handleUsernameSubmit} id="loginForm">
        <input
          placeholder="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <h2>{welcome}</h2>
    </div>
  );
}
