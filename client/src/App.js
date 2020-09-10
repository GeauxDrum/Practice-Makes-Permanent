import React, { useState } from "react";
import Login from "./components/Login";
import Goal from "./components/Goal";
import Timer from "./components/Timer";
import History from "./components/History";
import MainDisplay from "./components/MainDisplay";
import ProTips from "./components/ProTips";

export default function App() {
  // form inputs
  const [userInput, setUserInput] = useState(false);
  const [goalInput, setGoalInput] = useState(false);
  const [timerInput, setTimerInput] = useState(false);

  // timer form output
  const [timer, setTimer] = useState("");

  // live updating time
  const [time, setTime] = useState(`0.00"`);

  return (
    <div>
      <h1>Practice Makes Permanent</h1>
      <Login setUserInput={setUserInput} />
      <History />
      <Goal setGoalInput={setGoalInput} />
      <Timer
        timer={timer}
        setTimer={setTimer}
        setTimerInput={setTimerInput}
        setTime={setTime}
      />
      <MainDisplay
        time={time}
        setTime={setTime}
        userInput={userInput}
        goalInput={goalInput}
        timerInput={timerInput}
      />
      <ProTips />
    </div>
  );
}
