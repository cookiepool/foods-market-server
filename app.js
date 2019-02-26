const express = require("express");

var mongodbClient = require("mongodb").MongoClient;
var urlMongo = "mongodb://localhost:27017";

var app = express();

app.listen(3000, ()=>{
  console.log("the server is running!");
});

app.get("/index", (req, res)=>{
  mongodbClient.connect(urlMongo, {useNewUrlParser: true}, function(err, db){
    if(err){
      throw err;
    }
    var dbo = db.db("foodmarket");
    dbo.collection("index_info").find({}).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        console.log(result);
        res.json(result);
        db.close();
    });
  })
});

console.log(__dirname);
console.log(__filename);

//`${ctxStatic}/flow/img/${item.imgSrc}`
// ctxStatic + "/flow/img/" + item.imgSrc