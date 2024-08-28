-- Active: 1724595132110@@127.0.0.1@3306@clover-crm
CREATE TABLE `emails` (
    `id` CHAR(36) PRIMARY KEY,
    `tenant_id` CHAR(36) NOT NULL,
    `email_address` VARCHAR(100) NOT NULL,
    `primary` BOOLEAN DEFAULT FALSE,
    `verified` BOOLEAN DEFAULT FALSE,
    `created_by` VARCHAR(255),
    `updated_by` VARCHAR(255),
    `created_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `deleted` BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`id`) ON DELETE CASCADE
);