/*
SQLyog Professional v13.1.1 (64 bit)
MySQL - 8.0.37 : Database - merchandisedb
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`merchandisedb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `merchandisedb`;

/*Table structure for table `categories` */

DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `category_code` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `categories` */

insert  into `categories`(`id`,`category_code`,`description`,`image`,`name`) values 
(6,'G31C','All Kinds of Garments','4f9f5879-ed2a-4f4f-8ee9-4ee98cd2bb23_garments.svg','Garment'),
(7,'DEDA','Many Kins of Fabric','12a4085d-26ef-404d-b0e4-ac0834886251_fabric.svg','Fabric '),
(8,'3G12','High Quality Yarn ','b3f03af0-8f3a-41e3-8d33-1340ba1552f7_yarn.svg','Yarn'),
(9,'31FE','Hugh Collection of Home Textiles','ae373b3e-212b-4777-96ca-3b715a932aa2_home-textile.svg','Home Textiles'),
(10,'A32B',' All Kinds of Clothing Accessory','bee3c459-1b84-4b97-843e-f9dca1aa76d7_clothing.svg','Clothing Accessory'),
(11,'AFEB','Organic & Conventional Cotton  Fibre & FeedStock','f6d2d1a8-3a84-4566-90d8-ba3fbe721513_feedstock.svg','Fibre & FeedStock'),
(12,'02F2','High-Quality Leather & Footwear','03224947-56ab-41e5-ad60-fa2d62a2cbfb_footwear.svg','Leather & Footwear'),
(13,'2G0F','Many kinds of Fashion Accessory','70110064-2bcf-4d4d-94af-c256352648b6_fashion-accessary.svg','Fashion Accessory');

/*Table structure for table `country` */

DROP TABLE IF EXISTS `country`;

CREATE TABLE `country` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `bussiness` varchar(255) DEFAULT NULL,
  `progress` varchar(255) DEFAULT NULL,
  `sale` double NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `country` */

insert  into `country`(`id`,`name`,`bussiness`,`progress`,`sale`,`status`) values 
(4,'Bangladesh ','Row Metarials&Garment','50',800000,'Rich'),
(5,'	India','Fabric ','35',400000,'Good'),
(6,'China','Yarn',NULL,650000,'Rich'),
(7,'HONG KONG','Row Metarials&Fiber',NULL,380000,'Poor'),
(8,'USA','Fabric ',NULL,850000,'Rich'),
(9,'TORONTO','Garment',NULL,450000,'Good'),
(10,' NEW YORK','Home Textiles',NULL,850000,'Rich'),
(11,'SECAUCUS','Clothing Accessory',NULL,750000,'Rich'),
(12,' Japan','Garment',NULL,530000,'Good');

/*Table structure for table `customers` */

DROP TABLE IF EXISTS `customers`;

