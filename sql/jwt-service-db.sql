-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 22, 2020 at 04:53 AM
-- Server version: 5.7.24
-- PHP Version: 7.2.14
CREATE DATABASE `jwt-service-db` COLLATE utf8_bin;
Use jwt-service-db;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jwt-service-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE IF NOT EXISTS `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(11),
(1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` bigint(20) NOT NULL,
  `active` bit(1) DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  `permissions` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `roles` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `active`, `email`, `password`, `permissions`, `roles`, `username`) VALUES
(1, b'1', 'user@gmail.com', '$2a$10$0p3hL42Nhvy2mg1Zykvd1OZ.zHuswgJC3NYOaIOTwnzwJfCFXeR6S', '', 'USER', 'user'),
(2, b'1', 'admin@gmail.com', '$2a$10$4HLseWBbdd2pJrT5AupG1euoA5LVA2UpB2eQqR7iSOUu2D.QkWNGy', 'ACCESS_TEST1,ACCESS_TEST2', 'ADMIN', 'admin'),
(3, b'1', 'manager@gmail.com', '$2a$10$IBIVVLBeDqHrz/H6cFKkmu1keyjURAHqkvtn8abr.RnysdwpclQXy', 'ACCESS_TEST1', 'MANAGER', 'manager'),
(10, b'1', 'eljmootez@gmail.com', '$2a$10$6KWaKzkD7ytkcFJbm6cdHOrY6Gfuj0zPIa/vMetC8JzrPVyMnSqX.', '', 'CUSTOMER', 'mootezElj');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
