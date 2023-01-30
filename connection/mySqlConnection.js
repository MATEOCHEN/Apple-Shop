const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "my-mysql-steven.mysql.database.azure.com",
  user: "stezen129",
  password: "Aa130217975",
  database: "",
  port: 3306,
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Azure Database Connected!");
});

module.exports = connection;