CREATE TABLE `customers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `contact_person` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `organigation` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `country_obj_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKrfbvkrffamfql7cjmen8v976v` (`email`),
  KEY `FKhrruqdhcwnatqblne73cwcb36` (`country_obj_id`),
  CONSTRAINT `FKhrruqdhcwnatqblne73cwcb36` FOREIGN KEY (`country_obj_id`) REFERENCES `country` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `customers` */

insert  into `customers`(`id`,`address`,`contact_person`,`country`,`created_at`,`email`,`name`,`organigation`,`phone`,`updated_at`,`country_obj_id`) values 
(1,'GARDENA, CA 90248USA','Mr Tony',NULL,'2024-09-30 02:51:15.301067','tony@fang-fashion.com','Mr Tony','FASHION LIFE/FANG','+115423','2024-09-30 02:51:15.301067',8),
(2,'KAZUKO OTAKE ','SHO HARASAKI',NULL,'2024-09-30 02:54:39.399578','r.otake@mamafactory.jp','SHO HARASAKI','MAMA FACTORY OTAKE CO.LTD.','+81 90 8496 5344','2024-09-30 02:54:39.399578',12),
(3,'House 5/C, Road 01,\nMohammadpur','Nafiz Shahriar Nirjash',NULL,'2024-10-04 23:54:06.481889','nafizshahriar@gmail.com','Nafiz Shahriar Nirjash','IDB','+88021255555','2024-10-04 23:54:06.481889',4);

/*Table structure for table `inventory_items` */

DROP TABLE IF EXISTS `inventory_items`;

CREATE TABLE `inventory_items` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `stock` bigint NOT NULL,
  `warehouse_id` bigint DEFAULT NULL,
  `product_id` bigint DEFAULT NULL,
  `ware_house_id` bigint DEFAULT NULL,
  `country_id` int DEFAULT NULL,
  `customer_id` bigint DEFAULT NULL,
  `order_item_id` bigint DEFAULT NULL,
  `sale_id` bigint DEFAULT NULL,
  `stock_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKqq1baol3lk2v7ka2ob578l31h` (`warehouse_id`),
  KEY `FK9qhblf3mc4r22jajlv4w6sstt` (`product_id`),
  KEY `FKm75avxhur1gw9guj9tilobrv1` (`ware_house_id`),
  KEY `FK7fkemo5vo2whnblncvotptlaq` (`country_id`),
  KEY `FKecrhx7mebf9ox08faxhejleeb` (`customer_id`),
  KEY `FKlkmw53gec48hel4qlmt56qa54` (`order_item_id`),
  KEY `FK5107kmw2sbomj9ihbsth8km2i` (`sale_id`),
  KEY `FKkxk7c974o20i1dx02y09gfotd` (`stock_id`),
  CONSTRAINT `FK5107kmw2sbomj9ihbsth8km2i` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`),
  CONSTRAINT `FK7fkemo5vo2whnblncvotptlaq` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`),
  CONSTRAINT `FK9qhblf3mc4r22jajlv4w6sstt` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `FKecrhx7mebf9ox08faxhejleeb` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `FKkxk7c974o20i1dx02y09gfotd` FOREIGN KEY (`stock_id`) REFERENCES `stock` (`id`),
  CONSTRAINT `FKlkmw53gec48hel4qlmt56qa54` FOREIGN KEY (`order_item_id`) REFERENCES `order_items` (`id`),
  CONSTRAINT `FKm75avxhur1gw9guj9tilobrv1` FOREIGN KEY (`ware_house_id`) REFERENCES `warehouses` (`id`),
  CONSTRAINT `FKqq1baol3lk2v7ka2ob578l31h` FOREIGN KEY (`warehouse_id`) REFERENCES `warehouses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `inventory_items` */

/*Table structure for table `measurement` */

DROP TABLE IF EXISTS `measurement`;

CREATE TABLE `measurement` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `attachment_description` varchar(255) DEFAULT NULL,
  `attachment_name` varchar(255) DEFAULT NULL,
  `code_name` varchar(255) DEFAULT NULL,
  `large` varchar(255) DEFAULT NULL,
  `measurement_description` varchar(255) DEFAULT NULL,
  `measurement_name` varchar(255) DEFAULT NULL,
  `measurement_tolerance` varchar(255) DEFAULT NULL,
  `medium` varchar(255) DEFAULT NULL,
  `small` varchar(255) DEFAULT NULL,
  `tolerance` varchar(255) DEFAULT NULL,
  `style_category_id` bigint DEFAULT NULL,
  `x_large` varchar(255) DEFAULT NULL,
  `x_small` varchar(255) DEFAULT NULL,
  `xxlarge` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKted6rhfi8ufa8klgy50rbomd4` (`style_category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `measurement` */

/*Table structure for table `order_items` */

DROP TABLE IF EXISTS `order_items`;

CREATE TABLE `order_items` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `delivery_date` date DEFAULT NULL,
  `order_date` datetime(6) NOT NULL,
  `quantity` bigint NOT NULL,
  `status` varchar(255) NOT NULL,
  `total_price` double NOT NULL,
  `customer_id` bigint NOT NULL,
  `product_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK9xiqncq3lfs899jmdi8hndr5l` (`customer_id`),
  KEY `FKocimc7dtr037rh4ls4l95nlfi` (`product_id`),
  CONSTRAINT `FK9xiqncq3lfs899jmdi8hndr5l` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `FKocimc7dtr037rh4ls4l95nlfi` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `order_items` */

