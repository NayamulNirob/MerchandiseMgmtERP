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
-- Table structure for table `inventory_items`
--

DROP TABLE IF EXISTS `inventory_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory_items`
--

LOCK TABLES `inventory_items` WRITE;
/*!40000 ALTER TABLE `inventory_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `inventory_items` ENABLE KEYS */;
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
