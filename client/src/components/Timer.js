import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function Timer(props) {
  return (
    <div>
      <h2>Select time on task</h2>
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Time</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={props.timer}
          onChange={props.handleTimerChange}
          label="Age"
        >
          <MenuItem value={1}>One Minute</MenuItem>
          <MenuItem value={10}>Ten Minutes</MenuItem>
          <MenuItem value={20}>Twenty Minutes</MenuItem>
          <MenuItem value={30}>Thirty Minutes</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
