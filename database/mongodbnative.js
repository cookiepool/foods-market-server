/***使用官方的mongodb驱动node-mongodb-native来操作数据库***/
//引入mongodb模块
var mongodbClient = require("mongodb").MongoClient;
//连接地址
var url = "mongodb://127.0.0.1:27017";
//数据库名
var dbName = "food_market";
//导出变量
module.exports = {mongodbClient, url, dbName};