import getConnection from "../config/mysql.js";
import { Tenant} from "../models/index.js"

export const signup = async (req, res) => {
    const connection = await getConnection();
    try{
        Tenant.create({
            company_name: "Alya vat",
            owner_first_name: "ranvir kapoor",
            owner_last_name: "Lawra",
            email_id: "rakeh@aejbae.com"
        });
    }catch(error){

    }finally{
        if(connection){
            await connection.end();
        }
    }
}

export const login = async (req, res) => {

}