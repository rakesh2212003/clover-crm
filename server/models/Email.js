import getConnection from "../config/mysql.js";

const Email = {
    create: async (data) => {
        const columns = [
            'email_id', 'tenant_id', 'module_id', 'email_address',
            'primary', 'verified'
        ];

        const setClause = columns.map(col => `\`${col}\``).join(', ');
        const values = columns.map(col => data[col] === '' ? null : data[col]);
        const sql = `INSERT INTO emails (${setClause}) VALUES (${columns.map(() => '?').join(', ')})`;

        //store in database
        const connection = await getConnection();
        await connection.execute(sql, values);
        await connection.end();
    },
};

export default Email;