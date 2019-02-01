const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");

function startServer(route, handle){
  /***测试路由部分***/
  /*var onRequest = function(request, response){
    console.log("request received " + request.url);
    route(handle, request.url, response);
  }

  var server = http.createServer(onRequest);
  server.listen(5000);
  console.log("running");*/

  /****测试****/
  var onRequest = function(req, res){
    console.log("start");
    var urlObj = url.parse(req.url, true);
    res.write(JSON.stringify(urlObj));

    console.log(req.params); //undefined
    console.log(req.query); //undefined
    console.log(req.url.query); //undefined
    console.log(req.url);

    res.end();
  }

  var server = http.createServer(onRequest);
  server.listen(5000);
  console.log("running");
}


module.exports.startServer = startServer;