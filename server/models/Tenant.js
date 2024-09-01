import getConnection from "../config/mysql.js";

const Tenant = {
    create: async (data) => {
        let columns = [];
        let values = [];

        for (const [key, value] of Object.entries(data)) {
            columns.push(`\`${key}\``);
            values.push(value);
        }

        const columnNames = columns.join(', ');
        const placeholders = values.map(() => '?').join(', ');
        const sql = `INSERT INTO tenants (${columnNames}) VALUES (${placeholders})`;

        //Execute
        const connection = await getConnection();
        await connection.execute(sql, values);
        await connection.end();
    },

    detail: async ({ tenant_id, limit = 10, offset = 0 }) => {
        const sql = `SELECT * FROM tenants WHERE \`tenant_id\` = ? AND \`deleted\` = false LIMIT ? OFFSET ?`;

        // Execute
        const connection = await getConnection();
        const [rows] = await connection.execute(sql, [tenant_id, limit, offset]);
        await connection.end();
        return rows;
    },

    update: async (data) => {
        let columns = [];
        let values = [];

        for (const [key, value] of Object.entries(data)) {
            if (key !== 'tenant_id') {
                columns.push(`\`${key}\` = ?`);
                values.push(value);
            }
        }

        if (!data.tenant_id) {
            throw new Error('tenant_id is required for updating');
        }

        const setClause = columns.join(', ');
        const sql = `UPDATE tenants SET ${setClause} WHERE \`tenant_id\` = ?`;

        // Store in database
        const connection = await getConnection();
        await connection.execute(sql, [...values, data.tenant_id]);
        await connection.end();
    },

    delete: async (tenant_id, softDelete = true) => {
        let sql;
        if (softDelete) {
            sql = `UPDATE tenants SET \`deleted\` = true WHERE \`tenant_id\` = ?`;
        } else {
            sql = `DELETE FROM tenants WHERE \`tenant_id\` = ?`;
        }
        const connection = await getConnection();
        await connection.execute(sql, [tenant_id]);
        await connection.end();
    }
};

export default Tenant;