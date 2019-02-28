-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  jeu. 28 fév. 2019 à 23:54
-- Version du serveur :  5.7.24
-- Version de PHP :  7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `burger_api`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `last_connection` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`id`, `login`, `password`, `last_connection`) VALUES
(1, 'admin', 'admin', '2018-04-29 19:47:07'),
(3, 'bbb', 'bbb', '2018-04-29 20:03:19');

-- --------------------------------------------------------

--
-- Structure de la table `command`
--

DROP TABLE IF EXISTS `command`;
CREATE TABLE IF NOT EXISTS `command` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `total` float NOT NULL,
  `done` int(11) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=146 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `command`
--

INSERT INTO `command` (`id`, `total`, `done`, `date`) VALUES
(1, 20, 1, '2018-04-28'),
(2, 21, 1, '2018-05-02'),
(3, 21, 1, '2018-05-02'),
(70, 13, 1, '2018-05-03'),
(71, 13, 1, '2018-05-03'),
(72, 13, 1, '2018-05-03'),
(73, 9, 1, '2018-05-05'),
(74, 9, 1, '2018-05-05'),
(75, 5, 0, '2018-05-14'),
(76, 58, 0, '2018-07-12'),
(77, 58, 0, '2019-02-28'),
(78, 58, 0, '2019-02-28'),
(79, 58, 0, '2019-02-28'),
(80, 58, 0, '2019-02-28'),
(81, 58, 0, '2018-07-12'),
(82, 58, 0, '2018-07-12'),
(83, 58, 0, '2018-07-12'),
(84, 58, 0, '2018-07-12'),
(85, 70, 0, '2018-07-12'),
(86, 58, 0, '2019-02-28'),
(87, 70, 0, '2018-07-12'),
(88, 70, 0, '2018-07-12'),
(89, 58, 0, '2019-02-28'),
(90, 70, 0, '2018-07-12'),
(92, 70, 0, '2018-07-12'),
(93, 58, 0, '2019-02-28'),
(94, 70, 0, '2018-07-12'),
(95, 70, 0, '2018-07-12'),
(96, 70, 0, '2018-07-12'),
(97, 150, 0, '2019-02-28'),
(98, 150, 0, '2019-02-28'),
(99, 150, 0, '2019-02-28'),
(100, 150, 0, '2019-02-28'),
(101, 150, 0, '2019-02-28'),
(102, 150, 0, '2019-02-28'),
(103, 150, 0, '2019-02-28'),
(104, 150, 0, '2019-02-28'),
(105, 150, 0, '2019-02-28'),
(106, 150, 0, '2019-02-28'),
(107, 150, 0, '2019-02-28'),
(108, 150, 0, '2019-02-28'),
(109, 150, 0, '2019-02-28'),
(110, 150, 0, '2019-02-28'),
(111, 2, 1, '2000-12-31'),
(112, 2, 1, '2000-12-31'),
(113, 2, 1, '2000-12-31'),
(114, 2, 1, '2000-12-31'),
(115, 2, 1, '2000-12-31'),
(116, 2, 1, '2000-12-31'),
(117, 2, 1, '2000-12-31'),
(118, 2, 1, '2000-12-31'),
(119, 2, 1, '2000-12-31'),
(120, 2, 1, '2000-12-31'),
(121, 2, 1, '2000-12-31');

-- --------------------------------------------------------

--
-- Structure de la table `list_product`
--

