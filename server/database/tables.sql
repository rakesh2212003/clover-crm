-- Active: 1724734957509@@127.0.0.1@3306@clover-crm
CREATE DATABASE `clover-crm`;

CREATE TABLE `tenants`(
    `id` CHAR(36) PRIMARY KEY,
    `logo` VARCHAR(50),
    `company_name` VARCHAR(255) NOT NULL,
    `owner_first_name` VARCHAR(100) NOT NULL,
    `owner_last_name` VARCHAR(100) NOT NULL,
    `email_id` CHAR(36) NOT NULL,
    `phone_id` CHAR(36),
    `employee_strength` VARCHAR(255),
    `website` VARCHAR(255),
    `industry_id` CHAR(36),
    `primary_address_id` CHAR(36),
    `other_address_id` CHAR(36),
    `status` BOOLEAN DEFAULT TRUE,
    `description` TEXT,
    `created_by` VARCHAR(255),
    `updated_by` VARCHAR(255),
    `created_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `deleted` BOOLEAN DEFAULT FALSE
);

CREATE TABLE `users`(
    `id` CHAR(36) PRIMARY KEY,
    `tenant_id` CHAR(36) NOT NULL,
    `logo` VARCHAR(50),
    `username` VARCHAR(50) NOT NULL,
    `password` CHAR(36) NOT NULL,
    `first_name` VARCHAR(100) NOT NULL,
    `last_name` VARCHAR(100) NOT NULL,
    `email_id` CHAR(36) NOT NULL,
    `phone_id` CHAR(36), 
    `role_id` CHAR(36) NOT NULL,
    `designation` VARCHAR(255),
    `department` VARCHAR(255),
    `status` BOOLEAN DEFAULT TRUE,
    `created_by` VARCHAR(255),
    `updated_by` VARCHAR(255),
    `created_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `deleted` BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`id`) ON DELETE CASCADE
);

CREATE TABLE `emails` (
    `id` CHAR(36) PRIMARY KEY,
    `tenant_id` CHAR(36) NOT NULL,
    `entity_id` CHAR(36) NOT NULL,
    `entity_name` VARCHAR(255) NOT NULL,
    `email_address` VARCHAR(100) NOT NULL,
    `primary` BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`id`) ON DELETE CASCADE
);

CREATE TABLE `phones` (
    `id` CHAR(36) PRIMARY KEY,
    `tenant_id` CHAR(36) NOT NULL,
    `entity_id` CHAR(36) NOT NULL,
    `entity_name` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL,
    `primary` BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`id`) ON DELETE CASCADE
);