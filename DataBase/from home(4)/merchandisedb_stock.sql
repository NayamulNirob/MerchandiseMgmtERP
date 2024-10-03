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
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (1,NULL,'2024-09-29 00:00:00.000000',0,'2024-09-29 15:37:38.374450',3,NULL,NULL,7,NULL),(2,NULL,'2024-09-29 00:00:00.000000',0,'2024-09-29 15:38:18.914262',4,NULL,NULL,7,NULL),(3,NULL,'2024-09-29 00:00:00.000000',0,'2024-09-29 15:46:21.692890',5,NULL,NULL,8,NULL),(4,NULL,'2024-09-29 00:00:00.000000',0,'2024-09-29 15:47:54.050771',6,NULL,NULL,9,NULL),(7,NULL,'2024-09-29 00:00:00.000000',0,'2024-09-29 18:58:21.265558',8,NULL,NULL,10,NULL),(15,NULL,'2024-10-01 00:39:47.048089',0,'2024-10-01 00:39:47.048089',10,NULL,NULL,12,NULL),(19,NULL,'2024-10-01 00:57:45.006884',0,'2024-10-01 00:57:45.006884',11,NULL,NULL,10,NULL),(21,NULL,'2024-10-01 01:09:51.559287',0,'2024-10-01 01:09:51.559287',10,NULL,NULL,12,NULL),(22,NULL,'2024-10-01 01:17:09.042165',0,'2024-10-01 01:17:09.042165',11,NULL,NULL,9,NULL);
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-04  4:12:07
