import getConnection from "../config/mysql.js";

const Tenant = {
    create: async (data) => {
        try {
            const columns = [
                'id', 'company_name', 'owner_first_name', 'owner_last_name',
                'logo', 'employee_strength', 'website', 'description', 
                'status', 'created_by', 'updated_by'
            ];
            const placeholders = columns.map(() => '?').join(', ');

            const values = columns.map(col => {
                let value = data[col];
                return value === '' ? null : value;
            });

            const sql = `INSERT INTO tenants (${columns.join(', ')}) VALUES (${placeholders})`;

            const connection = await getConnection();
            await connection.execute(sql, values);
            await connection.end();
        } catch (error) {
            console.error('Error creating tenant:', error.message);
            throw new Error('Failed to create tenant');
        }
    },
};



// const Tenant = {
//     create: async (data) => {
//         const columns = ['id', 'company_name', 'owner_first_name', 'owner_last_name', 'logo', 'employee_strength', 'website', 'description', 'status', 'created_by', 'updated_by'];
//         const placeholders = columns.map(() => '?').join(', ');
//         const values = columns.map(col => {
//             if(data[col] == ''){
//                 data[col] = null;
//             }
//             return data[col];
//         });
//         const sql = `INSERT INTO tenants (${columns.join(', ')}) VALUES (${placeholders})`;

//         const connection = await getConnection();
//         await connection.execute(sql, values);
//         await connection.end();
//     },
// };

export default Tenant;