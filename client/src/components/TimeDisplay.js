import React from "react";
import moment from "moment";
moment().format();

function msToTime(s) {
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;

  return (
    mins.toString().padStart(2, "0") + ":" + secs.toString().padStart(2, "0")
  );
}

export default function TimeDisplay(props) {
  let duration = msToTime(props.time);
  return (
    <div>
      <h1>{duration}</h1>
    </div>
  );
}
