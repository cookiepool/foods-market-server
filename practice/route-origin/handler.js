const fs = require("fs");

function home(response){
  response.writeHead(200, {"Content-Type": "text/html"});
  fs.createReadStream(__dirname + "/index.html", "utf-8").pipe(response);
}

function review(response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  fs.createReadStream(__dirname + "/review.html", "utf-8").pipe(response);
}

function api_records(response){
  response.writeHead(200, {
    "Content-Type": "application/json"
  });
  var obj = {
    name: "coco",
    age: 75,
    sex: "female"
  };
  response.write(JSON.stringify(obj));
  response.end();
}

module.exports = {
  home: home,
  review: review,
  api_records: api_records
}