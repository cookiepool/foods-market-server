const express = require("express");

var app = express();

app.listen(3000, ()=>{
  console.log("the server is running!");
});

app.get("/index", (req, res)=>{
  res.send("hello");
});

console.log(__dirname);
console.log(__filename);
