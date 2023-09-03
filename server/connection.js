

// // for postgres sql
// const Pool = require("pg").Pool;
// const pool = new Pool({
//     user : "postgres",
//     password : "admin",
//     host : "localhost",
//     port : 5432,
//     database : "crud"
// });

// //for mysql
// const {createPool} = require('mysql');
// const pool = createPool({
//     host : "localhost",
//     user : "root",
//     password : "",
//     database : "test"
// });

//for mysql
const {createPool} = require('mysql');
const pool = createPool({
    host : "db4free.net",
    user : "root_12345",
    password : "root1234",
    database : "crud_nodejs"
});


module.exports = pool;