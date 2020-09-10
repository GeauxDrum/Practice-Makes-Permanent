const mysql = require("mysql");
const mysqlConfig = require("./sqlConfig.js");

const connection = mysql.createConnection(mysqlConfig);

const getUser = (name, callback) => {
  connection.query(
    `SELECT * from musicians where name = ?`,
    [name],
    (err, results) => {
      if (err) {
        console.log("PROBLEM WITH getHistory");
        callback(err, null);
      } else {
        if (results === []) {
          callback(null, results);
        } else {
          connection.query(
            `INSERT into musicians (name) VALUES (?)`,
            [name],
            (err, results) => {
              if (err) {
                console.log("PROBLEM INSERTING NAME");
                callback(err, null);
              } else {
                callback(null, results);
              }
            }
          );
        }
      }
    }
  );
};

const getHistory = (id, callback) => {
  connection.query(
    `SELECT * from practice_sessions where musician_id = ?`,
    [id],
    (err, results) => {
      if (err) {
        console.log("PROBLEM WITH DB getHistory");
        callback(err, null);
      } else {
        callback(null, results);
      }
    }
  );
};

module.exports = {
  getUser,
  getHistory,
};
