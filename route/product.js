const express = require('express');
const pool = require('../database/sqlpool.js');

let productRouter = express.Router();

/* 获取产品详情页数据 */
/* 
  请求参数：产品编号-pid
  返回结果（例）：
  {status: true, msg: '请求成功', data: productData}
*/
productRouter.get('/productdetail', (req, res) => {
  let _pid = req.query.pid;
  let sql = 'SELECT * FROM fm_products WHERE pid=? ';
  let sql_other = 'SELECT fm_products_imgs.img_link FROM fm_products_imgs WHERE product_id=?';

  let promise_one = new Promise((resolve, reject) => {
    pool.query(sql, [_pid], (error, result) => {
      console.log(error);
      if(result.length !== 0) {
        resolve(result);
      }else {
        reject({status: true, msg: '请求成功', data: []});
      }
    });
  });
  let promise_two = new Promise((resolve, reject) => {
    pool.query(sql_other, [_pid], (error, result) => {
      console.log(error);
      if(result.length !== 0) {
        resolve(result);
      }else {
        reject({status: true, msg: '请求成功', data: []});
      }
    });
  });
  Promise.all([promise_one, promise_two]).then((final_res) => {
    console.log(final_res);
    let response = [];
    response.push(final_res[0][0]);
    response.push(final_res[1]);
    res.json(response);
  }).catch((err) => {
    res.json(err);
  });
});

/* 获取分类页数据 */
/* 
  请求参数：一级菜单编号-typeID，二级菜单编号-itemID
  返回结果（例）：
  {status: true, msg: '请求成功', data: itemData}
*/
productRouter.get('/typelist', (req, res) => {
  let _typeID = req.query.firstID;
  let _itemID = req.query.secondID;
  let sql = 'SELECT * FROM fm_products WHERE type=? AND item_type=?';

  pool.query(sql, [_typeID, _itemID], (error, result) => {
    console.log(error)
    if(error) {
      res.json({status: false, msg: '请求失败', data: []});
    }else {
      res.json({status: true, msg: '请求成功', data: result});
    }
  });
})
module.exports = productRouter;