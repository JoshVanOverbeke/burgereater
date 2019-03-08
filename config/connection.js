// Set up MySQL connection.
var mysql = require("mysql");

if (process.env.JAWSDB_URL){
    var connection = mysql.createConnection(process.env.JAWSBD_URL);
} else{ 
  var connection = mysql.createConnection({
    HOST: "localhost",
    port: 3306,
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
