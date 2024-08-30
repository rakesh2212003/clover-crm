import { v4 as uuid } from 'uuid'

import { Tenant, Email } from "../models/index.js"

export const signup = async (req, res) => {
    const { 
        company_name, owner_first_name, owner_last_name, logo, employee_strength, website, description, status, created_by, updated_by, emails
    } = req.body;

    try {
        const tenant_id = uuid();

        await Tenant.create({
            id: tenant_id,
            company_name: company_name,
            owner_first_name: owner_first_name,
            owner_last_name: owner_last_name,
            logo: logo,
            employee_strength: employee_strength,
            website: website,
            description: description,
            status: status,
            created_by: created_by,
            updated_by: updated_by
        });
        
        for(const email of emails){
            await Email.create({
                id: uuid(),
                tenant_id: tenant_id,
                module_id: uuid(),
                email_address: email.email_address,
                primary: email.primary,
                verified: email.verified
            })
        }
        
        res.status(201).json({
            success: true,
            message: 'Tenant created successfully'
        });

    } catch (error) {
        console.error('Error during signup:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

export const login = async (req, res) => {

}