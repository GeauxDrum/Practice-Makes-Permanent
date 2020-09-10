import React, { useState } from "react";
import moment from "moment";
moment().format();
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  return {
    top: "30%",
    left: "30%",
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

export default function History(props) {
  const [history, setHistory] = useState([]);
  const [warning, setWarning] = useState("");
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {history.map((session, i) => {
        return (
          <h3 key={i}>
            Score: {session.score} <br></br>Date:{" "}
            {moment(session.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a")}
          </h3>
        );
      })}
      <Modal />
    </div>
  );

  const getHistory = () => {
    fetch(`http://localhost:5000/api/history/${props.userID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHistory(data);
        handleOpen();
      });
  };

  return (
    <div id="history">
      <button onClick={getHistory}>History</button>
      {/* {history.map((session, i) => {
        return (
          <h3 key={i}>
            Score: {session.score} <br></br>Date:{" "}
            {moment(session.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a")}
          </h3>
        );
      })} */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
