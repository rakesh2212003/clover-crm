import { v4 as uuid } from 'uuid'
import bcrypt from 'bcryptjs'

import getConnection from '../config/mysql.js'
import Tenant from '../models/Tenant.js'
import User from '../models/User.js'
import Module from '../models/Module.js'
import Email from '../models/Email.js'

export const signup = async (req, res) => {
    const { company_name, owner_first_name, owner_last_name, created_by, updated_by, user } = req.body;
    const connection = await getConnection();

    try {
        const tenant_id = uuid();
        const user_id = uuid();
        const hashedPassword = await bcrypt.hash(user.password, 10);

        const tenantEntry = await Tenant.create({
            id: tenant_id,
            company_name: company_name,
            owner_first_name: owner_first_name,
            owner_last_name: owner_last_name,
            created_by: created_by,
            updated_by: updated_by,
        });
        const userEntry = await User.create({
            id: user_id,
            tenant_id: tenant_id,
            username: user.username,
            password: hashedPassword,
            first_name: owner_first_name,
            last_name: owner_last_name,
            created_by: created_by,
            updated_by: updated_by,
        });

        const sql = Module.getIdFromModulename(['Tenants', 'Users']);
        const [moduleIds] = await connection.execute(sql);

        const emailEntries = await Promise.all(
            moduleIds.map((module) => {
                return Email.create({
                    id: uuid(),
                    tenant_id: tenant_id,
                    module_id: module.id,
                    email_address: user.email.email_address,
                    primary: user.email.primary,
                    verified: user.email.verified,
                });
            })
        );

        await connection.beginTransaction();
        await connection.execute(tenantEntry.sql, tenantEntry.values);
        await connection.execute(userEntry.sql, userEntry.values);

        for (const entry of emailEntries) {
            await connection.execute(entry.sql, entry.values);
        }

        await connection.commit();
        return res.status(200).json({ success: true, message: 'Signup Successfully' });

    } catch (error) {
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