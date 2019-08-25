const express = require("express");
const dbConfig = require("./database/mongodbnative");

var app = express();
app.listen(3000, ()=>{
  console.log("the server is running!, port is 3000");
});

//配置中间件
//用于登陆验证（cookie-session）
var session = require("express-session");
app.use(session({
  secret: "fm_user",
  resave: false,
  saveUninitialized: true,
  cookie: {user: 'default', maxAge: 7*24*60*60*1000}
}));

//跨域中间件
var cors = require("cors");
app.use(cors({
  origin: ["http://localhost:8686", "http://192.168.1.108:8686"],
  credentials: true
}));

//POST请求里面用来解析请求信息的参数。
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//用于cookie的解析
var cookieParser = require("cookie-parser");
app.use(cookieParser());

//用于日志记录
var morgan = require("morgan");
app.use(morgan("dev"));

//GZIP压缩，用于文本压缩，加快传输速度
var compression = require("compression");
app.use(compression());

//用户相关的路由
app.use('/user', require('./route/user.js'));
//主页相关的路由
app.use('/index', require('./route/index.js'));
// 产品相关路由
app.use('/product', require('./route/product.js'));

//mongodb相关的（已废弃）
/**********
app.get('/index', (req, res)=>{
  dbConfig.mongodbClient.connect(dbConfig.url, {useNewUrlParser: true}, function(err, db){
    if(err){
      throw err;
    }
    var dbo = db.db(dbConfig.dbName);
    dbo.collection("fm_home").find({}).toArray(function(err, result) { // 返回集合中所有数据
      if (err) throw err;
      console.log(result);
      res.json(result);
      db.close();
    });
  })
}); ***********/

console.log(__dirname);
console.log(__filename);