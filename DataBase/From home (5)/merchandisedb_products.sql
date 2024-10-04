-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: merchandisedb
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,'2024-10-31','We are a professional manufacturer and exporter and our expertise is in Girl Unicorn Onesie . \nThese Wrap yourself with our exquisite Girl Unicorn...',0,'c2b6bc7d-f820-4756-ac31-3311a2607bf5_24218606_2_girl-unicorn-onesie-supplier.webp','Girl Unicorn Onesie',52500,200,'slqq4','2024-09-27',250,5,52500,NULL,NULL,NULL,NULL,NULL),(4,'2024-10-24','We introduce our company as a well renowned maker and exporter of Kid\'s Formal Shorts . We have achieved expertise in catering to the requirements...',0,'5ef636ed-89c5-4616-8edd-b10bd39455b4_24221923_0_twill-short-frt-removebg-preview.webp','Kid\'s Formal Shorts',15900,150,'wwrsw','2024-09-28',100,6,15900,NULL,NULL,NULL,NULL,NULL),(5,'2024-11-01','We introduce our self as a pioneer in the field of Women\'s Long Denim Skirt . Our Customizable Women\'s Long Denim Skirt with Front pocket and Slit...',0,'228836dc-5364-4ec6-bc06-76592ff4a039_24220755_0_10.webp','Women\'s Long Denim Skirt',155250,900,'ywjv5','2024-09-28',150,15,155250,4,NULL,NULL,NULL,'Medium,Large,Xlarge'),(6,'2024-10-31','We are a top-ranking company which is specialized in Kids Wool Half-Sleeve Knee-Length Dress . A perfect fusion of classic elegance and...',0,'42ac1ffb-93e6-4658-be0f-ee9558ddf223_24218604_0_651d4f60-e205-4d98-a5b2-b632-3d5478a1.webp',' Kids Wool Half-Sleeve Knee-Length Dress',261625,350,'pu67q','2024-09-28',650,15,261625,2,15,NULL,NULL,'Xsmall,Small,Medium'),(7,'2024-11-29','We introduce our company as a well renowned maker and exporter of Kids Stylish Sweater . We offer kids\' sweaters made from a variety of materials...',0,'6c62644f-53e7-4cda-92b3-fcfb87121089_24221245_7_kids-stylish-sweater.webp','Kids Stylish Sweater',265650,350,'puujo','2024-09-28',690,10,265650,2,14,NULL,NULL,NULL),(8,'2024-11-28','We get huge pleasure and pride in introducing our company as one of the leading manufacturers & exporters of Men\'s Gym Half-sleeve T-shirts.',0,'f4940112-8da9-4c86-bfda-729c6512051d_23217766_1_58.webp','Men\'s Gym Half-sleeve T-shirts Supplier',241500,460,'9vnhv','2024-09-30',500,5,241500,3,15,NULL,NULL,'Xsmall,Small,Medium'),(9,'2024-09-30','We take immense pleasure and pride in introducing our company as one of the leading manufacturers &amp; exporters of Men Stylish Sweater . We...',-5000,'39eeb2f9-41f2-4eec-9aaf-ecf4b7265dc3_23217766_1_58_59 (1).webp','Men Stylish Sweater',490000,900,'9vrzq','2024-09-29',500,10,495000,3,14,NULL,NULL,NULL),(10,NULL,'Our company excels in the manufacturing of Knitted Jacquard Fabric. Our exquisite Luxury Embroidered Jacquard is a unique weaving technique that integrates intricate patterns directly into the material...',-15000,'114bed77-b439-4426-9dcd-dbd74af21eed_23217916_0_2.webp','Knitted Jacquard Fabric',100000,1000,'xp4th',NULL,100,15,115000,5,15,NULL,NULL,'Large'),(11,NULL,'We are considered as one of the most remarkable and renowned manufacturer &amp; exporter of Dyed Warp Polyester Fabric . This enables us to cater...',0,'cb8ac4c8-5058-4317-b446-181249660141_16121030_2_poyerster-fabric-400-gsm-dyed-wrap-supplier.webp','Dyed Warp Polyester Fabric',68750,2.5,'jzup4',NULL,25000,10,68750,5,17,NULL,NULL,'Kg'),(12,NULL,'We are reckoned as an established manufacturer and exporter of Woolen Blends for knitting purpose. We would like to sell yarn in dyed pattern...',0,'72d662f5-341d-4513-af56-7dd86f6c7fde_24222610_0_spun-polyester-yarn.webp','Woolen Blends : Dyed, Knitting, 10-80, Wool, Linen, Polyester, Cotton',1058400,900,'poquw','2024-10-04',980,20,1058400,8,17,NULL,NULL,'Kg'),(13,NULL,'Riding on unfathomable volumes of industrial expertise, we are providing a broad array of Silk Yarn .',0,'436e7ee6-ec52-4ae8-8d4f-d345c0df5e1a_1361213_1_20131004075055063238_2.webp','Silk Yarn',585000,750,'5ompx','2024-10-04',650,20,585000,8,14,NULL,NULL,'Kg'),(14,NULL,'We are manufacturer &amp; exporter of FSC BCI Bamboo Cotton Yarn made out of 70% Bamboo 30% Cotton / 50% Bamboo / 50% Cotton. Can supply these...',0,'8152651e-bada-47fd-baf7-efca6b0d4dc2_20181741_0_bamboo-yarn.webp','FSC BCI Bamboo Cotton Yarn',1008000,1000,'ppvh5','2024-10-04',960,5,1008000,8,15,NULL,NULL,'Kg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-04  7:17:10
