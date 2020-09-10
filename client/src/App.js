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

  // start message shared with controller
  const [startMessage, setStartMessage] = useState("");
  const [controller, setController] = useState("Start");

  // plus/check/minus shared state
  const [plus, setPlus] = useState(0);
  const [check, setCheck] = useState(0);
  const [minus, setMinus] = useState(0);

  // userID for future get and post requests
  const [userID, setUserID] = useState("");

  const getUserID = (name) => {
    fetch(`http://localhost:5000/api/users/${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertId) {
          setUserID(data.insertId);
        } else {
          setUserID(data[0].id);
        }
      });
  };

  // time functions
  const handleTimerChange = (e) => {
    setTimer(e.target.value);
    setTimerInput(true);
    if (e.target.value === 1) {
      setTime(6);
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
  const msToTime = (s) => {
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    return (
      mins.toString().padStart(2, "0") + ":" + secs.toString().padStart(2, "0")
    );
  };

  //modal stuff
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //result handlers
  const [elapsed, setElapsed] = useState("");
  const [score, setScore] = useState("");

  const launchResults = () => {
    console.log("timer", timer * 60, "time", time);
    let timeRemaining = msToTime(timer * 60 - time);
    let totalReps = plus + check + minus;
    let score = plus - minus;
    if (score < 1) {
      score = 1;
    }
    let finalScore = score * totalReps;
    let results = `RESULTS:
    TOTAL TIME: ${timeRemaining}
    SCORE: ${finalScore}`;
    setElapsed(timeRemaining);
    setScore(finalScore);
    console.log(results);
    handleOpen();
  };

  // reset condion afer "end session" or zero on the clock
  const reset = () => {
    setIsActive(false);
    launchResults();
    setStartMessage("Sesson Ended");
    //launch modal with stats
    setController("Start");
    setPlus(0);
    setCheck(0);
    setMinus(0);
    if (timer === 1) {
      setTime(6);
    }
    if (timer === 10) {
      setTime(600);
    }
    if (timer === 20) {
      setTime(1200);
    }
    if (timer === 30) {
      setTime(1800);
    }
  };

  //countdown function
  useEffect(() => {
    let interval = null;
    if (isActive && time === 0) {
      // launchResults();
      // toggleTime();
      reset();
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
    <div className="page">
      <h1 id="title">Practice Makes Permanent</h1>
      <Login setUserInput={setUserInput} getUserID={getUserID} />
      <History userID={userID} />
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
        //timer={timer}
        setTime={setTime}
        userInput={userInput}
        goalInput={goalInput}
        timerInput={timerInput}
        setIsActive={setIsActive}
        toggleTime={toggleTime}
        plus={plus}
        setPlus={setPlus}
        check={check}
        setCheck={setCheck}
        minus={minus}
        setMinus={setMinus}
        msToTime={msToTime}
        launchResults={launchResults}
        reset={reset}
        startMessage={startMessage}
        setStartMessage={setStartMessage}
        controller={controller}
        setController={setController}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        elapsed={elapsed}
        score={score}
        userID={userID}
      />
      <ProTips />
    </div>
  );
}
