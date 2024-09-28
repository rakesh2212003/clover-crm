CREATE TABLE `users` (
    `id` CHAR(36) NOT NULL PRIMARY KEY CHECK (TRIM(`id`) <> ''),
    `tenant_id` CHAR(36) NOT NULL CHECK (TRIM(`tenant_id`) <> ''),
    `username` VARCHAR(50) UNIQUE NOT NULL CHECK (TRIM(`username`) <> ''),
    `password` VARCHAR(60) NOT NULL CHECK (TRIM(`password`) <> ''),
    `first_name` VARCHAR(100) NOT NULL CHECK (TRIM(`first_name`) <> ''),
    `last_name` VARCHAR(100) NOT NULL CHECK (TRIM(`last_name`) <> ''),
    `created_by` VARCHAR(255) NOT NULL,
    `updated_by` VARCHAR(255) NOT NULL,
    `created_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `status` BOOLEAN NOT NULL DEFAULT TRUE,
    `deleted` BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`id`) ON DELETE CASCADE
);