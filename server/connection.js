

// // for postgres sql
// const Pool = require("pg").Pool;
// const pool = new Pool({
//     user : "postgres",
//     password : "admin",
//     host : "localhost",
//     port : 5432,
//     database : "crud"
// });

//for mysql
const {createPool} = require('mysql');
const pool = createPool({
    host : "localhost",
    user : "root",
    password : "",
    database : "test"
});


module.exports = pool;