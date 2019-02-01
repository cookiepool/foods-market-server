var express = require("express");
var url = require("url");
var querystring = require("querystring");

var app = express();

app.get("/test", function(req, res){
  res.send("Hello express");
  console.log(req.url);
  console.log(url.parse(req.url, true).query);
  console.log(querystring.parse(url.parse(req.url).query));
  console.log(req.query);
});

app.listen(3000);
console.log("server is running!");
/*
http://expressjs.com/en/guide/using-middleware.html

http://expressjs.com/en/starter/static-files.html

http://expressjs.com/en/guide/writing-middleware.html

https://www.jianshu.com/p/797a4e38fe77 Express中间件的原理及实现
*/