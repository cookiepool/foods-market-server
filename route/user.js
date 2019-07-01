const express = require("express");
// const dbConfig = require("../database/mongodbnative");

const pool = require('../database/sqlpool');

var userRouter = express.Router();

/****用户登录验证****/
/*
  请求参数：用户电话-utelNum, 密码-upwd
  返回结果（例）：
  {status: true, msg: '请求成功', data: {status: true, msg: '登录成功'}}
  {status: true, msg: '请求成功', data: {status: false, msg: '登录失败，请检查手机和密码'}}
*/
userRouter.get('/login', (req, res)=>{
  var sql = "SELECT tel_number,uname,avatar FROM fm_user WHERE tel_number=? AND upwd=md5(?)";
  var params = {
    tel: '18381317534',
    upwd: '123456'
  }
  pool.query(sql, [params.tel, params.upwd], (error, result) => {
    console.log(error);
    if(result.length != 0){
      //登陆成功写入session
      req.session.user = params.tel;
      req.session.isLogin = true;
      //返回数据
      res.json({status: true, msg: '请求成功', data: {status: true, msg: '登录成功'}})
    }else{
      res.json({status: true, msg: '请求成功', data: {status: true, msg: '登录失败，请检查用户名或密码'}})
    }
  })
  /** 以下为mongodb的语法（已废弃） **/
  /* dbConfig.mongodbClient.connect(dbConfig.url, {useNewUrlParser: true}, (err, db)=>{
    if(err) throw err;
    var dbonline = db.db(dbConfig.dbName);
    //查询参数
    var params = {
      user_tel: '18381317534',
      user_pwd: '123456'
    };
    dbonline.collection('fm_user').find(params).toArray((err, result)=>{
      if(err) throw err;
      if(result.length != 0){
        //登陆成功写入session
        req.session.user = params.user_tel;
        req.session.isLogin = true;
        //返回数据
        res.json({status: true, msg: '请求成功', data: {status: true, msg: '登录成功'}})
      }else{
        res.json({status: true, msg: '请求成功', data: {status: true, msg: '登录失败，请检查用户名或密码'}})
      }
      db.close();
    }); 
  }) */
});

/****用户退出登录****/
/*
  请求参数：无
  返回结果（例）：无
*/
userRouter.get('/logout', (req, res)=>{
  //清除session,cookie
  req.session.destroy(()=>{
    res.clearCookie("user", {});
    res.cookie("isLogin", "false");

    res.send("退出成功");
  })
})
/****验证用户是否处于登录状态****/
/*
  请求参数：无
  返回结果（例）：无
*/
userRouter.get('/islogin', (req, res)=>{
  var nowUser = {user: "default"};

  //以下注释的两句话暂时没发现用处
  // var nowCookie = req.header.cookie || '';
  // nowCookie = nowCookie.split(";");
  var cookieUser = "default";
  var sessionUser = "default";

  //解析cookie里的信息
  // console.log(req.header);
  // console.log(req.cookies);
  console.log(req.session.isLogin);
  console.log(req.session.user);
  res.send("Ok");
})

// 全局验证类，当前端调用接口时会先调用此方法验证session中是否存在user,
// 如果不存在user则抛出异常，如果存在则执行下一个方法；
// app.use(function (req, res, next) {
//   if (!req.session.user) {
//       return next(new Error('oh no')) // handle error
//   } else {
//       var user = req.session.user;
//       var name = user.name;
//       console.log('你好' + name + '，欢迎来到我的家园。');
//   }
//   next() // otherwise continue
// });

/****用户注册****/
/*
  请求参数：用户电话-utelNum, 密码-upwd
  返回结果（例）：
  ｛status: true, msg: '请求成功', data: {status: true, msg: '注册成功'}｝
  ｛status: true, msg: '请求成功', data: {status: false, msg: '注册失败，请检查'}｝
*/
userRouter.post('/register', (req, res)=>{

})

module.exports = userRouter;