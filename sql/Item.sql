--
-- Offers System.
-- Prepared SQL queries for 'Item' definition.
--


--
-- SELECT template for table `Item`
--
SELECT `name`, `description`, `price`, `image` FROM `Item` WHERE 1;

--
-- INSERT template for table `Item`
--
INSERT INTO `Item`(`name`, `description`, `price`, `image`) VALUES (?, ?, ?, ?);

--
-- UPDATE template for table `Item`
--
UPDATE `Item` SET `name` = ?, `description` = ?, `price` = ?, `image` = ? WHERE 1;

--
-- DELETE template for table `Item`
--
DELETE FROM `Item` WHERE 0;

