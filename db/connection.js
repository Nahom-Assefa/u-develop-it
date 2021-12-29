const mysql = require("mysql2");

// connect to database
const db = mysql.createConnection(
    {
      host: "localhost",
      // mysql name
      user: "root",
      // password
      password: "Jadeboor305!",
      database: "election",
    },
    console.log("Connected to the election database.")
  );


  module.exports = db;