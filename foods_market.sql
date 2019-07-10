#foods_market数据库脚本文件
SET NAMES UTF8;
DROP DATABASE IF EXISTS foods_market;
CREATE DATABASE foods_market CHARSET=UTF8;
USE foods_market;

#新建用户表
CREATE TABLE fm_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	tel_number VARCHAR(13) UNIQUE DEFAULT NULL,
	uname VARCHAR(16) DEFAULT NULL,
	upwd VARCHAR(64) DEFAULT NULL,
	avatar VARCHAR(64) DEFAULT NULL
);

#新建首页轮播图表
CREATE TABLE fm_index_carousel(
	icid INT PRIMARY KEY AUTO_INCREMENT,
	img_link VARCHAR(64) DEFAULT ''
);

#用户表插入数据
INSERT INTO fm_user VALUES(
	null, '18381317534', 'lee', md5('123456'), 'http://static.img.com/jk/ldfd.png'
);

#首页轮播图表插入数据
INSERT INTO fm_index_carousel VALUES(
	null, 'http://static.img.com/jl/kds.png'
);
INSERT INTO fm_index_carousel VALUES(
	null, 'http://static.img.com/jl/kdd.png'
);
INSERT INTO fm_index_carousel VALUES(
	null, 'http://static.img.com/jl/kdf.png'
);