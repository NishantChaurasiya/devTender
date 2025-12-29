const mongoose=require("mongoose")
const connectDb=async()=>{
    await mongoose.connect("mongodb+srv://namasteDev:hello1122@namastenode.7why7fi.mongodb.net/devTinder")
}
module.exports=connectDb