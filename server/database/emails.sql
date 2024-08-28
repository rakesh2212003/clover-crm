CREATE TABLE `emails` (
    `id` CHAR(36) PRIMARY KEY,
    `tenant_id` CHAR(36) NOT NULL,
    `module_id` CHAR(36) NOT NULL,
    `data_id` CHAR(36) NOT NULL,
    `email_address` VARCHAR(100) NOT NULL,
    `primary` BOOLEAN DEFAULT FALSE,
    `verified` BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`module_id`) REFERENCES `modules`(`id`) ON DELETE CASCADE
);