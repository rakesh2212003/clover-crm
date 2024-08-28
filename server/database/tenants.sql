-- Active: 1724595132110@@127.0.0.1@3306@clover-crm
CREATE TABLE `tenants`(
    `id` CHAR(36) PRIMARY KEY,
    `company_name` VARCHAR(255) NOT NULL,
    `owner_first_name` VARCHAR(100) NOT NULL,
    `owner_last_name` VARCHAR(100) NOT NULL,
    `logo` VARCHAR(50),
    `employee_strength` VARCHAR(255),
    `website` VARCHAR(255),
    `industries` CHAR(255),
    `status` BOOLEAN DEFAULT TRUE,
    `description` TEXT,
    `created_by` VARCHAR(255),
    `updated_by` VARCHAR(255),
    `created_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `deleted` BOOLEAN DEFAULT FALSE
);