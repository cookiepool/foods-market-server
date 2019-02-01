var express = require("express");

var app = express();

var indexRoute = require("./routes/index");
var userRoute = require("./routes/user");

app.use("/", indexRoute);
app.use("/user", userRoute);

app.listen(3000);
console.dir("server is running!");