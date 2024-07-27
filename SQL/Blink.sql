CREATE TABLE IF NOT EXISTS `Movies` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`play` boolean NOT NULL DEFAULT false,
	`info` varchar(255) NOT NULL,
	`release_date` date NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `MovieDetails` (
	`movie_id` int NOT NULL,
	`genre` varchar(255) NOT NULL,
	`language` varchar(255) NOT NULL,
	`duration` int NOT NULL
);

CREATE TABLE IF NOT EXISTS `MediaResources` (
	`movie_id` int NOT NULL,
	`video` varchar(255) NOT NULL,
	`poster_img` varchar(255) NOT NULL,
	`title_img` varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS `Genres` (
	`id` int NOT NULL,
	`genre` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `MovieGenres` (
	`movie_id` int NOT NULL,
	`genre_id` int NOT NULL
);

CREATE TABLE IF NOT EXISTS `Languages` (
	`id` int NOT NULL,
	`language` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `MovieLanguages` (
	`movie_id` int NOT NULL,
	`language_id` int NOT NULL
);


ALTER TABLE `MovieDetails` ADD CONSTRAINT `MovieDetails_fk0` FOREIGN KEY (`movie_id`) REFERENCES `Movies`(`id`);
ALTER TABLE `MediaResources` ADD CONSTRAINT `MediaResources_fk0` FOREIGN KEY (`movie_id`) REFERENCES `Movies`(`id`);

ALTER TABLE `MovieGenres` ADD CONSTRAINT `MovieGenres_fk0` FOREIGN KEY (`movie_id`) REFERENCES `Movies`(`id`);

ALTER TABLE `MovieGenres` ADD CONSTRAINT `MovieGenres_fk1` FOREIGN KEY (`genre_id`) REFERENCES `Genres`(`id`);

ALTER TABLE `MovieLanguages` ADD CONSTRAINT `MovieLanguages_fk0` FOREIGN KEY (`movie_id`) REFERENCES `Movies`(`id`);

ALTER TABLE `MovieLanguages` ADD CONSTRAINT `MovieLanguages_fk1` FOREIGN KEY (`language_id`) REFERENCES `Languages`(`id`);