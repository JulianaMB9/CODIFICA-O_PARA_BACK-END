const mysql = require("mysql");

const sqlConnection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1472",
  database: "db_tarefas",
});

module.exports = sqlConnection;
