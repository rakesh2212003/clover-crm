import getConnection from "../config/mysql.js";

const Tenant = {
    create: async (data) => {
        const columns = [
            'id', 'company_name', 'owner_first_name', 'owner_last_name',
            'logo', 'employee_strength', 'website', 'description',
            'status', 'created_by', 'updated_by'
        ];

        const setClause = columns.map(col => `\`${col}\``).join(', ');
        const values = columns.map(col => data[col] === '' ? null : data[col]);
        const sql = `INSERT INTO tenants (${setClause}) VALUES (${columns.map(() => '?').join(', ')})`;

        //store in database
        const connection = await getConnection();
        await connection.execute(sql, values);
        await connection.end();
    },

    // update: async(data) => {
    //     const columns = [
    //         'company_name', 'owner_first_name', 'owner_last_name',
    //         'logo', 'employee_strength', 'website', 'description',
    //         'status', 'updated_by'
    //     ];

    //     const setClause = columns.map(col => `${col} = ?`).join(', ');
    //     const values = columns.map(col => data[col] === '' ? null : data[col]);
    //     values.push(data.id);
    //     console.log(values);

    //     const sql = `UPDATE tenants SET ${setClause} WHERE id = ?`;

    //     const connection = await getConnection();
    //     await connection.execute(sql, values);
    //     await connection.end();
    // }
};

export default Tenant;