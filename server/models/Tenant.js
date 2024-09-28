const Tenant = {
    create: async (data) => {
        const mandatoryFields = ['id', 'company_name', 'owner_first_name', 'owner_last_name', 'created_by', 'updated_by'];

        for (const field of mandatoryFields) {
            if (data[field] === undefined) {
                throw new Error(`Missing mandatory fields ${field}`);
            }
        }

        const columns = [];
        const placeholders = [];
        const values = [];

        for (const [key, value] of Object.entries(data)) {
            if (value !== undefined && value !== '') {
                columns.push(key);
                placeholders.push('?');
                values.push(value);
            }
        }

        const sql = `INSERT INTO tenants (${columns.join(', ')}) VALUES (${placeholders.join(', ')})`;

        return { sql, values };
    },
}

export default Tenant;