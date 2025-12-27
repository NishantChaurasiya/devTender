const express=require("express");
const app=express()
app.use("/test",(req,res)=>{
    res.send("hello from test page")
})
app.use("/",(req,res)=>{
    res.send("hello from home page")
})
app.listen(3000,()=>{
    console.log("server in running on port 3000");
    
})