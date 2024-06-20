const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    userid:Number,
    username:String,
    password:String,
    userrole:String
})

module.exports=mongoose.model("User",userSchema);