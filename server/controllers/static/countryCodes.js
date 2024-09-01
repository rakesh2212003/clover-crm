import { v4 as uuid } from 'uuid'
import getConnection from '../../config/mysql.js'

export const addCountryCodes = async (req, res) => {
    const countries = req.body;
    const connection = await getConnection();

    try {
        let columns = [];
        let values = [];

        for (const [key, value] of Object.entries(countries)) {
            columns.push(`\`${key}\``);
            values.push(value);
        }

        const columnNames = columns.join(', ');
        const placeholders = values.map(() => '?').join(', ');
        const sql = `INSERT INTO emails (${columnNames}) VALUES (${placeholders})`;

        await connection.execute(sql, values);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    } finally {
        if (connection) {
            connection.end();
        }
    }
}