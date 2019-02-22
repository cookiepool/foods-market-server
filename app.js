const express = require("express");
const mongoose = require("mongoose");

var app = express();

app.listen(3000, ()=>{
  console.log("the server is running!");
});

app.get("/index", (req, res)=>{
  res.send("hello");
  mongoose.connect("mongodb://localhost/footmarket");
});

console.log(__dirname);
console.log(__filename);
