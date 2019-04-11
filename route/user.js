const express = require('express');
const dbConfig = require("../database/mongodbnative");

var userRouter = express.Router();

/****用户登录验证****/
/*
  请求参数：用户电话-utelNum, 密码-upwd
  返回结果（例）：
  ｛status: true, msg: '请求成功', data: {status: true, msg: '登录成功'}｝
  ｛status: true, msg: '请求成功', data: {status: false, msg: '登录失败，请检查用户名和密码'}｝
*/
userRouter.post('/login', (req, res)=>{
  
})