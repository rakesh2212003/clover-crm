import { v4 as uuid } from 'uuid'

import { Emails, Tenant } from "../models/index.js"

export const signup = async (req, res) => {
    const { 
        company_name, owner_first_name, owner_last_name, emails, logo, employee_strength, website, description, status
    } = req.body;

    try {
        const tenant_uuid = uuid();
        const email_uuid = uuid();

        //tenant create
        // await Tenant.create({
        //     id: tenant_uuid,
        //     company_name: company_name,
        //     owner_first_name: owner_first_name,
        //     owner_last_name: owner_last_name,
        //     logo: logo,
        //     employee_strength: employee_strength,
        //     website: website,
        //     description: description,
        //     status: status,
        //     created_by: owner_first_name+" "+owner_last_name,
        //     updated_by: owner_first_name+" "+owner_last_name
        // });

        // email Added
        for (const email of emails) {
            await Emails.create({
                id: email_uuid,
                tenant_id: tenant_uuid,
                email_address: email.email_address,
                primary: email.primary,
                verified: email.verified,
                created_by: owner_first_name+" "+owner_last_name,
                updated_by: owner_first_name+" "+owner_last_name,

            });
        }
        

        res.status(201).json({ message: 'Tenant created successfully', tenant_uuid });

    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const login = async (req, res) => {

}