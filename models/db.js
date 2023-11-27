const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// Create a connection to the database without db.config
// const connection = mysql.createConnection({
//   Host: 'database-1.ccmd6j6rmnku.us-east-1.rds.amazonaws.com',
//   user: 'admin',
//   password: 'password',
//   database: 'Adem_Mcharek',
//   port: '3306',
// });


// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
