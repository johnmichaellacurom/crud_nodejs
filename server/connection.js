require('dotenv').config();

//for mysql
const {createPool} = require('mysql');
const pool = createPool({
    host : process.env.ENV_HOST,
    user : process.env.ENV_USER,
    password : process.env.ENV_PASSWORD,
    database : process.env.ENV_DBNAME
});


module.exports = pool;