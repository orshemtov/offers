SELECT `name`, `address`, `phone`, `email` FROM `Entity` WHERE 1;
INSERT INTO `Entity`(`name`, `address`, `phone`, `email`) VALUES (?, ?, ?, ?);
UPDATE `Entity` SET `name` = ?, `address` = ?, `phone` = ?, `email` = ? WHERE 1;
DELETE FROM `Entity` WHERE 0;

