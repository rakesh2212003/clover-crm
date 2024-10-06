CREATE TABLE `Industry` (
    `id` CHAR(36) NOT NULL PRIMARY KEY,
    `industry_name` VARCHAR(255) NOT NULL
);

INSERT INTO
    `Industry` (`id`, `industry_name`)
VALUES
    (UUID(), 'Apparel'),
    (UUID(), 'Banking'),
    (UUID(), 'Biotechnology'),
    (UUID(), 'Chemicals'),
    (UUID(), 'Communications'),
    (UUID(), 'Construction'),
    (UUID(), 'Consulting'),
    (UUID(), 'Credit Repair'),
    (UUID(), 'Education'),
    (UUID(), 'Electronics'),
    (UUID(), 'Energy'),
    (UUID(), 'Engineering'),
    (UUID(), 'Entertainment'),
    (UUID(), 'Environmental'),
    (UUID(), 'Finance'),
    (UUID(), 'Government'),
    (UUID(), 'Healthcare'),
    (UUID(), 'Hospitality'),
    (UUID(), 'Insurance'),
    (UUID(), 'Machinery'),
    (UUID(), 'Manufacturing'),
    (UUID(), 'Merchant Cash Advance'),
    (UUID(), 'Media'),
    (UUID(), 'Not For Profit'),
    (UUID(), 'Recreation'),
    (UUID(), 'Retail'),
    (UUID(), 'Shipping'),
    (UUID(), 'Technology'),
    (UUID(), 'Telecommunications'),
    (UUID(), 'Transportation'),
    (UUID(), 'Utilities'),
    (UUID(), 'Other');