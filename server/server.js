const express = require('express');
const nodemailer = require('nodemailer');
const router = require('./otp'); 
const bodyParser = require('body-parser'); 
const cors=require("cors");
const mongoose= require('mongoose')
const regModel=require("./models/reg");
const app = express();
const port = process.env.PORT || 3001; 
const Bid = require('./models/bidModel');
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
app.post('/submit-bid', async (req, res) => {
  try {
    const { selectedOption, bidValue } = req.body;
    const bid = new Bid({ selectedOption, bidValue });
    await bid.save();
    res.status(500).json({ message: 'Bid saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(201).json({ error: 'Error saving bid' });
  }
});


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
