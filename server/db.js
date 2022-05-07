var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rajput@123",
  database:"crud"
});


// CREATE DATABASES....

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE crud", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });



con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE user (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,todo VARCHAR(255), category VARCHAR(255),Email_id VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT  KEY, Email_id VARCHAR(255),name VARCHAR(255),url VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});




