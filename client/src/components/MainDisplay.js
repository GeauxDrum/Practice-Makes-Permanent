import React, { useState } from "react";
import Controller from "./Controller";
import TimeDisplay from "./TimeDisplay";

export default function MainDisplay(props) {
  // start message shared with controller
  const [startMessage, setStartMessage] = useState("");
  const [controller, setController] = useState("Start");
  // plus/check/minus shared state
  const [plus, setPlus] = useState(0);
  const [check, setCheck] = useState(0);
  const [minus, setMinus] = useState(0);

  const reset = () => {
    props.setIsActive(false);
    setStartMessage("Sesson Ended");
    //launch modal with stats
    setController("Start");
    setPlus(0);
    setCheck(0);
    setMinus(0);
    if (props.timer === 1) {
      props.setTime(60);
    }
    if (props.timer === 10) {
      props.setTime(600);
    }
    if (props.timer === 20) {
      props.setTime(1200);
    }
    if (props.timer === 30) {
      props.setTime(1800);
    }
  };

  return (
    <div className="main-display">
      <Controller
        startMessage={startMessage}
        setStartMessage={setStartMessage}
        controller={controller}
        setController={setController}
        userInput={props.userInput}
        goalInput={props.goalInput}
        timerInput={props.timerInput}
        reset={reset}
        toggleTime={props.toggleTime}
      />
      <TimeDisplay time={props.time} setTime={props.setTime} />
      <h3>Total Reps: {minus + check + plus}</h3>
      <h4>Minus Count: {minus}</h4>
      <button
        onClick={() => {
          setMinus(minus + 1);
        }}
      >
        Minus
      </button>
      <h4>Check Count: {check}</h4>
      <button
        onClick={() => {
          setCheck(check + 1);
        }}
      >
        Check
      </button>
      <h4>Plus Count: {plus}</h4>
      <button
        onClick={() => {
          setPlus(plus + 1);
        }}
      >
        Plus
      </button>
    </div>
  );
}
