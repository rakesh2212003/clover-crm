import mysql from 'mysql2/promise'

const getConnection = async() => {
    try{
        const connection = await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            port: process.env.MYSQL_PORT,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
        })
        return connection;
    }catch(error){
        console.log('Mysql connection error');
        throw error;
    }
}

export default getConnection;