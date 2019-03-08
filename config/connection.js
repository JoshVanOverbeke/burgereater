// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSBD_URL);
} else{ 
  connection = mysql.createConnection({
    HOST: "localhost",
    user: "root",
    password: "blue25too284",
    database: "burger_db"
    });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// Export connection for our ORM to use.
module.exports = connection;
