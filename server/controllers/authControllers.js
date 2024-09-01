import { v4 as uuid } from 'uuid'
import bcryptjs from 'bcryptjs'

import { Email, Tenant, User } from "../models/index.js"

export const signup = async (req, res) => {
    const { tenant, user, email } = req.body;

    try {
        const tenant_id = uuid();
        const user_id = uuid();
        const email_id = uuid();
        const hashedPassword = await bcryptjs.hash(user.password, 10);

        await Tenant.create({
            tenant_id: tenant_id,
            company_name: tenant.company_name,
            owner_first_name: tenant.owner_first_name,
            owner_last_name: tenant.owner_last_name,
            employee_strength: tenant.employee_strength,
            created_by: `${tenant.owner_first_name} ${tenant.owner_last_name}`,
            updated_by: `${tenant.owner_first_name} ${tenant.owner_last_name}`
        });
        await User.create({
            user_id: user_id,
            tenant_id: tenant_id,
            username: user.username,
            password: hashedPassword,
            first_name: tenant.owner_first_name,
            last_name: tenant.owner_last_name,
            created_by: `${tenant.owner_first_name} ${tenant.owner_last_name}`,
            updated_by: `${tenant.owner_first_name} ${tenant.owner_last_name}`
        })
        await Email.create({
            email_id: email_id,
            tenant_id: tenant_id,
            email_address: email.email_address,
            primary: email.primary,
            verified: email.verified
        })
        
        res.status(201).json({ success: true, message: 'Tenant created successfully'});

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

export const login = async (req, res) => {

}