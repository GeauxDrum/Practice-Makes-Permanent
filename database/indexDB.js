const mysql = require("mysql");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

const getHistory = (name, callback) => {
  connection.query(``, (err, results) => {
    if (err) {
      console.log("PROBLEM WITH getHistory");
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