insert  into `order_items`(`id`,`delivery_date`,`order_date`,`quantity`,`status`,`total_price`,`customer_id`,`product_id`) values 
(1,'2024-10-31','2024-09-29 20:56:36.987000',150,'Shipped',22500,1,4),
(2,'2024-11-20','2024-09-29 20:59:50.971000',50,'Shipped',7500,2,4),
(3,'2024-10-17','2024-09-30 17:33:11.174000',50,'Shipped',17500,2,6),
(4,'2024-11-29','2024-09-30 22:50:13.688000',100,'Shipped',90000,3,9),
(5,'2024-10-31','2024-09-30 22:53:18.952000',200,'Shipped',92000,3,8),
(6,'2024-10-18','2024-09-30 23:21:07.249000',100,'Shipped',35000,3,7),
(7,'2024-10-31','2024-09-30 23:42:04.314000',230,'Pending',80500,3,7),
(8,'2024-10-18','2024-10-01 00:05:36.793000',200,'Shipped',200000,2,10),
(9,'2024-10-31','2024-10-16 18:06:54.238000',150,'Shipped',150000,2,14);

/*Table structure for table `products` */

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `dalivary_date` date DEFAULT NULL,
  `description` varchar(255) NOT NULL,
  `due` double NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `paid` double NOT NULL,
  `price` double NOT NULL,
  `product_code` varchar(255) DEFAULT NULL,
  `purchase_date` date DEFAULT NULL,
  `quantity` int NOT NULL,
  `tax` double NOT NULL,
  `total_price` double NOT NULL,
  `sub_categories_id` bigint DEFAULT NULL,
  `supplier_id` bigint DEFAULT NULL,
  `measurement_id` bigint DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `sizes` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKklfbf25x7jf9pg19jhojq5pg2` (`sub_categories_id`),
  KEY `FK6i174ixi9087gcvvut45em7fd` (`supplier_id`),
  KEY `FKg6eympawq00m1mayfxecs2qvc` (`measurement_id`),
  CONSTRAINT `FK6i174ixi9087gcvvut45em7fd` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers` (`id`),
  CONSTRAINT `FKg6eympawq00m1mayfxecs2qvc` FOREIGN KEY (`measurement_id`) REFERENCES `measurement` (`id`),
  CONSTRAINT `FKklfbf25x7jf9pg19jhojq5pg2` FOREIGN KEY (`sub_categories_id`) REFERENCES `sub_categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `products` */

insert  into `products`(`id`,`dalivary_date`,`description`,`due`,`image`,`name`,`paid`,`price`,`product_code`,`purchase_date`,`quantity`,`tax`,`total_price`,`sub_categories_id`,`supplier_id`,`measurement_id`,`size`,`sizes`) values 
(3,'2024-10-31','We are a professional manufacturer and exporter and our expertise is in Girl Unicorn Onesie . \nThese Wrap yourself with our exquisite Girl Unicorn...',0,'c2b6bc7d-f820-4756-ac31-3311a2607bf5_24218606_2_girl-unicorn-onesie-supplier.webp','Girl Unicorn Onesie',52500,200,'slqq4','2024-09-27',250,5,52500,NULL,NULL,NULL,NULL,NULL),
(4,'2024-10-24','We introduce our company as a well renowned maker and exporter of Kid\'s Formal Shorts . We have achieved expertise in catering to the requirements...',0,'5ef636ed-89c5-4616-8edd-b10bd39455b4_24221923_0_twill-short-frt-removebg-preview.webp','Kid\'s Formal Shorts',15900,150,'wwrsw','2024-09-28',100,6,15900,NULL,NULL,NULL,NULL,NULL),
(5,'2024-11-01','We introduce our self as a pioneer in the field of Women\'s Long Denim Skirt . Our Customizable Women\'s Long Denim Skirt with Front pocket and Slit...',0,'228836dc-5364-4ec6-bc06-76592ff4a039_24220755_0_10.webp','Women\'s Long Denim Skirt',155250,900,'ywjv5','2024-09-28',150,15,155250,4,NULL,NULL,NULL,'Medium,Large,Xlarge'),
(6,'2024-10-31','We are a top-ranking company which is specialized in Kids Wool Half-Sleeve Knee-Length Dress . A perfect fusion of classic elegance and...',0,'42ac1ffb-93e6-4658-be0f-ee9558ddf223_24218604_0_651d4f60-e205-4d98-a5b2-b632-3d5478a1.webp',' Kids Wool Half-Sleeve Knee-Length Dress',261625,350,'pu67q','2024-09-28',650,15,261625,2,15,NULL,NULL,'Xsmall,Small,Medium'),
(7,'2024-11-29','We introduce our company as a well renowned maker and exporter of Kids Stylish Sweater . We offer kids\' sweaters made from a variety of materials...',0,'6c62644f-53e7-4cda-92b3-fcfb87121089_24221245_7_kids-stylish-sweater.webp','Kids Stylish Sweater',265650,350,'puujo','2024-09-28',690,10,265650,2,14,NULL,NULL,NULL),
(8,'2024-11-28','We get huge pleasure and pride in introducing our company as one of the leading manufacturers & exporters of Men\'s Gym Half-sleeve T-shirts.',0,'f4940112-8da9-4c86-bfda-729c6512051d_23217766_1_58.webp','Men\'s Gym Half-sleeve T-shirts Supplier',241500,460,'9vnhv','2024-09-30',500,5,241500,3,15,NULL,NULL,'Xsmall,Small,Medium'),
(9,'2024-09-30','We take immense pleasure and pride in introducing our company as one of the leading manufacturers &amp; exporters of Men Stylish Sweater . We...',-5000,'39eeb2f9-41f2-4eec-9aaf-ecf4b7265dc3_23217766_1_58_59 (1).webp','Men Stylish Sweater',490000,900,'9vrzq','2024-09-29',500,10,495000,3,14,NULL,NULL,NULL),
(10,NULL,'Our company excels in the manufacturing of Knitted Jacquard Fabric. Our exquisite Luxury Embroidered Jacquard is a unique weaving technique that integrates intricate patterns directly into the material...',-15000,'114bed77-b439-4426-9dcd-dbd74af21eed_23217916_0_2.webp','Knitted Jacquard Fabric',100000,1000,'xp4th',NULL,100,15,115000,5,15,NULL,NULL,'Large'),
(11,NULL,'We are considered as one of the most remarkable and renowned manufacturer &amp; exporter of Dyed Warp Polyester Fabric . This enables us to cater...',0,'cb8ac4c8-5058-4317-b446-181249660141_16121030_2_poyerster-fabric-400-gsm-dyed-wrap-supplier.webp','Dyed Warp Polyester Fabric',68750,2.5,'jzup4',NULL,25000,10,68750,5,17,NULL,NULL,'Kg'),
(12,NULL,'We are reckoned as an established manufacturer and exporter of Woolen Blends for knitting purpose. We would like to sell yarn in dyed pattern...',0,'72d662f5-341d-4513-af56-7dd86f6c7fde_24222610_0_spun-polyester-yarn.webp','Woolen Blends : Dyed, Knitting, 10-80, Wool, Linen, Polyester, Cotton',1058400,900,'poquw','2024-10-04',980,20,1058400,8,17,NULL,NULL,'Kg'),
(13,NULL,'Riding on unfathomable volumes of industrial expertise, we are providing a broad array of Silk Yarn .',0,'436e7ee6-ec52-4ae8-8d4f-d345c0df5e1a_1361213_1_20131004075055063238_2.webp','Silk Yarn',585000,750,'5ompx','2024-10-04',650,20,585000,8,14,NULL,NULL,'Kg'),
(14,NULL,'We are manufacturer &amp; exporter of FSC BCI Bamboo Cotton Yarn made out of 70% Bamboo 30% Cotton / 50% Bamboo / 50% Cotton. Can supply these...',0,'8152651e-bada-47fd-baf7-efca6b0d4dc2_20181741_0_bamboo-yarn.webp','FSC BCI Bamboo Cotton Yarn',1008000,1000,'ppvh5','2024-10-04',960,5,1008000,8,15,NULL,NULL,'Kg');

/*Table structure for table `raw_materiaes` */

DROP TABLE IF EXISTS `raw_materiaes`;

CREATE TABLE `raw_materiaes` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `attachment` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `raw_catagoey_name` varchar(255) DEFAULT NULL,
  `raw_metarial_name` varchar(255) DEFAULT NULL,
  `unit_price` double NOT NULL,
  `customer_id` bigint DEFAULT NULL,
  `style_categories_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKrejg1ts0cqpvualcdjdka34d6` (`customer_id`),
  KEY `FKx5gbsqmsd1qugyn2yo2d3vbe` (`style_categories_id`),
  CONSTRAINT `FKrejg1ts0cqpvualcdjdka34d6` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `FKx5gbsqmsd1qugyn2yo2d3vbe` FOREIGN KEY (`style_categories_id`) REFERENCES `style_categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `raw_materiaes` */

