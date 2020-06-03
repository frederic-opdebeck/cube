-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  mer. 03 juin 2020 à 09:39
-- Version du serveur :  5.7.26
-- Version de PHP :  7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `cube`
--

-- --------------------------------------------------------

--
-- Structure de la table `img`
--

CREATE TABLE `img` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom` varchar(31) DEFAULT NULL,
  `id_questions` int(10) UNSIGNED NOT NULL,
  `description` varchar(63) DEFAULT NULL COMMENT 'Dans notre JSON d’origine, img correspond à :\n‘ img ‘ : [‘q0’ : ‘q0_0.jpg’]\nSi plusieurs images :\n‘ Img ‘ : [‘q0’ : ‘q0_0.jpg’,‘q0’ : ‘q0_1.jpg’,‘q0’ : ‘q0_2.jpg’]\n'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `img`
--

INSERT INTO `img` (`id`, `nom`, `id_questions`, `description`) VALUES
(1, 'q0_0.jgp', 1, NULL),
(2, 'q1_0.jgp', 2, NULL),
(3, 'q2_0.jpg', 3, NULL),
(4, 'q3_0.jgp', 4, NULL),
(5, 'q4_0.jgp', 5, NULL),
(6, NULL, 6, NULL),
(7, 'q6_0.jpg', 7, NULL),
(8, 'q7_0.jpg', 8, NULL),
(9, 'q8_0.jpg', 9, NULL),
(10, 'q8_1.jpg', 9, NULL),
(11, 'q8_2.jpg', 9, NULL),
(12, 'q9_0.jpg', 10, NULL),
(13, 'q9bis_0.jpg', 11, NULL),
(14, 'q10_0.jpg', 12, NULL),
(15, 'q10_1.jpg', 12, NULL),
(16, NULL, 13, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `questions`
--

CREATE TABLE `questions` (
  `id` int(10) UNSIGNED NOT NULL,
  `question` varchar(255) NOT NULL,
  `type` enum('radio','select','nombre','null') NOT NULL DEFAULT 'radio',
  `description` varchar(63) DEFAULT NULL COMMENT 'questions, correspond à :\nQuestions[q0]'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `questions`
--

INSERT INTO `questions` (`id`, `question`, `type`, `description`) VALUES
(1, 'Quelle est l\'adresse de votre terrain ?', 'radio', NULL),
(2, 'Est-ce le terrain que vous recherchez?', 'radio', NULL),
(3, 'A quoi servira votre CUBE ?', 'radio', NULL),
(4, 'Fin du questionnaire', 'null', NULL),
(5, 'Voulez-vous une salle de bain ou une cuisine ?', 'radio', NULL),
(6, 'Avez vous une autre structure sur votre terrain?', 'radio', NULL),
(7, 'Quel type de structure est-ce?', 'radio', NULL),
(8, 'Voulez-vous détruire cette structure ?', 'radio', NULL),
(9, 'Quelle type de consctruction aimez-vous le plus ?', 'radio', NULL),
(10, 'Voulez-vous sauvegarder votre rapport ?', 'radio', NULL),
(11, 'Voulez-vous nous l\'envoyer par email ?', 'radio', NULL),
(12, 'Achetez-vous votre CUBE ?', 'radio', NULL),
(13, 'Envoie vers une page de paiement', 'radio', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `reponses`
--

CREATE TABLE `reponses` (
  `id` int(10) UNSIGNED NOT NULL,
  `reponse` varchar(63) NOT NULL,
  `id_questions` int(10) UNSIGNED NOT NULL,
  `description` varchar(63) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `reponses`
--

INSERT INTO `reponses` (`id`, `reponse`, `id_questions`, `description`) VALUES
(1, 'Commencer', 1, NULL),
(2, 'Oui', 2, NULL),
(3, 'Non', 2, NULL),
(4, 'Chambre d\'hôte', 3, NULL),
(5, 'Commerce', 3, NULL),
(6, 'Demenagement', 3, NULL),
(7, 'Bureau', 3, NULL),
(8, 'Piscine', 3, NULL),
(9, 'Autre', 3, NULL),
(10, '', 4, NULL),
(11, 'Oui', 5, NULL),
(12, 'Non', 5, NULL),
(13, 'Oui', 6, NULL),
(14, 'Non', 6, NULL),
(15, 'Garage', 7, NULL),
(16, 'Espace de vie avec plomberie', 7, NULL),
(17, 'Espace de vie sans plomberie', 7, NULL),
(18, 'Autre', 7, NULL),
(19, 'Oui', 8, NULL),
(20, 'Non', 8, NULL),
(21, 'A', 9, NULL),
(22, 'B', 9, NULL),
(23, 'C', 9, NULL),
(24, 'Oui', 10, NULL),
(25, 'Non', 10, NULL),
(28, 'Oui', 11, NULL),
(29, 'Non', 11, NULL),
(30, 'Oui', 12, NULL),
(31, 'Non', 12, NULL),
(32, '', 13, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `login` varchar(80) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `email` varchar(150) NOT NULL,
  `nom` varchar(55) NOT NULL,
  `prenom` varchar(55) NOT NULL,
  `adresse` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `login`, `pass`, `email`, `nom`, `prenom`, `adresse`) VALUES
(1, 'user', '$2y$10$d3xTYUGgwsjxEm/pmuLy8OipqPKZGPa8oMVRN2S8SE.X13/uelrUK', 'user@user.user', 'user', 'user', 0),
(2, 'fred', '$2y$10$ByyNCt2sBeIE.nXAZ/ivn.3w7YLwd7a77zDITy6zHIOpLHom5bs7i', 'fred@fred.fred', 'fred', 'fred', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `img`
--
ALTER TABLE `img`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_question` (`id_questions`);

--
-- Index pour la table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `reponses`
--
ALTER TABLE `reponses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_question` (`id_questions`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `img`
--
ALTER TABLE `img`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `reponses`
--
ALTER TABLE `reponses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `img`
--
ALTER TABLE `img`
  ADD CONSTRAINT `FK_acheteur0` FOREIGN KEY (`id_questions`) REFERENCES `questions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `reponses`
--
ALTER TABLE `reponses`
  ADD CONSTRAINT `FK_acheteur` FOREIGN KEY (`id_questions`) REFERENCES `questions` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
