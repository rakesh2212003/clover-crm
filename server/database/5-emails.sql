-- Active: 1724595132110@@127.0.0.1@3306@clover-crm
CREATE TABLE `emails` (
    `id` CHAR(36) NOT NULL,
    `tenant_id` CHAR(36) NOT NULL,
    `module_id` CHAR(36) NOT NULL,
    `email_address` VARCHAR(100) NOT NULL,
    `primary` BOOLEAN DEFAULT FALSE,
    `verified` BOOLEAN DEFAULT FALSE,
    `created_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(`id`),
    CHECK (TRIM(`id`) <> ''),
    CHECK (TRIM(`tenant_id`) <> ''),
    CHECK (TRIM(`tenant_id`) <> ''),
    CHECK (TRIM(`module_id`) <> '')
    FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`tenant_id`) ON DELETE CASCADE,
    FOREIGN KEY (`module_id`) REFERENCES `modules`(`id`) ON DELETE CASCADE
);