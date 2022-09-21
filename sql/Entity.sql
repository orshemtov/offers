--
-- Offers System.
-- Prepared SQL queries for 'Entity' definition.
--


--
-- SELECT template for table `Entity`
--
SELECT `name`, `address`, `phone`, `email` FROM `Entity` WHERE 1;

--
-- INSERT template for table `Entity`
--
INSERT INTO `Entity`(`name`, `address`, `phone`, `email`) VALUES (?, ?, ?, ?);

--
-- UPDATE template for table `Entity`
--
UPDATE `Entity` SET `name` = ?, `address` = ?, `phone` = ?, `email` = ? WHERE 1;

--
-- DELETE template for table `Entity`
--
DELETE FROM `Entity` WHERE 0;

