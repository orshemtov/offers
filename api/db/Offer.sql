SELECT `logo`, `date`, `to`, `from`, `title`, `content`, `items` FROM `Offer` WHERE 1;
INSERT INTO `Offer`(`logo`, `date`, `to`, `from`, `title`, `content`, `items`) VALUES (?, ?, ?, ?, ?, ?, ?);
UPDATE `Offer` SET `logo` = ?, `date` = ?, `to` = ?, `from` = ?, `title` = ?, `content` = ?, `items` = ? WHERE 1;
DELETE FROM `Offer` WHERE 0;

