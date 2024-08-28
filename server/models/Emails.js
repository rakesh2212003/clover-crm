import getConnection from "../config/mysql.js";

const Emails = {
    create: async ({id, tenant_id, email_address, primary, verified, created_by, updated_by}) => {
        const columns = [
            'id', 'tenant_id', 'email_address', 'primary', 'verified', 'created_by', 'updated_by'
        ].filter(col => email[col] != null);
        
        const placeholders = columns.map(() => '?').join(', ');
        const values = columns.map(col => email[col]);

        const sql = `INSERT INTO emails (${columns.join(', ')}) VALUES (${placeholders})`;
        console.log(sql, values);

        const connection = await getConnection();
        await connection.execute(sql, values);
        connection.end();
    }
};

export default Emails;
