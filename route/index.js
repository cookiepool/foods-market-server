const express = require('express');
const pool = require('../database/sqlpool.js');

let indexRouter = express.Router();

/*** 获取首页轮播图详情 ***/
/* 
  请求参数：无
  返回示例：
  { status: true, msg: '请求成功', data: [{indexImgId: 1, indexImg: 'statuc.jk.com/jjj.png}]}
*/
indexRouter.get('/carousel', (req, res) => {
  let sql = "SELECT icid,img_link FROM fm_index_carousel";
  pool.query(sql, (error, result) => {
    console.log(error);
    if(error == null){
      res.json({ status: true, msg: '请求成功', data: result })
    }else{
      res.json({ status: true, msg: '请求失败', data: '服务器错误！' });
    }
  })
})

/*** 获取首页精品推荐产品 ***/
/*
  请求参数：无
  返回实例：
  { status: true, msg: '请求成功', data: []}
*/
indexRouter.get('/recommand', (req, res) => {
  let sql = 'SELECT fm_products.pid,fm_products.name,fm_products.description,fm_products.price,'+
    'fm_products.unit FROM fm_products,fm_index_recom WHERE fm_products.pid=fm_index_recom.product_id';
  pool.query(sql, (error, result) => {
    console.log(error);
    if(result.length > 0){
      res.json({ status: true, msg: '请求成功', data: result });
    }else{
      res.json({ status: true, msg: '请求成功', data: { msg: '无数据' } });
    }
  })
})

/*** 获取首页新品上市产品 ***/
/*
  请求参数：无
  返回实例：
  { status: true, msg: '请求成功', data: []}
*/
indexRouter.get('/newproduct', (req, res) => {
  
})

/*** 获取首页热销商品 ***/
/*
  请求参数：无
  返回实例：
  { status: true, msg: '请求成功', data: []}
*/
indexRouter.get('/hotproduct', (req, res) => {
  
})
module.exports = indexRouter;