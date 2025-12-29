const express = require("express")
const connectDb = require("./config/db")
const app = express()

connectDb()
    .then(() => {
        console.log("database connect successfully");
        app.listen(3000, () => {
            console.log("server is started at port 3000");
        })
    })
    .catch((err)=>{
        console.log("error in connection to databse",err.message);
        
    })
