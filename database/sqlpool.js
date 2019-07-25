const mysql = require('mysql');

//创建链接池
var pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'foods_market',
  connectionLimit: 5,
  multipleStatements: true //允许执行多条查询语句，但是容易遭受sql注入的攻击
});

//导出连接池变量
module.exports = pool;