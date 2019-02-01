var express = require("express");

var app = express();

app.use(express.static("static"));

//自定义中间件
app.use(function(req, res, next){
  console.log("this is first middleware");
  next();
});
app.use(function(req, res, next){
  console.log("this is second middleware");
  next();
})
app.use("/", function(req, res, next){
  res.send("Hello it's me");
});

app.listen(3000);
console.log("server is running!");