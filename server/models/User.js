const User = {
    create: async (data) => {
        const mandatoryFields = ['id', 'tenant_id', 'username', 'password', 'first_name', 'last_name', 'created_by', 'updated_by'];

        for (const field of mandatoryFields) {
            if (data[field] === undefined) {
                throw new Error(`Missing mandatory fields`);
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

        const sql = `INSERT INTO users (${columns.join(', ')}) VALUES (${placeholders.join(', ')})`;

        return { sql, values };
    },
}

export default User;