/*Table structure for table `sales` */

DROP TABLE IF EXISTS `sales`;

CREATE TABLE `sales` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `price` bigint NOT NULL,
  `quantity` bigint NOT NULL,
  `sale_date` date DEFAULT NULL,
  `total_price` double NOT NULL,
  `customer_id` bigint NOT NULL,
  `product_id` bigint NOT NULL,
  `order_item_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKd94vrikapjd2ews1k4lb71sfg` (`customer_id`),
  KEY `FKkxc13g7l4ioljxqyoo15nh051` (`product_id`),
  KEY `FKmfbspncsart1krrs1y3wfjdvt` (`order_item_id`),
  CONSTRAINT `FKd94vrikapjd2ews1k4lb71sfg` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `FKkxc13g7l4ioljxqyoo15nh051` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `FKmfbspncsart1krrs1y3wfjdvt` FOREIGN KEY (`order_item_id`) REFERENCES `order_items` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `sales` */

insert  into `sales`(`id`,`price`,`quantity`,`sale_date`,`total_price`,`customer_id`,`product_id`,`order_item_id`) values 
(27,150,150,'2024-10-15',22500,1,4,NULL),
(28,150,50,'2024-10-15',7500,2,4,NULL),
(29,900,100,'2024-10-15',90000,3,9,NULL),
(30,350,50,'2024-10-15',17500,2,6,NULL),
(31,460,200,'2024-10-15',92000,3,8,NULL),
(32,350,100,'2024-10-15',35000,3,7,NULL),
(33,0,100,'2024-10-15',75000,3,13,NULL),
(34,1000,150,'2024-10-17',150000,2,14,NULL);

