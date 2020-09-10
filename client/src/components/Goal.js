import React, { useState } from "react";

export default function Goal(props) {
  const [goal, setGoal] = useState("");
  const [statedGoal, setStatedGoal] = useState(
    "Please state your practice goal"
  );

  // make a function that sets input to true
  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const handleGoalSubmit = (e) => {
    e.preventDefault();
    if (goal) {
      console.log(`${goal} submitted`);
      setGoal("");
      setStatedGoal(`By the end of this session, I will ${goal}`);
      props.setGoalInput(true);
    }
  };

  return (
    <div>
      <h2>{statedGoal}</h2>
      <form onSubmit={handleGoalSubmit}>
        <input
          placeholder="practice goal"
          type="text"
          value={goal}
          onChange={handleGoalChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
