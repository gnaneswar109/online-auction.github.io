const mongoose= require('mongoose')
const regSchema= new mongoose.Schema({
    name: String,
    email: String,
    pass:String
})
const regModel=mongoose.model("registers",regSchema)
module.exports=regModel
