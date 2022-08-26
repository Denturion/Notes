-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 26, 2022 at 10:12 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `documents`
--

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` int(11) NOT NULL,
  `documentName` varchar(128) DEFAULT NULL,
  `documentText` varchar(512) DEFAULT NULL,
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`id`, `documentName`, `documentText`, `createDate`) VALUES
(1, 'document1', '<p><span style=\"background-color: rgb(35, 111, 161);\">Anders roliga saker</span></p>', '2022-06-08 10:11:22'),
(2, 'document2', '<p><span style=\"background-color: rgb(224, 62, 45);\">Hej, det h&auml;r &auml;r ocks&aring; ett dokument!</span></p>', '2022-06-08 10:12:11'),
(9, 'Davids dokument', '<p>H&auml;r st&aring;r det saker.</p>', '2022-06-07 22:00:00'),
(14, 'Davids dokument', '<p>Fler grejs &auml;n s&aring;!</p>', '2022-08-18 22:00:00'),
(15, 'Ytterligare dokument', 'Massa fler grejs.', '2022-08-24 22:00:00'),
(16, 'Davids text', '<p>Krimskrams</p>', '2022-08-25 17:27:37'),
(19, 'David', '<p><span style=\"background-color: rgb(241, 196, 15);\"><strong>Hej!</strong></span></p>', '2022-08-25 17:34:09'),
(20, 'David', '<p><span style=\"background-color: rgb(241, 196, 15);\"><strong>Hej!</strong></span></p>', '2022-08-25 17:34:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
