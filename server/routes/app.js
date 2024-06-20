const express = require('express');
const nodemailer = require('nodemailer');
const router = require('./otp'); 
const bodyParser = require('body-parser'); 
const cors=require("cors");
const mongoose= require('mongoose')
const regModel=require("./models/reg");
const app = express();
const port = process.env.PORT || 3001; 

app.use(bodyParser.json()); 
app.use(express.json());
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/REGESTRATIONS");
app.post('/login',(req,res)=>
{
const{email,pass}=req.body;
regModel.findOne({email:email})
.then(user=>
  {
    if(user)
    {
      if(user.pass===pass)
      {
      res.json("success")
      }
    
    esle
    {
      res.json("the password is incorrect")
    }
  }
  else{
res.json("no record exist")
  }
  })
})


app.post('/regpage',(req,res)=>
{
regModel.create(req.body)

.then(register=>res.json(register))
.catch(err=> res.json(err))
}
)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
