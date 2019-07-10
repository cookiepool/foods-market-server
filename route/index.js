const express = require('express');
const pool = require('../database/sqlpool.js');

var indexRouter = express.Router();

/*** 获取首页轮播图详情 ***/
/* 
  请求参数：无
  返回示例：
  { status: true, msg: '请求成功', data: [{indexImgId: 1, indexImg: 'statuc.jk.com/jjj.png}]}
*/
indexRouter.get('/carousel', (req, res) => {
  var sql = "SELECT icid,img_link FROM fm_index_carousel";
  pool.query(sql, (error, result) => {
    console.log(error);
    if(error == null){
      res.json({ status: true, msg: '请求成功', data: result })
    }else{
      res.json({ status: true, msg: '请求失败', data: '服务器错误！' });
    }
  })
})

module.exports = indexRouter;