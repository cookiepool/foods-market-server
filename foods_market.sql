#foods_market数据库脚本文件
SET NAMES UTF8;
DROP DATABASE IF EXISTS foods_market;
CREATE DATABASE foods_market CHARSET=UTF8;
USE foods_market;

#一、建表
#1.首页相关的表的建立
#1.1新建首页轮播图表
CREATE TABLE fm_index_carousel(
	icid INT PRIMARY KEY AUTO_INCREMENT,
	img_link VARCHAR(64) DEFAULT ''
);
#1.2新建首页推荐商品表
CREATE TABLE fm_index_recom(
	irid INT PRIMARY KEY AUTO_INCREMENT,
	product_id INT
);
#1.3新建首页新品上市表
CREATE TABLE fm_index_new(
	inid INT PRIMARY KEY AUTO_INCREMENT,
	product_id INT
);
#1.4新建首页热销商品
CREATE TABLE fm_index_hot(
	ihid INT PRIMARY KEY AUTO_INCREMENT,
	peoduct_id INT
);

#2.用户相关的表的建立
#2.1新建用户表
CREATE TABLE fm_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	tel_number VARCHAR(13) UNIQUE DEFAULT NULL,
	uname VARCHAR(16) DEFAULT NULL,
	upwd VARCHAR(64) DEFAULT NULL,
	avatar VARCHAR(64) DEFAULT NULL
);

#3.产品表建立
#3.1新建产品表
CREATE TABLE fm_products(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(64) DEFAULT '',
	description VARCHAR(256) DEFAULT '',
	price DECIMAL(7, 2) DEFAULT 0.00,
	unit VARCHAR(16) DEFAULT ''
);

#二、插入数据
#1.首页相关的数据插入
#1.1首页轮播图表插入数据
INSERT INTO fm_index_carousel VALUES(
	null, 'http://static.img.com/jl/kds.png'
);
INSERT INTO fm_index_carousel VALUES(
	null, 'http://static.img.com/jl/kdd.png'
);
INSERT INTO fm_index_carousel VALUES(
	null, 'http://static.img.com/jl/kdf.png'
);
#1.2首页推荐商品的数据插入
INSERT INTO fm_index_recom VALUES(
	null, 1
);

#2.用户相关的数据插入
#2.1用户表插入数据
INSERT INTO fm_user VALUES(
	null, '18381317534', 'lee', md5('123456'), 'http://static.img.com/jk/ldfd.png'
);

#3.产品表插入数据
#3.1产品表插入数据
INSERT INTO fm_products VALUES(
	null, '美味八爪鱼', '美味八爪鱼，营养丰富，口感贼好', 56.00, 'kg'
);