/*Table structure for table `stock` */

DROP TABLE IF EXISTS `stock`;

CREATE TABLE `stock` (
  `id` int NOT NULL AUTO_INCREMENT,
  `catagory_name` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `quantity` double NOT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `product_id` bigint DEFAULT NULL,
  `raw_materiaes_id` bigint DEFAULT NULL,
  `warehouse_id` bigint DEFAULT NULL,
  `ware_house_id` bigint DEFAULT NULL,
  `measurement_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKeuiihog7wq4cu7nvqu7jx57d2` (`product_id`),
  KEY `FKpq1uuh2afnfqkuy8dqkrkewm5` (`raw_materiaes_id`),
  KEY `FKpx2sjs5k0wdolrps3puo2skaw` (`warehouse_id`),
  KEY `FK3x8qdgc25qum6we9ot0bhbnb8` (`ware_house_id`),
  KEY `FKouk4vmv6ojy0kqb17lpv2p3h6` (`measurement_id`),
  CONSTRAINT `FK3x8qdgc25qum6we9ot0bhbnb8` FOREIGN KEY (`ware_house_id`) REFERENCES `warehouses` (`id`),
  CONSTRAINT `FKeuiihog7wq4cu7nvqu7jx57d2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `FKouk4vmv6ojy0kqb17lpv2p3h6` FOREIGN KEY (`measurement_id`) REFERENCES `measurement` (`id`),
  CONSTRAINT `FKpq1uuh2afnfqkuy8dqkrkewm5` FOREIGN KEY (`raw_materiaes_id`) REFERENCES `raw_materiaes` (`id`),
  CONSTRAINT `FKpx2sjs5k0wdolrps3puo2skaw` FOREIGN KEY (`warehouse_id`) REFERENCES `warehouses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `stock` */

insert  into `stock`(`id`,`catagory_name`,`created_at`,`quantity`,`updated_at`,`product_id`,`raw_materiaes_id`,`warehouse_id`,`ware_house_id`,`measurement_id`) values 
(1,NULL,'2024-09-29 00:00:00.000000',0,'2024-09-29 15:37:38.374450',3,NULL,NULL,7,NULL),
(2,NULL,'2024-09-29 00:00:00.000000',0,'2024-09-29 15:38:18.914262',4,NULL,NULL,7,NULL),
(3,NULL,'2024-09-29 00:00:00.000000',0,'2024-09-29 15:46:21.692890',5,NULL,NULL,8,NULL),
(4,NULL,'2024-09-29 00:00:00.000000',0,'2024-09-29 15:47:54.050771',6,NULL,NULL,9,NULL),
(7,NULL,'2024-09-29 00:00:00.000000',0,'2024-09-29 18:58:21.265558',8,NULL,NULL,10,NULL),
(15,NULL,'2024-10-01 00:39:47.048089',0,'2024-10-01 00:39:47.048089',10,NULL,NULL,12,NULL),
(19,NULL,'2024-10-01 00:57:45.006884',0,'2024-10-01 00:57:45.006884',11,NULL,NULL,10,NULL),
(21,NULL,'2024-10-01 01:09:51.559287',0,'2024-10-01 01:09:51.559287',10,NULL,NULL,12,NULL),
(22,NULL,'2024-10-01 01:17:09.042165',0,'2024-10-01 01:17:09.042165',11,NULL,NULL,9,NULL),
(23,NULL,'2024-10-17 01:35:59.240322',0,'2024-10-17 01:35:59.242323',12,NULL,NULL,10,NULL),
(24,NULL,'2024-10-17 01:36:31.785882',0,'2024-10-17 01:36:31.785882',13,NULL,NULL,8,NULL),
(25,NULL,'2024-10-17 01:36:53.528819',0,'2024-10-17 01:36:53.528819',14,NULL,NULL,12,NULL);

/*Table structure for table `style_categories` */

DROP TABLE IF EXISTS `style_categories`;

CREATE TABLE `style_categories` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `style_categories` */

/*Table structure for table `sub_categories` */

DROP TABLE IF EXISTS `sub_categories`;

CREATE TABLE `sub_categories` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `product_category_id` bigint DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKdf169oghv4ymrk63rlxhjed7b` (`product_category_id`),
  CONSTRAINT `FKdf169oghv4ymrk63rlxhjed7b` FOREIGN KEY (`product_category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `sub_categories` */

insert  into `sub_categories`(`id`,`name`,`product_category_id`,`description`) values 
(2,'Kid\'s Wear',6,NULL),
(3,'Men\'s Wear',6,NULL),
(4,'Women\'s Wear',6,NULL),
(5,'Knitted Fabric',7,NULL),
(6,'Nonwoven Fabric',7,NULL),
(7,'Woven Fabric',7,NULL),
(8,'Blended Yarn',8,NULL);

/*Table structure for table `suppliers` */

DROP TABLE IF EXISTS `suppliers`;

CREATE TABLE `suppliers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `contact_person` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `organization` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `country_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKq5uvp89ra4ksaty5ghyaw4kjr` (`email`),
  KEY `FKn1iyuiw0xgggncfk4joxfx9y` (`country_id`),
  CONSTRAINT `FKn1iyuiw0xgggncfk4joxfx9y` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `suppliers` */

insert  into `suppliers`(`id`,`address`,`contact_person`,`created_at`,`email`,`organization`,`phone`,`status`,`updated_at`,`name`,`country_id`) values 
(14,'B-52, Sector-2, Noida-201301,\nUttar Pradesh, INDIA','Mr. Vimal Singha','2024-09-28 14:52:48.802892','manglamapparels@gmail.com','Manglam Apparels Pvt. Ltd','+91-0120 4320133','Germents','2024-09-30 18:09:28.072413','Mrs. Anjana Singhal',5),
(15,'The NoName Company\n4400 GLF, Gardenia, Kalindi Hills\nSector 49, Faridabad\nHaryana 121001 India','Mr Asok Mahata','2024-09-28 16:28:26.744591','hello@nonameglobal.com','The NoName Company','+91-9717 508 508','Germents','2024-09-28 18:06:15.049428','Mr Asok Mahata',5),
(17,'7-1-17, Daikaidori, Hyogo, Kobe 652-0803, Japan','Akashi-shi','2024-10-01 00:21:20.739476','akashi-shi@gmail.com','TOMOE SANGYO CO., LTD','+81-78-576-1088','Row Metaril&chemical','2024-10-01 00:21:20.739476','Akashi-shi',12);

/*Table structure for table `to_do_task` */

DROP TABLE IF EXISTS `to_do_task`;

CREATE TABLE `to_do_task` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `status` enum('COMPLETED','PENDING','RUNNING') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `to_do_task` */

insert  into `to_do_task`(`id`,`description`,`status`) values 
(32,'make an appointment','PENDING'),
(33,'Merying with BMG','PENDING');

/*Table structure for table `token` */

DROP TABLE IF EXISTS `token`;

CREATE TABLE `token` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `is_logged_out` bit(1) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKj8rfw4x0wjjyibfqq566j4qng` (`user_id`),
  CONSTRAINT `FKj8rfw4x0wjjyibfqq566j4qng` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `token` */

insert  into `token`(`id`,`is_logged_out`,`token`,`user_id`) values 
(60,'','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJuYXlhbXVsaXNsYW1AZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3Mjk4NzA0NzUsImV4cCI6MTcyOTk1Njg3NX0.WHJXo580jSv-jJxSNtaTjh0ihu9Nv52k9-sCTuXoC2Fy5LDAY2WFQDedZMO0ZIuj',25),
(61,'','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzaGFiYWJAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3Mjk4NzE1MzEsImV4cCI6MTcyOTk1NzkzMX0.u1aO9soC7I9Zp7CqwtX2Du6PbjgjHXHzah2sdDIUt5wkWZjSb2Y4tMHzeCQ3X01h',26),
(62,'','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzaGFiYWJAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3Mjk4NzE1NzEsImV4cCI6MTcyOTk1Nzk3MX0.jNv1JNB15bTeCUGK5A0xdDl74bnx3wz8EaTDWX_oyMD6xgLCxT7mxP3bdmx6KBW2',26),
(63,'','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhcm1hbkBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsImlhdCI6MTcyOTg3MTcxMiwiZXhwIjoxNzI5OTU4MTEyfQ.gVhEVMdv0tYqDBddEjOMs_WjIDKsZ24ykXGZyLrNlePvzZqtNb74C0XHcAvX46zm',27),
(64,'','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhcm1hbkBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsImlhdCI6MTcyOTg3MTgxMSwiZXhwIjoxNzI5OTU4MjExfQ.RmK-hXPhQLDtsqZ_r6NjxLhV1nJswV8omBLt2AFHSEv5awQef6Dvg8Tt_eULF727',27),
(65,'','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJuYXlhbXVsaXNsYW1AZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI5ODcyMDMxLCJleHAiOjE3Mjk5NTg0MzF9.I-qxqdrTjD8d5_K3ZebhZrCo93YP1zJGc7laOsGJvE_a7rRY46Et58wicCbuoWQa',25),
(66,'','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJuYXlhbXVsaXNsYW1AZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI5ODczNzI5LCJleHAiOjE3Mjk5NjAxMjl9.SAKwZdZuSRO8eSRTAVmme5NMzMHEPwyn4HjDPBtqF6rhwo1FeR-5fWHfgHkC29tl',25),
(67,'','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxMzAybmV5YW11bGlzbGFtbmlyb2JAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3Mjk4NzM5NTYsImV4cCI6MTcyOTk2MDM1Nn0.sv-7sVRJPwMsjXImZNilQG1Tgp3J4qRfGB8zxfK8_nmExVrUGQqfw3PqV4CIzLhX',28),
(68,'\0','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiIxMzAybmV5YW11bGlzbGFtbmlyb2JAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3Mjk4NzQwOTYsImV4cCI6MTcyOTk2MDQ5Nn0.w304gTFEjeWIxg8bPtsO2yS1blR9laaLH2jrMEZX64W2pYnMaPxb_K36WjMW2EvI',28),
(69,'','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhcm1hbkBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsImlhdCI6MTcyOTg3NDEyNiwiZXhwIjoxNzI5OTYwNTI2fQ.nPTHBy4elSu7F9CFZXuxY1Q6pnvQgv-x_xRKLOB1T9clhL1P-Z1tr2GfIK_SedeD',27),
(70,'','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzaGFiYWJAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI5ODc0MTY1LCJleHAiOjE3Mjk5NjA1NjV9.pkZ8LBsQz7hQo20RIiY-f9oSxgyIBRKJnRpQCDoKutF3iccXBqKlj37zhRYVQept',26),
(71,'\0','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzaGFiYWJAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3Mjk4NzQyMDEsImV4cCI6MTcyOTk2MDYwMX0.WfUJypsJOFsYknoLzPtY4LJ8QLiyVntoVXiXiUAhiF_-p5gg4-aAEdJWo3xZN0wS',26),
(72,'\0','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhcm1hbkBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsImlhdCI6MTcyOTg3NDU1NCwiZXhwIjoxNzI5OTYwOTU0fQ.xUSLJpiptCq69pe5rtwXQDLgbCe3gh2tgmPliArx0PIGr22-W5Yl9kokIfGOm20u',27),
(73,'\0','eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJuYXlhbXVsaXNsYW1AZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzI5ODc0NjY4LCJleHAiOjE3Mjk5NjEwNjh9.Rb37gx3jNmVyAblUJKiPWGhDTRh6tpZ8tTuvLThyobJH4oDvTnET7_BakEnPwqEh',25);

/*Table structure for table `transaction` */

DROP TABLE IF EXISTS `transaction`;

CREATE TABLE `transaction` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `date` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `transaction` */

insert  into `transaction`(`id`,`description`,`amount`,`date`) values 
(14,'Cash',100000,'2024-10-03 05:12:00.504542'),
(15,'Payoneer',150000,'2024-10-03 05:13:35.452673'),
(17,'Bank Payment',4500000,'2024-10-03 05:16:01.540722');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('ADMIN','USER') DEFAULT NULL,
  `active` bit(1) NOT NULL,
  `is_lock` bit(1) DEFAULT NULL,
  `cell` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `gender` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`email`,`image`,`name`,`password`,`role`,`active`,`is_lock`,`cell`,`address`,`dob`,`gender`) values 
