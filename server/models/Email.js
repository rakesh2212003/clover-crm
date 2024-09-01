import getConnection from "../config/mysql.js";

const Email = {
    create: async (data) => {
        let columns = [];
        let values = [];

        for (const [key, value] of Object.entries(data)) {
            columns.push(`\`${key}\``);
            values.push(value);
        }

        const columnNames = columns.join(', ');
        const placeholders = values.map(() => '?').join(', ');
        const sql = `INSERT INTO emails (${columnNames}) VALUES (${placeholders})`;

        //Execute
        const connection = await getConnection();
        await connection.execute(sql, values);
        await connection.end();
    },
};

export default Email;