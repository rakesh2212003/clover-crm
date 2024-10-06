CREATE TABLE `modules` (
    `id` CHAR(36) NOT NULL PRIMARY KEY,
    `tenant_id` CHAR(36),
    `module_name` VARCHAR(100) NOT NULL,
    `private` BOOLEAN NOT NULL DEFAULT FALSE,
    `native` BOOLEAN NOT NULL DEFAULT FALSE,
    `created_by` VARCHAR(255) NOT NULL,
    `updated_by` VARCHAR(255) NOT NULL,
    `created_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `status` BOOLEAN NOT NULL DEFAULT TRUE,
    `deleted` BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`) ON DELETE CASCADE
);

INSERT INTO `modules`(`id`, `module_name`, `private`, `native`, `created_by`, `updated_by`) VALUES
    (UUID(), 'Tenants', true, true, 'Rakesh Rana', 'Rakesh Rana'),
    (UUID(), 'Users', false, true, 'Rakesh Rana', 'Rakesh Rana'),
    (UUID(), 'Roles', false, true, 'Rakesh Rana', 'Rakesh Rana');