(25,'nayamulislam@gmail.com','99f6e2a0-d236-475d-bb6d-f0a46a444f8d_VIP-33770.jpg','Neyamul Islam','$2a$10$2pFN/68GxCB87g35v/iba.AwgG7cV8V7Alo.KIPw.dvTwv8Wjaf/S','ADMIN','','','+880523123211','Mohammodpur, Dhaka','1994-01-02','Male'),
(26,'shabab@gmail.com','bfba2630-123a-4d44-9bea-764b4fb297a8_4RQ1v2yp_400x400.jpg','Shabab Ahamed','$2a$10$gRw.9D9jbxrygd8K9mgaa.KB5dI8275w9QbZ0dYnLOkxK32pJyV26','USER','','','+882564115656','kallanpur, Dhaka','1997-09-18','Male'),
(27,'arman@gmail.com','df115e45-5046-494f-b40e-7843d84e26e6_my-passport-photo.jpg','Arman Biswas','$2a$10$XzQ31DSx1T9cbxlYxVl5XOLRsvNEhBgygGPgdD5V5tfoVqO1WZy3i','USER','','','+88052652414','Framget, Dhaka','2000-12-19','Male'),
(28,'1302neyamulislamnirob@gmail.com','9cf82698-bea5-49f5-87bf-94832a99a6cd_IMG_20220127_163119.jpg','Neyamul Nirob','$2a$10$LEtcpCFy17ITwZR1LZhpbO8nhxZietfdwpdzdvIJu79/XWexyo/0e','ADMIN','','','+88026356511','Mohammodpur, Dhaka','1995-02-03','Male');

/*Table structure for table `warehouses` */

DROP TABLE IF EXISTS `warehouses`;

CREATE TABLE `warehouses` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `capacity` bigint NOT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `warehouses` */

insert  into `warehouses`(`id`,`capacity`,`contact`,`location`,`name`) values 
(7,150000,'+880 2 9897759','Gazipur, Gazipur, Bangladesh\nNIPPON EXPRESS (BANGLADESH) LTD.','Mawna warehouse'),
(8,100000,'+880231546154','House 5/C, Road 01,PCCL Housing Limited,Mohammadpur, Dhaka','Mohammodpur warehouse'),
(9,250000,'+88026651565','5/11 Bohoddarhat,Chattogram,Chattogram','Chattogram Warehouse'),
(10,100000,'+88096582525','D/522,Sonkor,Dhanmodi,Dhaka','Dhanmondhi warehouse'),
(12,150000,'+8803553456','59/A, Kadamtoli, Sylhet','Sylet WareHouse');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
