const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "cruddb",
});

db.connect((err) => {
  if (err) throw err;
  console.log(`Databese connected`);
});

module.exports = db;
