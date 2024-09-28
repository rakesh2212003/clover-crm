CREATE TABLE `admins` (
    `id` CHAR(36) PRIMARY KEY CHECK (TRIM(`id`) <> ''),
    `username` VARCHAR(50) UNIQUE NOT NULL CHECK (TRIM(`username`) <> ''),
    `password` VARCHAR(60) NOT NULL CHECK (TRIM(`password`) <> ''),
    `first_name` VARCHAR(100) NOT NULL CHECK (TRIM(`first_name`) <> ''),
    `last_name` VARCHAR(100) NOT NULL CHECK (TRIM(`last_name`) <> ''),
    `created_by` VARCHAR(255) NOT NULL CHECK (TRIM(`created_by`) <> ''),
    `updated_by` VARCHAR(255) NOT NULL CHECK (TRIM(`updated_by`) <> ''),
    `created_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO `admins`(`id`,`username`,`password`,`first_name`,`last_name`,`created_by`,`updated_by`)
VALUES(UUID(),'rakesh2213','123456','Rakesh','Rana','Rakesh Rana','Rakesh Rana');