const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "shop",
  port: 3306,
});
connection.connect((err) => {
  if (err) throw err;
  console.log("MySQL Database Connected!");
});

module.exports = connection;
