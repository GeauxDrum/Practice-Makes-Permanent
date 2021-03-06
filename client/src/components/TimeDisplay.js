import React from "react";

export default function TimeDisplay(props) {
  let duration = props.msToTime(props.time);
  return (
    <div id="timeDisplay">
      <h1>{duration}</h1>
    </div>
  );
}