DROP TABLE IF EXISTS `list_product`;
CREATE TABLE IF NOT EXISTS `list_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_product` int(11) NOT NULL,
  `id_menu` int(11) NOT NULL,
  `price` float NOT NULL,
  `position` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_menu` (`id_menu`),
  KEY `id_produit` (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `list_product`
--

INSERT INTO `list_product` (`id`, `id_product`, `id_menu`, `price`, `position`) VALUES
(1, 1, 1, 5, 1),
(2, 2, 1, 1, 2),
(3, 3, 1, 2, 3),
(4, 13, 2, 1, 1),
(5, 2, 2, 2, 2),
(6, 4, 2, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `menu`
--

DROP TABLE IF EXISTS `menu`;
CREATE TABLE IF NOT EXISTS `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `highlight` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `available` int(11) NOT NULL,
  `id_promotion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_promotion` (`id_promotion`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `menu`
--

INSERT INTO `menu` (`id`, `name`, `description`, `highlight`, `size`, `available`, `id_promotion`) VALUES
(1, 'menu burger1', 'menu avec le burger 1', 1, 2, 1, 1),
(2, 'menu pas promo', 'pas de promo', 1, 2, 1, NULL),
(4, 'ahmed', 'un gentil', 1, 86, 0, 2),
(5, 'Menu test', 'Super menu', 1, 5, 1, 2),
(6, 'Menu test', 'Super menu', 1, 5, 1, 2),
(7, 'haha', 'un méchant', 0, 86, 1, 1),
(8, 'Menu test', 'Super menu', 1, 5, 1, 2),
(9, 'Menu test', 'Super menu', 1, 5, 1, 2),
(10, 'Menu test', 'Super menu', 1, 5, 1, 2),
(11, 'Menu test', 'Super menu', 1, 5, 1, 2),
(12, 'Menu test', 'Super menu', 1, 5, 1, 2),
(13, 'Menu modifié', 'Moins bien menu', 0, 10, 0, 1),
(14, 'Menu test', 'Super menu', 1, 5, 1, 2),
(15, 'Menu test', 'Super menu', 1, 5, 1, 2),
(17, 'Menu modifié', 'Moins bien menu', 0, 10, 0, 1),
(18, 'Menu modifié', 'Moins bien menu', 0, 10, 0, 1),
(19, 'Menu modifié', 'Moins bien menu', 0, 10, 0, 1),
(20, 'Menu modifié', 'Moins bien menu', 0, 10, 0, 1),
(21, 'Menu modifié', 'Moins bien menu', 0, 10, 0, 1),
(22, 'Menu modifié', 'Moins bien menu', 0, 10, 0, 1);

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `highlight` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `available` int(11) NOT NULL,
  `id_promotion` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_promotion` (`id_promotion`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `highlight`, `category`, `available`, `id_promotion`) VALUES
(1, 'burger1', 10, 1, 1, 1, 2),
(2, 'frite', 1, 1, 2, 1, 2),
(3, 'coca - 25', 3, 1, 3, 1, 2),
(4, 'burger2', 5, 1, 1, 1, NULL),
(13, 'BIG FAT', 2.5, 0, 1, 1, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `productcommand`
--

DROP TABLE IF EXISTS `productcommand`;
CREATE TABLE IF NOT EXISTS `productcommand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_product` int(11) NOT NULL,
  `id_command` int(11) NOT NULL,
  `id_menu` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_command` (`id_command`),
  KEY `id_menu` (`id_menu`),
  KEY `productcommand_ibfk_1` (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=228 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `productcommand`
--

INSERT INTO `productcommand` (`id`, `id_product`, `id_command`, `id_menu`) VALUES
(25, 13, 73, 2),
(26, 2, 73, 2),
(27, 13, 73, 2),
(28, 2, 73, 2),
(29, 13, 73, 2),
(30, 2, 73, 2),
(31, 13, 74, 2),
(32, 2, 74, 2),
(33, 13, 74, 2),
(34, 2, 74, 2),
(35, 2, 74, 2),
(36, 13, 74, 2),
(37, 4, 75, NULL),
(38, 4, 76, NULL),
(39, 4, 76, NULL),
(40, 4, 77, NULL),
(41, 4, 77, NULL),
(42, 4, 78, NULL),
(43, 4, 78, NULL),
(44, 4, 79, NULL),
(45, 4, 79, NULL),
(46, 4, 80, NULL),
(47, 4, 80, NULL),
(48, 4, 81, NULL),
(49, 4, 81, NULL),
(50, 4, 82, NULL),
(51, 4, 82, NULL),
(52, 4, 83, NULL),
(53, 4, 83, NULL),
(54, 4, 84, NULL),
(55, 4, 84, NULL),
(56, 4, 85, NULL),
(57, 4, 85, NULL),
(58, 4, 86, NULL),
(59, 4, 86, NULL),
(60, 4, 87, NULL),
(61, 4, 87, NULL),
(62, 4, 88, NULL),
(63, 4, 88, NULL),
(64, 4, 89, NULL),
(65, 4, 89, NULL),
(66, 4, 90, NULL),
(67, 4, 90, NULL),
(70, 4, 92, NULL),
(71, 4, 92, NULL),
(72, 4, 93, NULL),
(73, 4, 93, NULL),
(74, 4, 94, NULL),
(75, 4, 94, NULL),
(76, 4, 95, NULL),
(77, 4, 95, NULL),
(78, 4, 96, NULL),
(79, 4, 96, NULL),
(80, 4, 97, NULL),
(81, 4, 97, NULL),
(82, 4, 98, NULL),
(83, 4, 98, NULL),
(84, 4, 81, 6),
(85, 4, 99, NULL),
(86, 4, 99, NULL),
(88, 4, 81, 6),
(89, 4, 81, 6),
(90, 4, 100, NULL),
(91, 4, 100, NULL),
(93, 4, 101, NULL),
(94, 4, 101, NULL),
(96, 4, 102, NULL),
(97, 4, 102, NULL),
(98, 4, 81, 6),
(99, 4, 103, NULL),
(100, 4, 103, NULL),
(101, 4, 81, 6),
(102, 4, 104, NULL),
(103, 4, 104, NULL),
(104, 4, 81, 6),
(105, 4, 105, NULL),
(106, 4, 105, NULL),
(107, 4, 81, 6),
(108, 4, 106, NULL),
(109, 4, 106, NULL),
(110, 4, 81, 6),
(111, 4, 107, NULL),
(112, 4, 107, NULL),
(113, 4, 81, 6),
(114, 4, 108, NULL),
(115, 4, 108, NULL),
(116, 4, 81, 6),
(117, 4, 109, NULL),
(118, 4, 109, NULL),
(119, 4, 81, 6),
(120, 4, 110, NULL),
(121, 4, 110, NULL),
(146, 4, 81, 6),
(147, 4, 119, NULL),
(148, 4, 119, NULL),
(149, 4, 81, 6),
(150, 4, 120, NULL),
(151, 4, 120, NULL),
(152, 4, 81, 6),
(153, 4, 121, NULL),
(154, 4, 121, NULL),
(155, 4, 81, 6),
(158, 4, 81, 6),
(161, 4, 81, 6),
(164, 4, 81, 6),
(167, 4, 81, 6),
(170, 4, 81, 6),
(173, 4, 81, 6),
(176, 4, 81, 6),
(179, 4, 81, 6),
(182, 4, 81, 6),
(185, 4, 81, 6),
(188, 4, 81, 6),
(191, 4, 81, 6),
(194, 4, 81, 6),
(197, 4, 81, 6),
(200, 4, 81, 6),
(203, 4, 81, 6),
(206, 4, 81, 6),
(209, 4, 81, 6),
(212, 4, 81, 6),
(215, 4, 81, 6),
(218, 4, 81, 6),
(221, 4, 81, 6),
(224, 4, 81, 6),
(227, 4, 81, 6);

-- --------------------------------------------------------

--
-- Structure de la table `promotion`
--

DROP TABLE IF EXISTS `promotion`;
CREATE TABLE IF NOT EXISTS `promotion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `prerequisite` varchar(255) NOT NULL,
  `available` int(11) NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `promotion`
--

INSERT INTO `promotion` (`id`, `description`, `prerequisite`, `available`, `start_date`, `end_date`) VALUES
(1, 'Navigo', 'IL FAUDRA LA CARTE NAVIGO', 1, NULL, NULL),
(2, 'very burger', 'il faut de l\'argent', 1, NULL, NULL);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `list_product`
--
ALTER TABLE `list_product`
  ADD CONSTRAINT `list_product_ibfk_1` FOREIGN KEY (`id_menu`) REFERENCES `menu` (`id`),
  ADD CONSTRAINT `list_product_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`);

--
-- Contraintes pour la table `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`id_promotion`) REFERENCES `promotion` (`id`);

--
-- Contraintes pour la table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`id_promotion`) REFERENCES `promotion` (`id`);

--
-- Contraintes pour la table `productcommand`
--
ALTER TABLE `productcommand`
  ADD CONSTRAINT `productcommand_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `productcommand_ibfk_2` FOREIGN KEY (`id_command`) REFERENCES `command` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
