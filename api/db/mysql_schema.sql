/* SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO"; */
/* SET AUTOCOMMIT = 0; */
/* START TRANSACTION; */
/* SET time_zone = "+00:00"; */

CREATE TABLE IF NOT EXISTS `Entity` (
  `name` TEXT NOT NULL,
  `address` TEXT NOT NULL,
  `phone` TEXT NOT NULL,
  `email` TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `Item` (
  `name` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `price` DECIMAL(20, 9) NOT NULL,
  `image` TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `Offer` (
  `logo` TEXT NOT NULL,
  `date` TEXT NOT NULL
  `to` TEXT NOT NULL,
  `from` TEXT NOT NULL,
  `title` TEXT NOT NULL,
  `content` TEXT NOT NULL,
  `items` JSON NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;