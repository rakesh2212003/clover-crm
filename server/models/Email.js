const Email = {
    create: async (data) => {
        const mandatoryFields = ['id', 'tenant_id', 'module_id', 'email_address', 'primary', 'verified'];

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
                columns.push(`\`${key}\``);
                placeholders.push('?');
                values.push(value);
            }
        }

        const sql = `INSERT INTO \`emails\` (${columns.join(', ')}) VALUES (${placeholders.join(', ')})`;

        return { sql, values };
    },
}

export default Email;