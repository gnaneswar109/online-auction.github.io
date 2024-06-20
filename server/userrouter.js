const express=require('express')
const route=express.Router()
const Users=require('../Models/usersmodel');


//post the data 
route.post('/',async(req,res)=>{
try{
    const users=new Users(req.body);
    await users.save();
    res.status(200).json(users);

}catch(err){
    res.status(400).json({message:err.message})
}
});

module.exports=route;