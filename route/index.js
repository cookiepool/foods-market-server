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
  let sql = 'SELECT fm_products.pid,fm_products.name,fm_products.price,'+
    'fm_products.unit FROM fm_products,fm_index_recom WHERE '+
    'fm_products.pid=fm_index_recom.product_id';
  let sql_other = 'SELECT fm_products_imgs.img_link,fm_products_imgs.product_id from fm_products_imgs,fm_index_recom WHERE '+
    'fm_products_imgs.product_id=fm_index_recom.product_id';

  let final_result = [];

  let promise_one = new Promise((resolve, reject) => {
    pool.query(sql, (error, result) => {
      console.log(error);
      if(result.length > 0){
        resolve(result);
      }else{
        reject({ status: true, msg: '请求成功', data: { msg: '无数据' } });
      }
    });
  })
  let promise_two = new Promise((resolve, reject) => {
    pool.query(sql_other, (error, result) => {
      console.log(error);
      if(result.length > 0){
        resolve(result);
      }else{
        reject({ status: true, msg: '请求成功', data: { msg: '无数据' } });
      }
    })
  });

  Promise.all([promise_one, promise_two]).then((result) => {
    console.log(result);
    for(let i = 0; i < result[0].length; i++) {
      let addItem = {};
      addItem.pid = result[0][i].pid;
      addItem.name = result[0][i].name;
      addItem.price = result[0][i].price;
      addItem.unit = result[0][i].unit;
      for(let j = 0; j < result[1].length; j++) {
        if(result[0][i].pid == result[1][j].product_id) {
          addItem.img_link = result[1][j].img_link;
          break;
        }
      }
      final_result.push(addItem);
    }
    res.json({ status: true, msg: '请求成功', data: final_result });
  }).catch((err) => {
    console.log(err);
    res.json(err);
  })
})

/*** 获取首页新品上市产品 ***/
/*
  请求参数：无
  返回实例：
  { status: true, msg: '请求成功', data: []}
*/
indexRouter.get('/newproduct', (req, res) => {
  let sql = 'SELECT fm_products.pid,fm_products.name,fm_products.price,'+
    'fm_products.unit FROM fm_products,fm_index_new WHERE '+
    'fm_products.pid=fm_index_new.product_id';
  let sql_other = 'SELECT fm_products_imgs.img_link,fm_products_imgs.product_id from fm_products_imgs,fm_index_new WHERE '+
    'fm_products_imgs.product_id=fm_index_new.product_id';

  let final_result = [];

  let promise_one = new Promise((resolve, reject) => {
    pool.query(sql, (error, result) => {
      console.log(error);
      if(result.length > 0){
        resolve(result);
      }else{
        reject({ status: true, msg: '请求成功', data: { msg: '无数据' } });
      }
    });
  })
  let promise_two = new Promise((resolve, reject) => {
    pool.query(sql_other, (error, result) => {
      console.log(error);
      if(result.length > 0){
        resolve(result);
      }else{
        reject({ status: true, msg: '请求成功', data: { msg: '无数据' } });
      }
    })
  });

  Promise.all([promise_one, promise_two]).then((result) => {
    console.log(result);
    for(let i = 0; i < result[0].length; i++) {
      let addItem = {};
      addItem.pid = result[0][i].pid;
      addItem.name = result[0][i].name;
      addItem.price = result[0][i].price;
      addItem.unit = result[0][i].unit;
      for(let j = 0; j < result[1].length; j++) {
        if(result[0][i].pid == result[1][j].product_id) {
          addItem.img_link = result[1][j].img_link;
          break;
        }
      }
      final_result.push(addItem);
    }
    res.json({ status: true, msg: '请求成功', data: final_result });
  }).catch((err) => {
    console.log(err);
    res.json(err);
  }) 
})

/*** 获取首页热销商品 ***/
/*
  请求参数：无
  返回实例：
  { status: true, msg: '请求成功', data: []}
*/
indexRouter.get('/hotproduct', (req, res) => {
  let sql = 'SELECT fm_products.pid,fm_products.name,fm_products.price,'+
    'fm_products.unit FROM fm_products,fm_index_hot WHERE '+
    'fm_products.pid=fm_index_hot.product_id';
  let sql_other = 'SELECT fm_products_imgs.img_link,fm_products_imgs.product_id from fm_products_imgs,fm_index_hot WHERE '+
    'fm_products_imgs.product_id=fm_index_hot.product_id';

  let final_result = [];

  let promise_one = new Promise((resolve, reject) => {
    pool.query(sql, (error, result) => {
      console.log(error);
      if(result.length > 0){
        resolve(result);
      }else{
        reject({ status: true, msg: '请求成功', data: { msg: '无数据' } });
      }
    });
  })
  let promise_two = new Promise((resolve, reject) => {
    pool.query(sql_other, (error, result) => {
      console.log(error);
      if(result.length > 0){
        resolve(result);
      }else{
        reject({ status: true, msg: '请求成功', data: { msg: '无数据' } });
      }
    })
  });

  Promise.all([promise_one, promise_two]).then((result) => {
    for(let i = 0; i < result[0].length; i++) {
      let addItem = {};
      addItem.pid = result[0][i].pid;
      addItem.name = result[0][i].name;
      addItem.price = result[0][i].price;
      addItem.unit = result[0][i].unit;
      for(let j = 0; j < result[1].length; j++) {
        if(result[0][i].pid == result[1][j].product_id) {
          addItem.img_link = result[1][j].img_link;
          break;
        }
      }
      final_result.push(addItem);
    }
    res.json({ status: true, msg: '请求成功', data: final_result });
  }).catch((err) => {
    console.log(err);
    res.json(err);
  }) 
})
module.exports = indexRouter;