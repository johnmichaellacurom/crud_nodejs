const pool = require('./connection');
const express = require('express');
const cors = require('cors');
const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get("/users", async (req, res)=>{
    // for mysql
    pool.query("SELECT * FROM `user`;", (err, result, field) => {
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
    pool.query("INSERT INTO `user`(`username`,`password`) VALUES('"+username+"','"+password+"');", (err, result, field) => {
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