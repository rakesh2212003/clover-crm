-- Active: 1724595132110@@127.0.0.1@3306@clover-crm
CREATE TABLE `tenants_modules` (
    `tenant_id` CHAR(36) NOT NULL,
    `module_id` CHAR(36) NOT NULL,
    PRIMARY KEY(`tenant_id`, `module_id`),
    CHECK (TRIM(`tenant_id`) <> ''),
    CHECK (TRIM(`module_id`) <> ''),
    FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`module_id`) REFERENCES `modules`(`id`) ON DELETE CASCADE,
);