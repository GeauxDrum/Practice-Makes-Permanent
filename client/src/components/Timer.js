import React, { useState } from "react";

export default function Timer(props) {
  const [timerSummary, setTimerSummary] = useState("Select time on task");

  // upload Material UI dropdown to select time increments

  const handleTimerChange = (e) => {
    props.setTimer(e.target.value);
  };

  const handleTimerSubmit = (e) => {
    e.preventDefault();
    if (props.timer) {
      console.log(`${props.timer} submitted`);
      props.setTimer("");
      setTimerSummary(`This session will be ${props.timer}`);
      props.setTimerInput(true);
      props.setTime(props.timer);
    }
  };

  // make a function that updates input to true
  return (
    <div>
      <h2>{timerSummary}</h2>
      <form onSubmit={handleTimerSubmit}>
        <input
          placeholder="set timer"
          type="text"
          value={props.timer}
          onChange={handleTimerChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
