--
-- Offers System.
-- Prepared SQL queries for 'Offer' definition.
--


--
-- SELECT template for table `Offer`
--
SELECT `logo`, `date`, `to`, `from`, `title`, `content`, `items` FROM `Offer` WHERE 1;

--
-- INSERT template for table `Offer`
--
INSERT INTO `Offer`(`logo`, `date`, `to`, `from`, `title`, `content`, `items`) VALUES (?, ?, ?, ?, ?, ?, ?);

--
-- UPDATE template for table `Offer`
--
UPDATE `Offer` SET `logo` = ?, `date` = ?, `to` = ?, `from` = ?, `title` = ?, `content` = ?, `items` = ? WHERE 1;

--
-- DELETE template for table `Offer`
--
DELETE FROM `Offer` WHERE 0;

