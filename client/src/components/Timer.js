import React, { useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState("");
  const [timerSummary, setTimerSummary] = useState("Select time on task");

  // upload Material UI dropdown to select time increments

  const handleTimerChange = (e) => {
    setTimer(e.target.value);
  };

  const handleTimerSubmit = (e) => {
    e.preventDefault();
    if (timer) {
      console.log(`${timer} submitted`);
      setTimer("");
      setTimerSummary(`This session will be ${timer}`);
    }
  };

  return (
    <div>
      <h2>{timerSummary}</h2>
      <form onSubmit={handleTimerSubmit}>
        <input
          placeholder="set timer"
          type="text"
          value={timer}
          onChange={handleTimerChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
