# ************************************************************
# Sequel Ace SQL dump
# Version 20095
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: 127.0.0.1 (MySQL 9.3.0)
# Database: blog_db
# Generation Time: 2025-10-30 16:15:42 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table authors
# ------------------------------------------------------------

DROP TABLE IF EXISTS `authors`;

CREATE TABLE `authors` (
  `author_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `bio` text,
  `date_joined` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`author_id`),
  UNIQUE KEY `email` (`email`),
  KEY `idx_author_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;

INSERT INTO `authors` (`author_id`, `name`, `email`, `password`, `bio`, `date_joined`, `created_at`, `updated_at`)
VALUES
	(1,'John Smith','john.smith@example.com','$2y$10$example_hashed_password_1','Tech enthusiast and full-stack developer with 5 years of experience.','2024-01-15 10:30:00','2025-10-30 16:09:03','2025-10-30 16:09:03'),
	(2,'Sarah Johnson','sarah.johnson@example.com','$2y$10$example_hashed_password_2','Content creator specializing in web development and design trends.','2024-02-20 14:15:00','2025-10-30 16:09:03','2025-10-30 16:09:03'),
	(3,'Mike Davis','mike.davis@example.com','$2y$10$example_hashed_password_3','Database architect and backend specialist with expertise in MySQL and PostgreSQL.','2024-03-10 09:45:00','2025-10-30 16:09:03','2025-10-30 16:09:03');

/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table blog_posts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `blog_posts`;

CREATE TABLE `blog_posts` (
  `post_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `summary` text NOT NULL,
  `content` longtext NOT NULL,
  `author_id` int NOT NULL,
  `date_written` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`post_id`),
  KEY `idx_post_author` (`author_id`),
  KEY `idx_post_date` (`date_written`),
  KEY `idx_post_title` (`title`),
  CONSTRAINT `blog_posts_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `authors` (`author_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `blog_posts` WRITE;
/*!40000 ALTER TABLE `blog_posts` DISABLE KEYS */;

INSERT INTO `blog_posts` (`post_id`, `title`, `summary`, `content`, `author_id`, `date_written`, `created_at`, `updated_at`)
VALUES
	(1,'Getting Started with MySQL','A comprehensive guide to setting up and using MySQL database.','MySQL is one of the most popular relational database management systems...',1,'2024-10-01 10:00:00','2025-10-30 16:09:03','2025-10-30 16:09:03'),
	(2,'CSS Grid vs Flexbox','Understanding when to use CSS Grid versus Flexbox for layouts.','Both CSS Grid and Flexbox are powerful layout tools, but they serve different purposes...',2,'2024-10-15 14:30:00','2025-10-30 16:09:03','2025-10-30 16:09:03'),
	(3,'Database Optimization Tips','Essential techniques for optimizing database performance.','Database performance is crucial for web applications. Here are key optimization strategies...',3,'2024-10-20 11:15:00','2025-10-30 16:09:03','2025-10-30 16:09:03'),
	(4,'Modern JavaScript Features','Exploring ES6+ features that every developer should know.','JavaScript has evolved significantly with ES6 and beyond. Let us explore the most useful features...',1,'2024-10-25 16:20:00','2025-10-30 16:09:03','2025-10-30 16:09:03');

/*!40000 ALTER TABLE `blog_posts` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
