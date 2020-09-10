import React, { useState, useEffect } from "react";
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

  // live updating time RENAME THIS CLOCK
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleTimerChange = (e) => {
    setTimer(e.target.value);
    setTimerInput(true);
    if (e.target.value === 1) {
      setTime(60);
    }
    if (e.target.value === 10) {
      setTime(600);
    }
    if (e.target.value === 20) {
      setTime(1200);
    }
    if (e.target.value === 30) {
      setTime(1800);
    }
  };

  const toggleTime = () => {
    setIsActive(!isActive);
  };

  const launchResults = () => {
    console.log("RESULTS!");
  };

  useEffect(() => {
    let interval = null;
    if (isActive && time === 0) {
      launchResults();
      toggleTime();
    }
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

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
        handleTimerChange={handleTimerChange}
      />
      <MainDisplay
        time={time}
        timer={timer}
        setTime={setTime}
        userInput={userInput}
        goalInput={goalInput}
        timerInput={timerInput}
        setIsActive={setIsActive}
        toggleTime={toggleTime}
      />
      <ProTips />
    </div>
  );
}
