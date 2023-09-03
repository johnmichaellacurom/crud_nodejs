const pool = require('./connection');
const express = require('express');
const cors = require('cors');
const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get("/users", async (req, res)=>{
    // try{
    //     // for postgres
    //     const query = await pool.query("SELECT * FROM `user`;");
    //     res.json(query.rows);
    // }
    // catch(err){
    //     console.error(err);
    // }

    // for mysql
    await pool.query("SELECT * FROM `user`;", (err, result, field) => {
        if(err){
            console.err(err);
        }
        else{
            res.json(result);
        }
    });
});

app.post("/users", async (req, res) =>{
    const {username, password} = req.body;
    await pool.query("INSERT INTO `user`(`username`,`password`) VALUES('"+username+"','"+password+"');", (err, result, field) => {
        if(err){
            console.err(err);
        }
        else{
            res.json(result);
        }
    });
});


app.listen(5000, ()=>{
    console.log("Server running on port 5000");
})