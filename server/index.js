const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const db = require("../database/indexDB");
const path = require("path");

//requirements

// use
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/public")));

// server routing
app.get("/api/users/:name", (req, res) => {
  let name = req.params.name;
  db.getUser(name, (err, data) => {
    if (err) {
      console.log("PROBLEM WITH SERVER getHistory");
      res.status(500);
    } else {
      res.send(data);
    }
  });
});

app.get("/api/ids/:id", (req, res) => {
  let id = req.params.id;
  db.getHistory(id, (err, data) => {
    if (err) {
      console.log("PROBLEM WITH SERVER getHistory");
      res.status(500);
    } else {
      res.send(data);
    }
  });
});

app.post("/api/:id", (req, res) => {
  let id = req.params.id;
  db.getHistory(id, (err, data) => {
    if (err) {
      console.log("PROBLEM WITH SERVER getHistory");
      res.status(500);
    } else {
      res.send(data);
    }
  });
});

// listening
app.listen(port, () => {
  console.log(`Champagne MVP listening at ${port}`);
});
