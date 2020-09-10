import React from "react";

let proTips = [
  "Practice slowly at first, NO even slower than that",
  "Small chunks are better than big chunks",
  "Tone quality over EVERYTHING",
  "A right note at the wrong time is a WRONG note",
  "How's your posture?",
  "How's your hand position?",
  "DO NOT STOP, if you have to stop, do the next rep slower",
  "You are definitely using a metronome, RIGHT?!?!",
];

export default function ProTips() {
  return <div>{proTips[Math.floor(Math.random() * proTips.length)]}</div>;
}
