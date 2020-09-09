import React from "react";
import Login from "./components/Login";
import Goal from "./components/Goal";
import Timer from "./components/Timer";
import History from "./components/History";
import MainDisplay from "./components/MainDisplay";

export default function App() {
  return (
    <div>
      <Login />
      <History />
      <Goal />
      <Timer />
      <MainDisplay />
    </div>
  );
}
