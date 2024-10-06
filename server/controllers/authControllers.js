import { v4 as uuid } from 'uuid'

import getConnection from '../config/mysql.js'
import Tenant from '../models/Tenant.js'
import User from '../models/User.js'

export const signup = async (req, res) => {
    const { tenant, user } = req.body;
    const connection = await getConnection();

    try {
        const tenant_id = uuid();
        const user_id = uuid();

        const newTenant = new Tenant(connection);
        const newUser = new User(connection);

        await connection.beginTransaction();
        await newTenant.create({
            id: tenant_id,
            company_name: tenant.company_name,
            owner_firstname: tenant.owner_firstname,
            owner_lastname: tenant.owner_lastname,
            employee_strength: tenant.employee_strength,
            industry: tenant.industry,
            website: tenant.website,
            created_by: tenant.created_by,
            updated_by: tenant.updated_by
        });
        await newUser.create({
            id: user_id,
            tenant_id: tenant_id,
            username: user.username,
            password: user.password,
            firstname: tenant.owner_firstname,
            lastname: tenant.owner_lastname,
            role: user.role,
            created_by: tenant.created_by,
            updated_by: tenant.updated_by
        })
        await connection.commit();


        return res.status(201).json({ success: true, message: 'Signup Successfully' });

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