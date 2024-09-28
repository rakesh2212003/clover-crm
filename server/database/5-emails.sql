-- Active: 1724595132110@@127.0.0.1@3306@clover-crm
CREATE TABLE `emails` (
    `id` CHAR(36) NOT NULL PRIMARY KEY CHECK (TRIM(`id`) <> ''),
    `tenant_id` CHAR(36) NOT NULL CHECK (TRIM(`tenant_id`) <> ''),
    `module_id` CHAR(36) NOT NULL CHECK (TRIM(`module_id`) <> ''),
    `email_address` VARCHAR(100) NOT NULL,
    `primary` BOOLEAN NOT NULL DEFAULT FALSE,
    `verified` BOOLEAN NOT NULL DEFAULT FALSE,
    `created_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`module_id`) REFERENCES `modules`(`id`) ON DELETE CASCADE
);