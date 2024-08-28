const Tenant = {
    create: ({company_name, owner_first_name, owner_last_name, email_id, logo, phone_id, employee_strength, website, industry_id, primary_address_id, other_address_id, status, description, created_by, updated_by, deleted}) => {
        const requiredFields = {
            company_name,
            owner_first_name,
            owner_last_name,
            email_id
        };
        const optionalFields = {
            logo,
            phone_id,
            employee_strength,
            website,
            industry_id,
            primary_address_id,
            other_address_id,
            status,
            description,
            created_by,
            updated_by,
            deleted
        };

        const columns = [...Object.keys(requiredFields), ...Object.entries(optionalFields)
            .filter(([, value]) => value != null)
            .map(([key]) => key)];

        const values = [...Object.values(requiredFields), ...Object.values(optionalFields)
            .filter(value => value != null)];

        const sql = `INSERT INTO tenants (${columns.join(', ')}) VALUES (${columns.map(() => '?').join(', ')})`;

        console.log(sql);
        console.log(values);
    }
};


export default Tenant;