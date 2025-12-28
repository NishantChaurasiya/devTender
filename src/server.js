const express=require("express");
const app=express()

app.get("/user",(req,res)=>{
 console.log(req.query);
 res.send("done")
 
})
app.get("/product/:id/:name/:price",(req,res)=>{
console.log(req.params);

res.send("fetching data done")
})
app.listen(3000,()=>{
    console.log("server in running on port 3000");
    
})