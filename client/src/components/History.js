import React, { useState } from "react";
import moment from "moment";
moment().format();

export default function History(props) {
  const [history, setHistory] = useState([]);
  const [warning, setWarning] = useState("");

  const getHistory = () => {
    if (!props.userID) {
      setWarning("Please enter a username");
    } else {
      fetch(`http://localhost:5000/api/history/${props.userID}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setHistory(data);
        });
    }
  };

  return (
    <div>
      <button onClick={getHistory}>History</button>
      {history.map((session, i) => {
        return (
          <h3 key={i}>
            Score: {session.score} <br></br>Date:{" "}
            {moment(session.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a")}
          </h3>
        );
      })}
      <h3>{warning}</h3>
    </div>
  );
}
