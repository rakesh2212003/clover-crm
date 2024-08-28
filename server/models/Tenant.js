import getConnection from "../config/mysql.js";

const Tenant = {
    create: async({
        id, company_name, owner_first_name, owner_last_name, logo, employee_strength, website, description, status, created_by, updated_by
    }) => {
        const requiredFields = {
            id,
            company_name,
            owner_first_name,
            owner_last_name,
        };
        const optionalFields = {
            logo,
            employee_strength,
            website,
            description,
            status,
            created_by,
            updated_by,
        };

        const columns = [
            ...Object.keys(requiredFields),
            ...Object.entries(optionalFields)
                .filter(([, value]) => value != null)
                .map(([key]) => key)
        ];
        const values = [
            ...Object.values(requiredFields),
            ...Object.values(optionalFields)
                .filter(value => value != null)
        ];
        
        const sql = `INSERT INTO tenants (${columns.join(', ')}) VALUES (${columns.map(() => '?').join(', ')})`;

        const connection = await getConnection();
        await connection.execute(sql, values);
        connection.end();
    },

    detail: async({id}) => {
        const sql = 'SELECT * FROM tenants WHERE id=? and deleted=false';
        const values = [id];

        const connection = await getConnection();
        const [result] = await connection.execute(sql, values);
        connection.end();

        return result;
    }
};

export default Tenant;