const http = require("http");

function startServer(route, handle){
  var onRequest = function(request, response){
    console.log("request received " + request.url);
    route(handle, request.url, response);
  }

  var server = http.createServer(onRequest);
  server.listen(5000);
  console.log("running");
}


module.exports.startServer = startServer;