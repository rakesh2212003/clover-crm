CREATE TABLE `phones` (
    `id` CHAR(36) PRIMARY KEY,
    `tenant_id` CHAR(36) NOT NULL,
    `phone_number` VARCHAR(100) NOT NULL,
    `isdc` VARCHAR(10),
    `cc` VARCHAR(10),
    `primary` BOOLEAN DEFAULT FALSE,
    `verified` BOOLEAN DEFAULT FALSE,
    `created_by` VARCHAR(255),
    `updated_by` VARCHAR(255),
    `created_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `deleted` BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`id`) ON DELETE CASCADE
);