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
	unit VARCHAR(16) DEFAULT '',
	detail_img VARCHAR(126) DEFAULT '',
	type INT,
	item_type INT
);
#3.2新建产品对应的规格表
CREATE TABLE fm_products_spec(
	psid INT PRIMARY KEY AUTO_INCREMENT,
	product_id INT,
	spec_name VARCHAR(128) DEFAULT '',
	spec_price DECIMAL(7, 2) DEFAULT ''
)
#3.3新建产品对应的产品展示图片表
CREATE TABLE fm_products_imgs(
	piid INT PRIMARY KEY AUTO_INCREMENT,
	product_id INT,
	img_link VARCHAR(256) DEFAULT ''
)

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
# 活鲜水产大类：1；子类：鱼：1，虾：2，蟹：3，贝：4
INSERT INTO fm_products VALUES(
	1, '鲜 文蛤 30-40只/500g（称重）', '新鲜美味，口感上佳', 15.90, '500g', 'http://static.jf.com/dada.png', 1, 4
);
INSERT INTO fm_products VALUES(
	2, '波士顿龙虾（只）', '产自加拿大优质海域，肉质紧实，原汁原味', 119.00, '只', 'http://static.jf.com/dada.png', 1, 2
);
INSERT INTO fm_products VALUES(
	3, '鲜 蛏子 20-25只/500g（称重）', '体大肥美 鲜香嫩滑，美味之选', 59.90, '500g', 'http://static.jf.com/dada.png', 1, 4
);
INSERT INTO fm_products VALUES(
	4, '东星斑600-800g/条（称重）', '肉厚刺少，海鲜美味', 298.00, '500g', 'http://static.jf.com/dada.png', 1, 1
);
INSERT INTO fm_products VALUES(
	5, '鲜活海螺100-200g/只（称重）', '破海而出的鲜活美味，肥美无比', 49.90, '500g', 'http://static.jf.com/dada.png', 1, 4
);
INSERT INTO fm_products VALUES(
	6, '鲜活花螺（称重）', '洁净海域滋养的花螺，活力旺盛，鲜肥饱满', 79.90, '500g', 'http://static.jf.com/dada.png', 1, 4
);
INSERT INTO fm_products VALUES(
	7, '鲜活鲍鱼', '六七头鲍 海中珍品 色泽鲜艳 海味之冠 餐桌黄金 圆润饱满', 2.20, '只', 'http://static.jf.com/dada.png', 1, 4
);
INSERT INTO fm_products VALUES(
	8, '鲜活江团（600-750g/条）', '新鲜捕捞，入口细嫩', 29.90, '条', 'http://static.jf.com/dada.png', 1, 1
);
INSERT INTO fm_products VALUES(
	9, '鲜活小龙虾30-39g/只（称重）', '清水白肚 源头直采 新鲜直达', 24.90, '500g', 'http://static.jf.com/dada.png', 1, 2
);
INSERT INTO fm_products VALUES(
	10, '鲜 鲈鱼 500-700g/条（称重）', '肉质晶莹剔透，品质优异，肉质鲜嫩可口', 25.80, '500g', 'http://static.jf.com/dada.png', 1, 1
);
# 冷冻大类：2；子类：猪：1，鸭：2，鱼：3，虾：4，鹅：5
INSERT INTO fm_products VALUES(
	11, '猪蹄/500g（称重）', '带筋猪蹄，脂肪含量比肥肉底', 60.90, '500g', 'http://static.jf.com/dada.png', 2, 1
);
INSERT INTO fm_products VALUES(
	12, '鸭掌/500g（称重）', '谷物喂养，卤制经典食材', 25.90, '500g', 'http://static.jf.com/dada.png', 2, 2
);
INSERT INTO fm_products VALUES(
	13, '鳕鱼/500g（称重）', '源自洁净深海的海中美味，味道鲜美，肉质嫩滑，营养美味', 281.90, '500g', 'http://static.jf.com/dada.png', 2, 3
);
INSERT INTO fm_products VALUES(
	14, '黑虎虾/500g（称重）', '肉质饱满，虾肉肥美', 9.90, '只', 'http://static.jf.com/dada.png', 2, 4
);
INSERT INTO fm_products VALUES(
	15, '鹅肠/500g（称重）', '肉质饱满，虾肉肥美', 9.90, '只', 'http://static.jf.com/dada.png', 2, 4
);
# 粮油干调：3，子类：香料：1，调味品：2
INSERT INTO fm_products VALUES(
	16, '草果/30g', '', 6.90, '份', 'http://static.jf.com/dada.png', 3, 1
);
INSERT INTO fm_products VALUES(
	17, '味精/100g', '选用优质谷物淀粉发酵而成，是一种自然谷物酿造食品', 4.90, '袋', 'http://static.jf.com/dada.png', 3, 2
);
# 蔬菜水果：4，子类：蔬菜：1，水果：2
INSERT INTO fm_products VALUES(
	18, '法香/50g', '新鲜的法香，气味浓郁清香', 3.50, '份', 'http://static.jf.com/dada.png', 4, 1
);
INSERT INTO fm_products VALUES(
	19, '味精/100g', '选用优质谷物淀粉发酵而成，是一种自然谷物酿造食品', 4.90, '袋', 'http://static.jf.com/dada.png', 3, 2
);
# 鲜花野味：5，子类：鲜花：1，野味：2
INSERT INTO fm_products VALUES(
	18, '兰花/50g', '新鲜的兰花，美丽诱人', 19.50, '份', 'http://static.jf.com/dada.png', 5, 1
);
INSERT INTO fm_products VALUES(
	19, '野鸭', '野味，营养又好吃，滋阴补肾', 1999.90, '只', 'http://static.jf.com/dada.png', 5, 2
);
# 珍品：6，子类：1
INSERT INTO fm_products VALUES(
	20, '茶钩翅', '绝对巴适的拌', 2999.50, '份', 'http://static.jf.com/dada.png', 6, 1
);
INSERT INTO fm_products VALUES(
	21, '燕窝', '滋阴补肾，绝对大补', 9999.90, '500g', 'http://static.jf.com/dada.png', 6, 1
);

#3.2产品规格表插入数据
INSERT INTO fm_products_spec VALUES(
	null, 7, '21-24头/500g', 2.20
);
INSERT INTO fm_products_spec VALUES(
	null, 7, '9-10头/500g', 10.90
);
INSERT INTO fm_products_spec VALUES(
	null, 7, '6-7头/500g', 21.90
);
#3.3产品展示图片表插入数据
INSERT INTO fm_products_imgs VALUES(
	null, 1, './1.jpg'
);
INSERT INTO fm_products_imgs VALUES(
	null, 1, './2.jpg'
);
INSERT INTO fm_products_imgs VALUES(
	null, 1, './3.jpg'
);
INSERT INTO fm_products_imgs VALUES(
	null, 1, './4.jpg'
);
