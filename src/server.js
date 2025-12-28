const express=require("express");
const app=express()
app.get("/test",(req,res)=>{
    res.send("hello from test page")
})
app.post("/user",(req,res)=>{
    res.send("data save in database")
})
app.get("/",(req,res)=>{
    res.send("hello from home page")
})
app.listen(3000,()=>{
    console.log("server in running on port 3000");
    
})