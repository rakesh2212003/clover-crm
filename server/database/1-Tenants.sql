-- Active: 1724595132110@@127.0.0.1@3306@clover-crm
CREATE TABLE `Tenants` (
    `id` CHAR(36) NOT NULL PRIMARY KEY,
    `company_name` VARCHAR(255) NOT NULL,
    `owner_firstname` VARCHAR(100) NOT NULL,
    `owner_lastname` VARCHAR(100) NOT NULL,
    `employee_strength` CHAR(36) NOT NULL,
    `industry` CHAR(36) NOT NULL,
    `website` VARCHAR(255),
    `description` TEXT,
    `avatar` VARCHAR(20),
    `created_by` VARCHAR(255) NOT NULL,
    `updated_by` VARCHAR(255) NOT NULL,
    `created_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `status` BOOLEAN NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT FALSE
);