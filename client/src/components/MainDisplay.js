import React, { useState } from "react";
import Controller from "./Controller";
import TimeDisplay from "./TimeDisplay";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function MainDisplay(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const submitScore = () => {
    let id = props.userID;
    let score = props.score;

    fetch(`http://localhost:5000/api/score/${id}/${score}`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Results:</h2>
      <p>Time: {props.elapsed}</p>
      <p>Score: {props.score}</p>
      <Modal />
      <button id="submitScore" onClick={submitScore}>
        Submit Score
      </button>
    </div>
  );

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
        handleOpen={props.handleOpen}
        handleClose={props.handleClose}
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
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
