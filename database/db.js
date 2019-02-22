const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/footmarket");
var con = mongoose.connection;

con.on('connected', function(){
  console.log("Database connected successfully");
});

con.on('disconnected', function(){
  console.log("Database connected unsuccessfully");
});

con.on('error', function(){
  console.log("Have a error when connecting database");
});

module.exports = mongon