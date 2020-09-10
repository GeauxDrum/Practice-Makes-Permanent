import React, { useState } from "react";

export default function Controller(props) {
  const controllerClick = (e) => {
    if (!props.userInput) {
      props.setStartMessage("Please input a username");
    }
    if (props.userInput && !props.goalInput) {
      props.setStartMessage("Please fill in a practice goal");
    }
    if (props.userInput && props.goalInput && !props.timerInput) {
      props.setStartMessage("Please select a session length before starting");
    }
    if (props.userInput && props.goalInput && props.timerInput) {
      if (props.controller === "Start") {
        props.setController("Stop");
        props.setStartMessage("Lets Go!");
        props.toggleTime();
      }
      if (props.controller === "Stop") {
        props.setController("Start");
        props.setStartMessage("Session Stopped");
        props.toggleTime();
      }
    }
  };

  return (
    <div>
      <button onClick={controllerClick}>{props.controller}</button>
      <button onClick={props.reset}>End Session</button>
      <h1>{props.startMessage}</h1>
    </div>
  );
}
