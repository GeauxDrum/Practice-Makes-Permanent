const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
//const db = require("../database/indexDB");
const path = require("path");

//requirements

// use
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/public")));

// server routing
app.get("/api/products/:id", (req, res) => {});

// listening
app.listen(port, () => {
  console.log(`Champagne MVP listening at ${port}`);
});
