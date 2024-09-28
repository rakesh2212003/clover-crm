CREATE TABLE `modules` (
    `id` CHAR(36) NOT NULL,
    `module_name` VARCHAR(100) NOT NULL,
    `native` BOOLEAN DEFAULT FALSE,
    `created_by` VARCHAR(255) NOT NULL,
    `updated_by` VARCHAR(255) NOT NULL,
    `created_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `status` BOOLEAN DEFAULT TRUE,
    `deleted` BOOLEAN DEFAULT FALSE,
    PRIMARY KEY(`id`),
    CHECK (TRIM(`id`) <> ''),
    CHECK (TRIM(`module_name`) <> '')
);

INSERT INTO `modules`(`id`, `module_name`, `created_by`, `updated_by`)
    VALUES(UUID(), 'Users', 'Rakesh Rana', 'Rakesh Rana');