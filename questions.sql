-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  mar. 02 juin 2020 à 09:47
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
  `nom` varchar(31) NOT NULL,
  `id_questions` int(10) UNSIGNED NOT NULL,
  `description` varchar(63) DEFAULT NULL COMMENT 'Dans notre JSON d’origine, img correspond à :\n‘ img ‘ : [‘q0’ : ‘q0_0.jpg’]\nSi plusieurs images :\n‘ Img ‘ : [‘q0’ : ‘q0_0.jpg’,‘q0’ : ‘q0_1.jpg’,‘q0’ : ‘q0_2.jpg’]\n'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `reponseText` varchar(63) NOT NULL,
  `id_questions` int(10) UNSIGNED NOT NULL,
  `description` varchar(63) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

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
