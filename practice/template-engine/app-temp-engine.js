var express = require("express");
var url = require("url");
var querystring = require("querystring");

var app = express();

app.set("view engine", "ejs");

app.get("/test", function(req, res){
  //var name = req.params.name;
  var data = {name: "lee", age: 28, sex: "male", hobbie: ["eatting", "palying", "sleeping", "gaming"]};
  res.render('test-page', {data: data});
});

app.listen(3000);
console.log("server is running!");
/*
http://ejs.co/

https://github.com/mde/ejs

http://expressjs.com/zh-cn/guide/using-template-engines.html
*/