-- Active: 1724595132110@@127.0.0.1@3306@clover-crm
CREATE TABLE `tenants` (
    `id` CHAR(36) NOT NULL PRIMARY KEY CHECK (TRIM(`id`) <> ''),
    `company_name` VARCHAR(255) NOT NULL CHECK (TRIM(`company_name`) <> ''),
    `owner_first_name` VARCHAR(100) NOT NULL CHECK (TRIM(`owner_first_name`) <> ''),
    `owner_last_name` VARCHAR(100) NOT NULL CHECK (TRIM(`owner_last_name`) <> ''),
    `logo` VARCHAR(20),
    `employee_strength` VARCHAR(255),
    `website` VARCHAR(255),
    `description` TEXT,
    `created_by` VARCHAR(255) NOT NULL,
    `updated_by` VARCHAR(255) NOT NULL,
    `created_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `status` BOOLEAN NOT NULL DEFAULT TRUE,
    `deleted` BOOLEAN NOT NULL DEFAULT FALSE
);