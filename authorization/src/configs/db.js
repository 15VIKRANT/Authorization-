const mongoose=require("mongoose");


module.exports=()=>{
    return mongoose.connect("mongodb+srv://Vikrant:Vikrant1234@cluster0.perep.mongodb.net/test")
}