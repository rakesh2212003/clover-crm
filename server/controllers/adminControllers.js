import jwt from 'jsonwebtoken'
import Admin from '../models/Admin.js'

export const login = async(req, res) => {
    const { username, password } = req.body;
    try{
        const result = await Admin.login({
            username: username,
            password: password
        })
        
        if(result.length === 0){
            res.status(400).json({success: false, message: "Invalid Credentials"});
        }else{
            const [user] = result;
            const token = jwt.sign({ id: user.id}, process.env.JWT_SECRET, { expiresIn: '1hr'});
            user.token = token;
            res.status(200).json({success: true, data: user});
        }
    }catch(error){
        console.error(error.message);
        res.status(500).json({success: false, message: "Internal Server Error"})
    }
}

export const getAllTenant = async(req, res) => {
    try{
        const result = await Admin.getAllTenant();
        if(result.length === 0){
            res.status(400).json({success: true, message: "Empty List"});
        }else{
            const [tenants] = result;
            res.status(200).json({success: true, data: tenants});
        }
    }catch(error){
        console.error(error.message);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export const getTenant = async(req, res) => {
    const { tenant_id } = req.params;
    try{
        const result = await Admin.getTenant({
            tenant_id: tenant_id
        });
        if(result.length === 0){
            res.status(400).json({success: false, message: "Invalid tenant id"});
        }else{
            const [tenant] = result;
            res.status(200).json({success: true, data: tenant});
        }
    }catch(error){
        console.error(error.message);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}