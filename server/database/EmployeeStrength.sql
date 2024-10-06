CREATE TABLE `EmployeeStrength`(
    `id` CHAR(36) NOT NULL PRIMARY KEY,
    `strength` VARCHAR(100) NOT NULL
);

INSERT INTO 
    `EmployeeStrength`(`id`,`strength`)
VALUES
    (UUID(), '1-30'),
    (UUID(), '31-100'),
    (UUID(), '101-500'),
    (UUID(), '501-1000'),
    (UUID(), '1001-2000'),
    (UUID(), '2001+');