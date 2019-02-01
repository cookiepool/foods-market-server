
function route(handle, pathName, response){
  console.log("the path name is " + pathName);
  if(typeof handle[pathName] === "function"){
    handle[pathName](response);
  }
  else{
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("404 not found");
    response.end();
  }
}

module.exports.route = route;