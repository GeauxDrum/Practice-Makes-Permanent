import React, { useState } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const theme = createMuiTheme({
  palette: {
    secondary: green,
  },
});

export default function Controller(props) {
  const classes = useStyles();

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
      <div id="buttons" className={classes.root}>
        <Button variant="contained" color="green" onClick={controllerClick}>
          {props.controller}
        </Button>

        <Button variant="contained" color="primary" onClick={props.reset}>
          End Session
        </Button>
        {/* <button onClick={controllerClick}>{props.controller}</button>
      <button onClick={props.reset}>End Session</button> */}
      </div>
      <div id="startMessage">
        <h1>{props.startMessage}</h1>
      </div>
    </div>
  );
}
