const express =require('express');
  const router=express.Router();
  const jwt = require('jsonwebtoken');
  const jwt=require('jsonwebtoken');
  const SECRET_KEY='pleasedontdo';



  router.post('/token',async(req ,res)=>
  {
    const {username,password}=req.body;
    const token=await jwt.sign({username},SECRET_KEY,{expiresIn:'1h'});
    res.json({token});
  })