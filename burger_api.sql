-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 12 Juillet 2018 à 12:59
-- Version du serveur :  5.7.14
-- Version de PHP :  5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `login` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `last_connection` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `admin`
--

INSERT INTO `admin` (`id`, `login`, `password`, `last_connection`) VALUES
(1, 'admin', 'admin', '2018-04-29 19:47:07'),
(3, 'bbb', 'bbb', '2018-04-29 20:03:19');

-- --------------------------------------------------------

--
-- Structure de la table `command`
--

CREATE TABLE `command` (
  `id` int(11) NOT NULL,
  `total` float NOT NULL,
  `done` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `command`
--

INSERT INTO `command` (`id`, `total`, `done`, `date`) VALUES
(1, 20, 1, '2018-04-28'),
(2, 21, 1, '2018-05-02'),
(3, 21, 1, '2018-05-02'),
(4, 8, 1, '2018-05-03'),
(70, 13, 1, '2018-05-03'),
(71, 13, 1, '2018-05-03'),
(72, 13, 1, '2018-05-03'),
(73, 9, 1, '2018-05-05'),
(74, 9, 1, '2018-05-05'),
(75, 5, 1, '2018-05-14'),
(76, 8, 1, '2018-05-15'),
(77, 11, 1, '2018-05-15'),
(78, 11, 0, '2018-05-15'),
(79, 125, 0, '2018-05-15'),
(80, 5, 1, '2018-05-15'),
(81, 10, 0, '2018-06-22'),
(82, 10, 0, '2018-06-22'),
(83, 10, 0, '2018-06-22'),
(84, 10, 0, '2018-06-22'),
(85, 10, 0, '2018-06-22'),
(86, 10, 0, '2018-06-22'),
(87, 10, 0, '2018-06-22'),
(88, 10, 0, '2018-06-22'),
(89, 10, 0, '2018-06-22');

-- --------------------------------------------------------

--
-- Structure de la table `list_product`
--

CREATE TABLE `list_product` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_menu` int(11) NOT NULL,
  `price` float NOT NULL,
  `position` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `list_product`
--

INSERT INTO `list_product` (`id`, `id_product`, `id_menu`, `price`, `position`) VALUES
(1, 1, 1, 5, 1),
(2, 2, 1, 1, 2),
(3, 3, 1, 2, 3),
(4, 13, 2, 1, 1),
(5, 2, 2, 2, 2),
(6, 4, 2, 1, 1),
(7, 16, 3, 2, 1),
(8, 1, 3, 3, 1),
(9, 2, 3, 1, 2),
(10, 3, 3, 2, 3),
(11, 15, 3, 1.5, 3);

-- --------------------------------------------------------

--
-- Structure de la table `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `highlight` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `available` int(11) NOT NULL,
  `id_promotion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `menu`
--

INSERT INTO `menu` (`id`, `name`, `description`, `highlight`, `size`, `available`, `id_promotion`) VALUES
(1, 'menu burger1', 'menu avec le burger 1', 1, 2, 1, 1),
(2, 'menu pas promo', 'pas de promo', 1, 2, 1, NULL),
(3, 'sananes', 'C', 0, 3, 1, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `highlight` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `available` int(11) NOT NULL,
  `id_promotion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `highlight`, `category`, `available`, `id_promotion`) VALUES
(1, 'burger1', 10, 1, 1, 1, 2),
(2, 'frite', 1, 1, 2, 1, 2),
(3, 'coca - 25', 3, 1, 3, 1, 2),
(4, 'burger2', 5, 1, 1, 1, 1000),
(13, 'BIG FAT', 2.5, 0, 1, 1, 1000),
(14, 'glace a la fraise', 1202, 1, 4, 1, 2),
(15, 'Pomme', 3, 1, 5, 1, 1000),
(16, 'esgi burger', -5, 1, 1, 1, 1000),
(17, 'arez', 59, 1, 1, 1, 1000);

-- --------------------------------------------------------

--
-- Structure de la table `productcommand`
--

CREATE TABLE `productcommand` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_command` int(11) NOT NULL,
  `id_menu` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `productcommand`
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
(38, 1, 76, 1),
(39, 2, 76, 1),
(40, 3, 76, 1),
(41, 1, 77, 1),
(42, 2, 77, 1),
(43, 3, 77, 1),
(44, 4, 77, 2),
(45, 2, 77, 2),
(46, 4, 78, NULL),
(47, 15, 78, NULL),
(48, 13, 78, 2),
(49, 2, 78, 2),
(50, 4, 79, 2),
(51, 2, 79, 2),
(52, 14, 79, NULL),
(53, 13, 79, NULL),
(54, 1, 80, 3),
(55, 2, 80, 3),
(56, 15, 80, 3),
(57, 4, 81, NULL),
(58, 4, 81, NULL),
(59, 4, 82, NULL),
(60, 4, 82, NULL),
(61, 4, 83, NULL),
(62, 4, 83, NULL),
(63, 4, 84, NULL),
(64, 4, 84, NULL),
(65, 4, 85, NULL),
(66, 4, 85, NULL),
(67, 4, 86, NULL),
(68, 4, 86, NULL),
(69, 4, 87, NULL),
(70, 4, 87, NULL),
(71, 4, 88, NULL),
(72, 4, 88, NULL),
(73, 4, 89, NULL),
(74, 4, 89, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `promotion`
--

CREATE TABLE `promotion` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `prerequisite` varchar(255) NOT NULL,
  `available` int(11) NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `promotion`
--

INSERT INTO `promotion` (`id`, `description`, `prerequisite`, `available`, `start_date`, `end_date`) VALUES
(1, 'Navigo', 'IL FAUDRA LA CARTE NAVIGO', 1, '2018-04-11', '2018-05-10'),
(2, 'very', 'salope', 1, '2018-07-06', '2018-07-10'),
(1000, 'Default', 'Default', 1, NULL, NULL);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `command`
--
ALTER TABLE `command`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `list_product`
--
ALTER TABLE `list_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_menu` (`id_menu`),
  ADD KEY `id_produit` (`id_product`);

--
-- Index pour la table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_promotion` (`id_promotion`);

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_promotion` (`id_promotion`);

--
-- Index pour la table `productcommand`
--
ALTER TABLE `productcommand`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_command` (`id_command`),
  ADD KEY `id_menu` (`id_menu`),
  ADD KEY `productcommand_ibfk_1` (`id_product`);

--
-- Index pour la table `promotion`
--
ALTER TABLE `promotion`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `command`
--
ALTER TABLE `command`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;
--
-- AUTO_INCREMENT pour la table `list_product`
--
ALTER TABLE `list_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT pour la table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT pour la table `productcommand`
--
ALTER TABLE `productcommand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;
--
-- AUTO_INCREMENT pour la table `promotion`
--
ALTER TABLE `promotion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1001;
--
-- Contraintes pour les tables exportées
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

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
