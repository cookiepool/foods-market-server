const express = require("express");
const pool = require('../database/sqlpool');

let userRouter = express.Router();

/****1、验证用户的手机是否已注册****/
/*
  请求参数：用户电话-telNumber
  返回结果（例）：
  {status: true, msg: '请求成功', data: {status: true, msg: '手机号码可用'}}
  {status: true, msg: '请求成功', data: {status: fasle, msg: '手机号码已经被注册'}}
*/
userRouter.post('/isRegister', (req, res) => {
  let sql = "SELECT tel_number FROM fm_user WHERE tel_number=?";
  let _telNumber = req.body.telNumber;
  pool.query(sql, [_telNumber], (error, result) => {
    console.log(error);
    if(result.length == 0){
      res.json({status: true, msg: '请求成功', data: {status: true, msg: '手机号码可用'}});
    }else{
      res.json({status: true, msg: '请求成功', data: {status: false, msg: '手机号码已经被注册'}});
    }
  })
})
/****用户登录验证****/
/*
  请求参数：用户电话-telNumber, 密码-upwd
  返回结果（例）：
  {status: true, msg: '请求成功', data: {status: true, msg: '登录成功'}}
  {status: true, msg: '请求成功', data: {status: false, msg: '登录失败，请检查手机和密码'}}
*/
userRouter.post('/login', (req, res)=>{
  let sql = "SELECT uid,tel_number,uname,avatar FROM fm_user WHERE tel_number=? AND upwd=md5(?)";
  let _telNumber = req.body.telNumber;
  let _upwd = req.body.upwd;
  pool.query(sql, [_telNumber, _upwd], (error, result) => {
    console.log(error);
    console.log(result);
    if(result.length != 0){
      //登陆成功写入session
      req.session.userid = result[0].uid;
      req.session.phoneNum = result[0].tel_number;
      req.session.isLogin = true;
      res.cookie('islogin', 'true');
      //返回数据
      res.json({status: true, msg: '请求成功', data: {status: true, msg: '登录成功'}})
    }else{
      res.json({status: true, msg: '请求成功', data: {status: false, msg: '登录失败，请检查手机号或密码'}})
    }
  })
  /** 以下为mongodb的语法（已废弃） **/
  /* dbConfig.mongodbClient.connect(dbConfig.url, {useNewUrlParser: true}, (err, db)=>{
    if(err) throw err;
    let dbonline = db.db(dbConfig.dbName);
    //查询参数
    let params = {
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
  res.clearCookie('islogin'); // 清除浏览器cookie
  req.session.destroy(()=>{
    res.json({statsu: true, msg: '请求成功', data: {status: true, msg: '退出成功'}});
  })
})
/****验证用户是否处于登录状态****/
/*
  请求参数：无
  返回结果（例）：无
*/
userRouter.get('/islogin', (req, res)=>{
  console.log(req.session);
  console.log(req.session.isLogin);
  console.log(req.session.userid);
  if(req.session.isLogin){
    res.json({statsu: true, msg: '请求成功', data: {status: true, msg: '已登录', userid: req.session.userid}});
  }else{
    res.json({statsu: true, msg: '请求成功', data: {status: false, msg: '未登录', userid: ''}});
  }
})

// 全局验证类，当前端调用接口时会先调用此方法验证session中是否存在user,
// 如果不存在user则抛出异常，如果存在则执行下一个方法；
// app.use(function (req, res, next) {
//   if (!req.session.user) {
//       return next(new Error('oh no')) // handle error
//   } else {
//       let user = req.session.user;
//       let name = user.name;
//       console.log('你好' + name + '，欢迎来到我的家园。');
//   }
//   next() // otherwise continue
// });

/****用户注册****/
/*
  请求参数：用户电话-telNumber, 密码-upwd
  返回结果（例）：
  ｛status: true, msg: '请求成功', data: {status: true, msg: '注册成功'}｝
  ｛status: true, msg: '请求成功', data: {status: false, msg: '注册失败，请检查'}｝
*/
userRouter.post('/register', (req, res)=>{
  let defaultName = '小菜用户' + new Date().getTime();
  let sql = "INSERT INTO fm_user VALUES(null,?,?,md5(?),'http://static.img.com/jl/sdad.png')";
  let _telNumber = req.body.telNumber;
  let _upwd = req.body.upwd;
  pool.query(sql, [_telNumber, defaultName, _upwd], (error, result) => {
    console.log(error);
    console.log(result)
    if(result.affectedRows > 0){
      res.json({
        status: true,
        msg: '请求成功',
        data: {
          status: true,
          uid: result.insertId,
          msg: '注册成功！'
        }
      })
    }else{
      res.json({
        status: true,
        msg: '请求成功',
        data: {
          status: false,
          msg: '注册失败，请稍后再试！'
        }
      })
    }
  })
})

module.exports = userRouter;