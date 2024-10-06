CREATE TABLE `phones` (
    `id` CHAR(36) PRIMARY KEY  CHECK (TRIM(`id`) <> ''),
    `tenant_id` CHAR(36) NOT NULL CHECK (TRIM(`tenant_id`) <> ''),
    `module_id` CHAR(36) NOT NULL CHECK (TRIM(`module_id`) <> ''),
    `phone_number` VARCHAR(100) NOT NULL,
    `cc` VARCHAR(10),
    `primary` BOOLEAN DEFAULT FALSE,
    `verified` BOOLEAN DEFAULT FALSE,
    `created_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`tenant_id`) ON DELETE CASCADE,
    FOREIGN KEY (`module_id`) REFERENCES `modules`(`id`) ON DELETE CASCADE
);