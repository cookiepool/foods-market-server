/***使用官方的mongodb驱动node-mongodb-native来操作数据库***/
//引入mongodb模块
var mongodbClient = require("mongodb").MongoClient;
//连接地址
var url = "mongodb://127.0.0.1:27017";
//数据库名
var dbName = "food_market";
//封装一个函数并导出
var operateDatabase = function(arg){
  //保存结果
  var finalResult = [];
  mongodbClient.connect(url, { useNewUrlParser: true }, function(err, client){
    //有错误就抛出错误
    if(err) throw err;
    var db = client.db(dbName);
    db.collection(arg).find({}).toArray(function(err, result){
      if(err) throw err;
      finalResult = result;
      console.log(result);
    })
    client.close();
  });
  console.log(finalResult);
  return finalResult;
}

module.exports = {mongodbClient, url, dbName};