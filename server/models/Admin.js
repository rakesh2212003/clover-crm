import getConnection from '../config/mysql.js'

const Admin = {
    login: async({username, password}) => {
        const sql = `SELECT username,first_name,last_name,created_on,updated_on,created_by,updated_by FROM admins WHERE username=? AND password=?`;
        
        const connection = await getConnection();
        const [result] = await connection.execute(sql, [username,password]);
        await connection.end();

        return result;
    },
    getAllTenant: async() => {
        const sql = `SELECT * FROM tenants WHERE deleted=0`;
        
        const connection = await getConnection();
        const [result] = await connection.execute(sql);
        await connection.end();

        return result;
    },
    getTenant: async({tenant_id}) => {
        const sql = `SELECT * FROM tenants WHERE id=? AND deleted=0`;
        
        const connection = await getConnection();
        const [result] = await connection.execute(sql, [tenant_id]);
        await connection.end();

        return result;
    },
    findById: async({id}) => {
        const sql = `SELECT * FROM admins WHERE id=?`;
        
        const connection = await getConnection();
        const [result] = await connection.execute(sql, [id]);
        await connection.end();

        return result;
    }
}

export default Admin;