const express = require('express');
const dbConfig = require("../database/mongodbnative");

var userRouter = express.Router();

/****用户登录验证****/
/*
  请求参数：用户电话-utelNum, 密码-upwd
  返回结果（例）：
  {status: true, msg: '请求成功', data: {status: true, msg: '登录成功'}}
  {status: true, msg: '请求成功', data: {status: false, msg: '登录失败，请检查手机和密码'}}
*/
userRouter.get('/login', (req, res)=>{
  dbConfig.mongodbClient.connect(dbConfig.url, {useNewUrlParser: true}, (err, db)=>{
    if(err) throw err;
    var dbonline = db.db(dbConfig.dbName);
    //查询参数
    var params = {
      user_tel: '18381317534',
      user_pwd: '123456'
    };
    dbonline.collection('fm_user').find(params).toArray((err, result)=>{
      if(err) throw err;
      console.log(result);
      if(result.length != 0){
        res.json({status: true, msg: '请求成功', data: {status: true, msg: '登录成功'}})
      }else{
        res.json({status: true, msg: '请求成功', data: {status: true, msg: '登录失败，请检查用户名或密码'}})
      }
      db.close();
    });
  })
});

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