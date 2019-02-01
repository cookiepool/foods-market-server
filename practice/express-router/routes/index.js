var express = require("express");

var indexRouter = express.Router();

indexRouter.get("/", function(req, res, next){
  res.send("This is index page!");
});

module.exports = indexRouter;