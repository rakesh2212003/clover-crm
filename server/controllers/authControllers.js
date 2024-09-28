import { v4 as uuid } from 'uuid'
import bcrypt from 'bcryptjs'

import getConnection from '../config/mysql.js'
import Tenant from '../models/Tenant.js'
import User from '../models/User.js'

export const signup = async (req, res) => {
    const { company_name, owner_first_name, owner_last_name, created_by, updated_by, user } = req.body;
    const connection = await getConnection();

    try {
        const tenant_id = uuid();
        const user_id = uuid();
        const hashedPassword = await bcrypt.hash(user.password, 10);

        const { sql: sql1, values: values1 } = await Tenant.create({
            id: tenant_id,
            company_name: company_name,
            owner_first_name: owner_first_name,
            owner_last_name: owner_last_name,
            created_by: created_by,
            updated_by: updated_by,
        });
        const { sql: sql2, values: values2 } = await User.create({
            id: user_id,
            tenant_id: tenant_id,
            username: user.username,
            password: hashedPassword,
            first_name: owner_first_name,
            last_name: owner_last_name,
            created_by: created_by,
            updated_by: updated_by,
        });

        await connection.beginTransaction();
        await connection.execute(sql1, values1);
        await connection.execute(sql2, values2);
        await connection.commit();
        return res.status(200).json({ success: true, message: 'Signup Successfully' });

    }catch (error) {
        await connection.rollback();
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
    finally {
        if (connection) {
            await connection.end();
        }
    }
}