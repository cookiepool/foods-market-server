const server = require("./server");
const route = require("./route");
const handler = require("./handler");

var handleList = {};
handleList["/"] = handler.home;
handleList["/home"] = handler.home;
handleList["/review"] = handler.review;
handleList["/api/v1/records"] = handler.api_records;

server.startServer(route.route, handleList);