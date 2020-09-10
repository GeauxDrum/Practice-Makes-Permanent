import React, { useState } from "react";
import Controller from "./Controller";
import TimeDisplay from "./TimeDisplay";

export default function MainDisplay(props) {
  // const reset = () => {
  //   props.setIsActive(false);
  //   props.launchResults();
  //   setStartMessage("Sesson Ended");
  //   //launch modal with stats
  //   setController("Start");
  //   props.setPlus(0);
  //   props.setCheck(0);
  //   props.setMinus(0);
  //   if (props.timer === 1) {
  //     props.setTime(6);
  //   }
  //   if (props.timer === 10) {
  //     props.setTime(600);
  //   }
  //   if (props.timer === 20) {
  //     props.setTime(1200);
  //   }
  //   if (props.timer === 30) {
  //     props.setTime(1800);
  //   }
  // };

  return (
    <div className="main-display">
      <Controller
        startMessage={props.startMessage}
        setStartMessage={props.setStartMessage}
        controller={props.controller}
        setController={props.setController}
        userInput={props.userInput}
        goalInput={props.goalInput}
        timerInput={props.timerInput}
        reset={props.reset}
        toggleTime={props.toggleTime}
      />
      <TimeDisplay
        time={props.time}
        setTime={props.setTime}
        msToTime={props.msToTime}
      />
      <h3>Total Reps: {props.minus + props.check + props.plus}</h3>
      <h4>Minus Count: {props.minus}</h4>
      <button
        onClick={() => {
          props.setMinus(props.minus + 1);
        }}
      >
        Minus
      </button>
      <h4>Check Count: {props.check}</h4>
      <button
        onClick={() => {
          props.setCheck(props.check + 1);
        }}
      >
        Check
      </button>
      <h4>Plus Count: {props.plus}</h4>
      <button
        onClick={() => {
          props.setPlus(props.plus + 1);
        }}
      >
        Plus
      </button>
    </div>
  );
}
