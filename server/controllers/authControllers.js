import { v4 as uuid } from 'uuid'

import getConnection from "../config/mysql.js";
import { Tenant } from "../models/index.js"

export const signup = async (req, res) => {
    const { company_name, owner_first_name, owner_last_name, emails, logo, phone_id, employee_strength, website, industry_id, primary_address_id, other_address_id, status, description, created_by, updated_by, deleted } = req.body;

    try {
        const tenant_id = uuid();

        //tenant create
        await Tenant.create({
            id: tenant_id,
            company_name: "Rakesh LLC.",
            owner_first_name: "Rakesh",
            owner_last_name: "Rana",
            email_id: uuid()
        });
        
        const [result] = await Tenant.detail({ id: tenant_id });
        console.log(result)







        res.status(201).json({ message: 'Tenant created successfully', tenant_id });

    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const login = async (req, res) => {

}