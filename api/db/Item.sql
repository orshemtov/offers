SELECT `name`, `description`, `price`, `image` FROM `Item` WHERE 1;
INSERT INTO `Item`(`name`, `description`, `price`, `image`) VALUES (?, ?, ?, ?);
UPDATE `Item` SET `name` = ?, `description` = ?, `price` = ?, `image` = ? WHERE 1;
DELETE FROM `Item` WHERE 0;

