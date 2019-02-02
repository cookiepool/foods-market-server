var bodyParser = require("body-parser");

var data = [{item: "sleeping"}, {item: "eatting"}, {item: "coding"}];
var bodyParserTodo = bodyParser.urlencoded({extended: false})

module.exports = function(app){
  app.get("/todo", function(req, res){
    res.render("todo", {todoData: data});
  });

  app.post("/todo", bodyParserTodo, function(req, res){
    data.push(req.body);
    console.log(req.body);
    res.json(req.body);
  });

  app.delete("/todo/:item", function(req, res){
    data = data.filter(function(value){
      return value.item.replace(/ /g, "-") !== req.params.item;
    });
    res.json(data);
  });
}