import dotenv from "dotenv";
import pkg from "pg";
const { Client } = pkg; 

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const client = new Client({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST, 
    port: DB_PORT, 
    database: DB_NAME, 
    ssl: {
        rejectUnauthorized: false,
    },
});


await client.connect();

export default client;
