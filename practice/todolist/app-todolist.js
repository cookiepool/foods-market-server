var express = require("express");

var todolistController = require("./controllers/todolistController");

var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

todolistController(app);

app.listen(3000);

console.log("server is running!");