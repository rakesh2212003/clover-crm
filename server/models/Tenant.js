import getConnection from "../config/mysql.js";

const Tenant = {
    create: async ({
        id, company_name, owner_first_name, owner_last_name, logo, employee_strength, website, description, status, created_by, updated_by
    }) => {
        const connection = await getConnection();
        
        const requiredFields = { id, company_name, owner_first_name, owner_last_name };
        const optionalFields = { logo, employee_strength, website, description, status, created_by, updated_by };
        
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
            const placeholders = columns.map(() => '?').join(', ');
            const sql = `INSERT INTO tenants (${columns.join(', ')}) VALUES (${placeholders})`;
            await connection.execute(sql, values);

        } catch (error) {
            throw error;
        } finally {
            if (connection) {
                connection.end();
            }
        }
    },

    // detail: async ({ id }) => {
    //     const requiredFields = { id };

    //     for (const [key, value] of Object.entries(requiredFields)) {
    //         if (value == null || value === '') {
    //             throw new Error(`${key} is required and cannot be null or empty.`);
    //         }
    //     }



    //     const sql = 'SELECT * FROM tenants WHERE id=? and deleted=false';
    //     const connection = await getConnection();
    //     const [result] = await connection.execute(sql, [id]);
    //     connection.end();
    //     return result;
    // }
};

export default Tenant;
