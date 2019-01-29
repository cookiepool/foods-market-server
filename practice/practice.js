/***node.js中的事件***/
//const event = require("events");
//const util = rquire("util")

/*var myEmitter = new event.EventEmitter();
myEmitter.on("someEvent", function(msg){
  console.log(msg);
});

myEmitter.emit("someEvent", 'the event was emitted!');*/

/*class Person extends event.EventEmitter{
  constructor(name){
    super();
    this.name = name;
  }
}

var xiaoming = new Person("xiaoming");
var lily = new Person("lily");
var personList = [xiaoming, lily];

personList.forEach(function(item){
  item.on('speak', function(msg){
    console.log(item.name + " said " + msg);
  })
});

xiaoming.emit('speak', "hi");
lily.emit("speak", "hi boya");*/

/***http模块***/
var http = require("http");

/*var server = http.createServer(function(req, res){
  console.log("request reviced");
  res.writeHead(200, {"Content-Type": "application/json"});
  var objTest = {
    name: "li",
    job: "engineer",
    age: 26
  }
  res.write(JSON.stringify(objTest));
  res.end();
});
server.listen(5000);
console.log("running!");*/
