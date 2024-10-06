CREATE TABLE `Roles`(
    `id` CHAR(36) NOT NULL PRIMARY KEY,
    `tenant_id` CHAR(36) NOT NULL,
    `role_name` VARCHAR(255) NOT NULL
);

INSERT INTO `Roles`(`id`, `tenant_id`, `role_name`) VALUES