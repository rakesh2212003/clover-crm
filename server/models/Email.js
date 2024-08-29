import getConnection from "../config/mysql.js";

const Email = {
    create: async ({
        id, tenant_id, email_address, primary, verified
    }) => {
        const connection = await getConnection();
        const requiredFields = { id, tenant_id, email_address };
        const optionalFields = { primary, verified };
        
        for (const [key, value] of Object.entries(requiredFields)) {
            if (value == null || value === '') {
                throw new Error(`${key} is required and cannot be null or empty.`);
            }
        }
        for (const key in optionalFields) {
            if (optionalFields[key] === '') {
                optionalFields[key] = null;
            }
        }

        try {
            const columns = [
                ...Object.keys(requiredFields),
                ...Object.keys(optionalFields)
            ];
            const values = [
                ...Object.values(requiredFields),
                ...Object.values(optionalFields)
            ];

            const escapedColumns = columns.map(col => `\`${col}\``);
            const placeholders = columns.map(() => '?').join(', ');

            const sql = `INSERT INTO emails (${escapedColumns.join(', ')}) VALUES (${placeholders})`;
            await connection.execute(sql, values);

            // console.log(sql, values);
        } catch (error) {
            throw error;
        } finally {
            if (connection) {
                connection.end();
            }
        }
    }
};

export default Email;
