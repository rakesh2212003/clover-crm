CREATE TABLE `modules` (
    `id` CHAR(36) NOT NULL PRIMARY KEY CHECK (TRIM(`id`) <> ''),
    `module_name` VARCHAR(100) NOT NULL CHECK (TRIM(`module_name`) <> ''),
    `private` BOOLEAN NOT NULL DEFAULT FALSE,
    `native` BOOLEAN NOT NULL DEFAULT FALSE,
    `created_by` VARCHAR(255) NOT NULL,
    `updated_by` VARCHAR(255) NOT NULL,
    `created_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `status` BOOLEAN NOT NULL DEFAULT TRUE,
    `deleted` BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO `modules`(`id`, `module_name`, `private`, `native`, `created_by`, `updated_by`) VALUES
    (UUID(), 'Tenants', true, false, 'Rakesh Rana', 'Rakesh Rana'),
    (UUID(), 'Users', false, false, 'Rakesh Rana', 'Rakesh Rana');