const express = require("express");
const pool = require('../database/sqlpool');

let cartRouter = express.Router();

/**** 1、获取购物车的信息 ***/
/*
  请求参数：用户id
  返回结果（例）：
  {status: true, msg: '请求成功', data: result}
  {status: true, msg: '请求成功', data: []}
*/
cartRouter.get('/cartlist', (req, res) => {
  let sql = 'SELECT fm_products.pid,fm_products.name,fm_products.price,'+
  'fm_products.unit,fm_products.product_img,fm_user_cart.user_id,fm_user_cart.product_id,fm_user_cart.cart_count FROM fm_user_cart,fm_products,fm_user'+
  ' WHERE fm_products.pid=fm_user_cart.product_id AND fm_user_cart.user_id=?';
  let userID = req.session.userid;
  if(!userID) {
    res.json({status: true, msg: '请求失败', data: {msg: '请先登录！'}});
  };
  pool.query(sql, [userID], (error, result) => {
    if(!error) {
      res.json({status: true, msg: '请求成功', data: result});
    }else {
      console.log(error)
      res.json({status: true, msg: '请求成功', data: {msg: '获取数据出错'}});
    }
  })
})

module.exports = cartRouter;