var express = require("express");

var userRouter = express.Router();

userRouter.get("/info", function(req, res, next){
  res.send("This is user's information page!");
});

module.exports = userRouter;